"use strict";
/* Caderno de estudo — Método dos 5 passos */
const CORES=["var(--t1)","var(--t2)","var(--t3)","var(--t4)","var(--t5)","var(--t6)"];
DISC.forEach((d,i)=>{d.cor=CORES[i%6];d.temas.forEach(t=>t.quiz.forEach((q,k)=>{q.uid=d.id+"|"+t.id+"|"+k;q.disc=d.id;q.temaId=t.id;q.temaNome=t.curto;}));});
const CHAVE="caderno-todas-v1";
let estado={notas:{},flash:{},q:{},diag:{},prova:{},simFinal:{}};
try{const s=localStorage.getItem(CHAVE); if(s) estado=Object.assign(estado,JSON.parse(s));}catch(e){}
["q","diag","prova","simFinal","notas","flash"].forEach(k=>{if(!estado[k])estado[k]={}});
function salvarLocal(){try{localStorage.setItem(CHAVE,JSON.stringify(estado))}catch(e){}}
function salvar(){estado.ts=Date.now();salvarLocal();}
/* ---------- backup do progresso ---------- */
let pendente=false;
function agendarEnvio(){}
function setSync(){}
function mesclar(a,b){
  const r={notas:{},flash:{},q:{},diag:{},prova:{},simFinal:{},ts:Math.max(a.ts||0,b.ts||0)};
  const novo=(a.ts||0)>=(b.ts||0)?a:b, velho=novo===a?b:a;
  for(const k of new Set([...Object.keys(a.notas||{}),...Object.keys(b.notas||{})])){const x=a.notas?.[k],y=b.notas?.[k];r.notas[k]=Math.max(x??-1,y??-1);}
  for(const k of new Set([...Object.keys(a.flash||{}),...Object.keys(b.flash||{})])) r.flash[k]=[...new Set([...(a.flash?.[k]||[]),...(b.flash?.[k]||[])])];
  for(const k of new Set([...Object.keys(a.q||{}),...Object.keys(b.q||{})])){const x=a.q?.[k],y=b.q?.[k];r.q[k]=!x?y:!y?x:((x.t||0)>=(y.t||0)?x:y);}
  r.diag=Object.assign({},velho.diag||{},novo.diag||{});
  r.prova=Object.assign({},velho.prova||{},novo.prova||{});
  for(const k of new Set([...Object.keys(a.simFinal||{}),...Object.keys(b.simFinal||{})])){const x=a.simFinal?.[k]||[],y=b.simFinal?.[k]||[];r.simFinal[k]=x.length>=y.length?x:y;}
  return r;
}
function baixarBackup(){
  const blob=new Blob([JSON.stringify(estado,null,1)],{type:"application/json"});
  const a=document.createElement("a"); a.href=URL.createObjectURL(blob);
  a.download="progresso-caderno-"+hoje()+".json"; document.body.appendChild(a); a.click();
  setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove();},500);
}
function restaurarBackup(arquivo){
  const r=new FileReader();
  r.onload=()=>{ try{ const dados=JSON.parse(r.result); if(!dados||typeof dados!=="object"||!dados.notas) throw 0;
      estado=mesclar(estado,dados); ["q","diag","prova","simFinal","notas","flash"].forEach(k=>{if(!estado[k])estado[k]={}});
      salvarLocal(); render(); alert("Progresso restaurado e juntado ao deste aparelho."); }
    catch(e){ alert("Este arquivo não é um backup válido do caderno."); } };
  r.readAsText(arquivo);
}
function abrirBackup(){
  const dlg=document.getElementById("dlgBackup"); if(dlg.showModal) dlg.showModal(); else dlg.setAttribute("open","");
}
let atual={disc:null,view:"inicio",sub:"resumo"};
const $=s=>document.querySelector(s);
const main=$("#main"), nav=$("#nav"), discs=$("#discs");
function embaralhar(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function D(){return DISC.find(d=>d.id===atual.disc)}
function ir(disc,view,sub){atual.disc=disc;atual.view=view||"inicio";atual.sub=sub||"resumo";render();window.scrollTo(0,0)}

/* ---------- datas ---------- */
function iso(d){const z=n=>String(n).padStart(2,"0");return d.getFullYear()+"-"+z(d.getMonth()+1)+"-"+z(d.getDate())}
function hoje(){return iso(new Date())}
function addDias(s,n){const d=new Date(s+"T12:00:00");d.setDate(d.getDate()+n);return iso(d)}
function difDias(a,b){return Math.round((new Date(b+"T12:00:00")-new Date(a+"T12:00:00"))/864e5)}
function fmt(s){const d=new Date(s+"T12:00:00");return d.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})}
function sem(s){const d=new Date(s+"T12:00:00");return d.toLocaleDateString("pt-BR",{weekday:"short"}).replace(".","")}

/* ---------- repetição espaçada ---------- */
const INTERVALOS=[0,1,3,7,14];
function registrar(q,ok){
  const s=estado.q[q.uid]||{box:0,erros:0};
  if(ok){ s.box=Math.min((s.box||0)+1,4); s.due=addDias(hoje(),INTERVALOS[s.box]);
    if(s.pend){ if(s.ultAcerto!==hoje()) s.acertosPos=(s.acertosPos||0)+1; s.ultAcerto=hoje(); if(s.acertosPos>=2){s.pend=false;s.acertosPos=0;} } }
  else { s.box=0; s.erros=(s.erros||0)+1; s.due=hoje(); s.pend=true; s.acertosPos=0; }
  s.t=Date.now(); estado.q[q.uid]=s; salvar();
}
function questoes(d){return d.temas.flatMap(t=>t.quiz)}
function pendentes(d,t){return (t?t.quiz:questoes(d)).filter(q=>estado.q[q.uid]&&estado.q[q.uid].pend)}
function revisaoHoje(d){const h=hoje();return questoes(d).filter(q=>{const s=estado.q[q.uid];return s&&s.due&&s.due<=h&&(s.pend||s.box<4)})}

/* ---------- domínio e prontidão ---------- */
function statusTema(d,t){
  const k=d.id+":"+t.id, nota=estado.notas[k], fl=(estado.flash[k]||[]).length, pend=pendentes(d,t).length;
  const flashOk=fl>=t.flash.length, quizOk=nota!=null&&nota>=90, errosOk=pend===0;
  return {nota,fl,pend,flashOk,quizOk,errosOk,dominado:flashOk&&quizOk&&errosOk};
}
function simFinalOk(d){return (estado.simFinal[d.id]||[]).filter(p=>p>=90).length}
function prontidao(d){
  const dom=d.temas.filter(t=>statusTema(d,t).dominado).length/d.temas.length;
  const sims=Math.min(simFinalOk(d),2)/2;
  const best=Math.max(0,...(estado.simFinal[d.id]||[0]));
  const pend=pendentes(d).length;
  const diag=estado.diag[d.id]?1:0;
  return Math.round(diag*5+dom*55+Math.min(best,100)/100*15+sims*20+(pend===0?5:0));
}
function ordemTemas(d){
  const dg=estado.diag[d.id]||{};
  return d.temas.map((t,i)=>({t,i,s:dg[t.id]!=null?dg[t.id]:101})).sort((a,b)=>a.s-b.s||a.i-b.i).map(x=>x.t);
}
function proximoPasso(d){
  if(!estado.diag[d.id]) return {txt:"Faça o diagnóstico (2 questões por tema).",acao:()=>ir(d.id,"diag")};
  if(!estado.prova[d.id]) return {txt:"Informe a data da prova para gerar sua agenda.",acao:()=>{ir(d.id,"inicio");setTimeout(()=>{const e=$("#dataProva");if(e)e.focus()},50)}};
  const rv=revisaoHoje(d).length; if(rv) return {txt:`Faça a revisão do dia (${rv} questões).`,acao:()=>ir(d.id,"revisao")};
  const t=ordemTemas(d).find(t=>!statusTema(d,t).dominado);
  if(t){const s=statusTema(d,t);const sub=!s.flashOk&&s.fl<1&&s.nota==null?"resumo":!s.flashOk?"flash":"quiz";return {txt:`Domine o tema “${t.curto}”.`,acao:()=>ir(d.id,t.id,sub)}}
  if(simFinalOk(d)<2) return {txt:"Faça o simulado final (meta: 90% ou mais, duas vezes).",acao:()=>ir(d.id,"simulado")};
  return {txt:"Você está pronta! Mantenha a revisão do dia até a prova.",acao:()=>ir(d.id,"revisao")};
}

/* ---------- agenda ---------- */
function agenda(d){
  const prova=estado.prova[d.id]; if(!prova) return null;
  const h=hoje(), N=difDias(h,prova); if(N<=0) return {N,dias:[]};
  const temas=ordemTemas(d), dias=[];
  const reservados=N>=4?2:N>=2?1:0, estudo=Math.max(1,N-reservados);
  const porDia=Math.ceil(temas.length/estudo);
  const diasTema=Math.ceil(temas.length/porDia);
  const janela=Math.min(estudo,Math.max(diasTema,Math.ceil(estudo*0.6)));
  const pos=new Set(); for(let k=0;k<diasTema;k++) pos.add(Math.min(janela-1,Math.round(k*janela/diasTema)));
  let ti=0;
  for(let i=0;i<estudo;i++){
    const data=addDias(h,i);
    if(pos.has(i)&&ti<temas.length){ dias.push({data,tipo:"tema",temas:temas.slice(ti,ti+porDia)}); ti+=porDia; }
    else dias.push({data,tipo:"revisao"});
  }
  if(ti<temas.length){ const ult=dias.filter(x=>x.tipo==="tema").pop()||dias[0]; ult.tipo="tema"; ult.temas=(ult.temas||[]).concat(temas.slice(ti)); }
  for(let r=0;r<reservados;r++) dias.push({data:addDias(h,estudo+r),tipo:"simulado",n:r+1});
  return {N,dias};
}

/* ---------- topo e navegação ---------- */
function montarTopo(){
  discs.innerHTML=`<button class="disc" data-d="" aria-current="${atual.disc===null}">Painel</button>`+DISC.map(d=>`<button class="disc" data-d="${d.id}" aria-current="${atual.disc===d.id}">${d.nome}</button>`).join("");
  discs.querySelectorAll(".disc").forEach(b=>b.onclick=()=>ir(b.dataset.d||null));
  const ativo=discs.querySelector('[aria-current="true"]'); if(ativo&&ativo.scrollIntoView) ativo.scrollIntoView({block:"nearest",inline:"nearest"});
}
function montarNav(){
  if(atual.disc===null){
    nav.innerHTML=`<h1>Painel geral<small>${DISC.length} disciplinas</small></h1>`+
    `<button class="aba" style="--c:var(--tinta2)" data-v="inicio" aria-current="${atual.view==="inicio"}">Visão geral</button>`+
    `<button class="aba" style="--c:var(--tinta2)" data-v="metodo" aria-current="${atual.view==="metodo"}">O método</button>`+
    DISC.map(d=>`<button class="aba" style="--c:${d.cor}" data-d="${d.id}">${d.nome}<span class="prog">${prontidao(d)}%</span></button>`).join("")+
    `<button class="aba" style="--c:var(--sim)" data-v="simulado" aria-current="${atual.view==="simulado"}">Simulado geral</button>`;
    nav.querySelectorAll(".aba").forEach(b=>b.onclick=()=>{ if(b.dataset.d) ir(b.dataset.d); else ir(null,b.dataset.v); });
    return;
  }
  const d=D(), rv=revisaoHoje(d).length, er=pendentes(d).length;
  const topo=[
    {id:"inicio",curto:"Plano de estudo",cor:"var(--tinta2)"},
    {id:"diag",curto:"1 · Diagnóstico",cor:"var(--tinta2)",ok:!!estado.diag[d.id]},
    {id:"revisao",curto:"Revisão do dia",cor:"var(--tinta2)",badge:rv},
    {id:"erros",curto:"Caderno de erros",cor:"var(--tinta2)",badge:er}];
  const temas=ordemTemas(d).map(t=>({...t,ok:statusTema(d,t).dominado}));
  const fim=[{id:"simulado",curto:"5 · Simulado final",cor:"var(--sim)",ok:simFinalOk(d)>=2}];
  const item=t=>`<button class="aba" style="--c:${t.cor}" data-v="${t.id}" aria-current="${atual.view===t.id}">${t.curto}${t.badge?`<span class="badge">${t.badge}</span>`:t.ok?`<span class="prog">✓</span>`:""}</button>`;
  nav.innerHTML=`<h1>${d.nome}<small>Prontidão: ${prontidao(d)}%</small></h1>`+topo.map(item).join("")+
   `<div style="font-family:var(--sans);font-size:.75rem;color:var(--tinta2);margin:10px 0 2px 4px;text-transform:uppercase;letter-spacing:.06em">3 · Temas (ordem sugerida)</div>`+temas.map(item).join("")+fim.map(item).join("");
  nav.querySelectorAll(".aba").forEach(b=>b.onclick=()=>ir(atual.disc,b.dataset.v));
}
function render(){
  montarTopo(); montarNav();
  if(atual.disc===null){ if(atual.view==="simulado") return renderSimulado(null); if(atual.view==="metodo") return renderMetodo(); return renderPainel(); }
  const v=atual.view;
  if(v==="inicio") return renderPlano();
  if(v==="diag") return renderDiag();
  if(v==="revisao") return renderRevisao();
  if(v==="erros") return renderErros();
  if(v==="simulado") return renderSimulado(D());
  renderTema();
}

/* ---------- painel e método ---------- */
function renderPainel(){
  document.documentElement.style.setProperty("--acc","var(--t5)");
  main.innerHTML=`<header class="cab"><h2>Todas as disciplinas</h2><p>Cada disciplina segue o <b>Método dos 5 passos</b>: diagnosticar, planejar, dominar, revisar e simular. O percentual é a sua <b>prontidão</b> para a prova.</p></header>
  <div class="inicio-grade">${DISC.map(d=>{const p=prontidao(d), pv=estado.prova[d.id];const dom=d.temas.filter(t=>statusTema(d,t).dominado).length;
   return `<button class="disc-card" style="--c:${d.cor}" data-d="${d.id}"><h3>${d.nome}</h3><p>${dom}/${d.temas.length} temas dominados${pv?` · prova em ${fmt(pv)}`:""}</p><div class="medidor"><div class="barra"><i style="width:${p}%"></i></div><span>${p}% pronta</span></div></button>`}).join("")}</div>
  <div class="bloco" style="margin-top:22px"><h3>Comece por aqui</h3><p style="margin:0">Leia <button class="link" id="verMetodo">como funciona o método</button> e escolha a disciplina da próxima prova nas abas do topo.</p></div>`;
  main.querySelectorAll(".disc-card").forEach(b=>b.onclick=()=>ir(b.dataset.d));
  $("#verMetodo").onclick=()=>ir(null,"metodo");
}
function renderMetodo(){
  document.documentElement.style.setProperty("--acc","var(--t5)");
  const P=[["Diagnosticar","Responda 2 questões de cada tema. O resultado mostra seus pontos fracos e define a ordem de estudo: do tema mais fraco para o mais forte."],
  ["Planejar","Informe a data da prova. O caderno monta uma agenda dia a dia: temas nos primeiros dias, dias de revisão intercalados e simulados no final."],
  ["Dominar","Um tema só conta como dominado com três critérios: todos os flashcards marcados como “já sei”, 90% ou mais nas questões e nenhum erro pendente. Estude na ordem Resumo → Pegadinhas → Flashcards → Questões."],
  ["Revisar","Toda questão errada vai para o Caderno de erros e só sai depois de acertada em dois dias diferentes. As questões respondidas voltam na Revisão do dia após 1, 3, 7 e 14 dias, o que combate o esquecimento."],
  ["Simular","Faça o simulado final da disciplina (20 questões sorteadas). A meta é tirar 90% ou mais em dois simulados. Os erros do simulado também vão para o Caderno de erros."]];
  main.innerHTML=`<header class="cab"><h2>O Método dos 5 passos</h2><p>Um roteiro para chegar à prova com o conteúdo dominado, e não só “lido”. Ele se apoia em três práticas de estudo com boa evidência: testar a si mesma (em vez de só reler), revisar em intervalos crescentes e corrigir os próprios erros.</p></header>
  <div class="passos">${P.map((p,i)=>`<div class="passo"><div class="num">${i+1}</div><div><h3>${p[0]}</h3><p>${p[1]}</p></div></div>`).join("")}</div>
  <div class="bloco"><h3>Prontidão</h3><ul>
  <li><b>55%</b> vêm dos temas dominados.</li><li><b>20%</b> dos dois simulados com 90% ou mais, e <b>15%</b> da melhor nota nos simulados.</li><li><b>5%</b> por ter feito o diagnóstico e <b>5%</b> por estar com o Caderno de erros zerado.</li></ul>
  <p style="margin:.6em 0 0">O progresso fica salvo no navegador de cada aparelho. Para levá-lo a outro aparelho, use o botão <b>Backup</b> no topo: baixe o arquivo de progresso e restaure-o no outro aparelho (os dados são juntados, sem perder nada).</p><p style="margin:.6em 0 0">Chegando a <b>100%</b>, a disciplina está pronta. Até o dia da prova, mantenha a Revisão do dia.</p></div>
  <div class="bloco"><h3>Rotina diária sugerida (40 a 60 minutos)</h3><ol style="margin:0;padding-left:1.2em">
  <li>Revisão do dia e Caderno de erros (10 a 15 min).</li><li>Tema do dia: resumo, pegadinhas e flashcards (15 a 25 min).</li><li>Questões do tema até 90% (10 a 20 min).</li></ol></div>`;
}

/* ---------- plano da disciplina ---------- */
function renderPlano(){
  const d=D(); document.documentElement.style.setProperty("--acc",d.cor);
  const p=prontidao(d), px=proximoPasso(d), ag=agenda(d), pv=estado.prova[d.id]||"";
  const dom=d.temas.filter(t=>statusTema(d,t).dominado).length, er=pendentes(d).length, rv=revisaoHoje(d).length, sf=simFinalOk(d);
  const passos=[
    ["Diagnosticar",estado.diag[d.id]?"Feito. Os temas estão ordenados do mais fraco para o mais forte.":"2 questões por tema para descobrir seus pontos fracos.",!!estado.diag[d.id],"diag",estado.diag[d.id]?"Refazer":"Começar"],
    ["Planejar",pv?`Prova em ${fmt(pv)} (${sem(pv)}). Agenda abaixo.`:"Informe a data da prova para gerar a agenda.",!!pv,null,null],
    ["Dominar",`${dom} de ${d.temas.length} temas dominados.`,dom===d.temas.length,null,null],
    ["Revisar",`${rv} questões para revisar hoje · ${er} erros pendentes.`,er===0&&rv===0&&Object.keys(estado.q).some(k=>k.startsWith(d.id+"|")),"revisao","Revisar"],
    ["Simular",`${sf} de 2 simulados com 90% ou mais.`,sf>=2,"simulado","Fazer simulado"]];
  main.innerHTML=`<header class="cab"><h2>${d.nome}</h2><p>Plano de estudo pelo Método dos 5 passos.</p></header>
  <div class="prontidao"><div class="anel" style="--p:${p}"><span>${p}%</span></div><div style="flex:1;min-width:220px"><h3>${p>=100?"Pronta para a nota máxima":"Próximo passo"}</h3><p>${px.txt}</p></div><button class="btn pri" id="proximo">Ir agora</button></div>
  <div class="passos">${passos.map((s,i)=>`<div class="passo ${s[2]?"feito":""}"><div class="num">${s[2]?"✓":i+1}</div><div><h3>${i+1}. ${s[0]}</h3><p>${s[1]}</p>${i===1?`<p style="margin-top:8px"><label for="dataProva" style="font-family:var(--sans);font-size:.85rem;margin-right:8px">Data da prova</label><input type="date" id="dataProva" value="${pv}" min="${hoje()}"></p>`:""}</div>${s[3]?`<button class="btn" data-ir="${s[3]}">${s[4]}</button>`:""}</div>`).join("")}</div>
  <div class="bloco"><h3>Temas na ordem sugerida</h3><div class="linha-temas">${ordemTemas(d).map(t=>{const s=statusTema(d,t),dg=(estado.diag[d.id]||{})[t.id];
    return `<div class="lt"><button class="link" data-tema="${t.id}">${t.titulo}</button><span style="display:flex;gap:6px;flex-wrap:wrap">${dg!=null?`<span class="chip">diagnóstico ${dg}%</span>`:""}<span class="chip ${s.flashOk?"ok":""}">flashcards ${Math.min(s.fl,t.flash.length)}/${t.flash.length}</span><span class="chip ${s.quizOk?"ok":""}">questões ${s.nota!=null?s.nota+"%":"—"}</span>${s.pend?`<span class="chip alerta">${s.pend} erro(s)</span>`:""}${s.dominado?`<span class="chip ok">dominado ✓</span>`:""}</span></div>`}).join("")}</div></div>
  <div class="bloco"><h3>Agenda até a prova</h3>${renderAgenda(d,ag)}</div>`;
  $("#proximo").onclick=px.acao;
  main.querySelectorAll("[data-ir]").forEach(b=>b.onclick=()=>ir(d.id,b.dataset.ir));
  main.querySelectorAll("[data-tema]").forEach(b=>b.onclick=()=>ir(d.id,b.dataset.tema));
  $("#dataProva").onchange=e=>{const v=e.target.value; if(v) estado.prova[d.id]=v; else delete estado.prova[d.id]; salvar(); render();};
}
function renderAgenda(d,ag){
  if(!ag) return `<p style="margin:0">Informe a data da prova no passo 2 para gerar a agenda.</p>`;
  if(ag.N<=0) return `<p style="margin:0">A prova é hoje (ou já passou). Faça a <button class="link" data-ir="revisao">Revisão do dia</button>, zere o <button class="link" data-ir="erros">Caderno de erros</button> e faça um <button class="link" data-ir="simulado">simulado</button>.</p>`;
  const h=hoje();
  return `<div class="agenda">${ag.dias.map(x=>{
    let itens=[];
    if(x.tipo==="tema") itens=x.temas.map(t=>{const ok=statusTema(d,t).dominado;return `<li>${ok?"✓ ":""}Dominar <button class="link" data-tema="${t.id}">${t.curto}</button></li>`});
    if(x.tipo==="revisao") itens=[`<li>Revisão geral: refazer as questões dos temas já estudados e zerar o Caderno de erros</li>`];
    if(x.tipo==="simulado") itens=[`<li><button class="link" data-ir="simulado">Simulado final ${x.n}</button> (meta: 90% ou mais)</li>`,`<li>Corrigir os erros do simulado no Caderno de erros</li>`];
    itens.push(`<li>Revisão do dia (10 a 15 min)</li>`);
    return `<div class="dia ${x.data===h?"hoje":""}"><div class="data">${x.data===h?"Hoje":fmt(x.data)}<small>${sem(x.data)}</small></div><ul>${itens.join("")}</ul></div>`}).join("")}
    <div class="dia"><div class="data">${fmt(estado.prova[d.id])}<small>${sem(estado.prova[d.id])}</small></div><ul><li><b>Dia da prova:</b> só a Revisão do dia, com calma.</li></ul></div></div>`;
}

/* ---------- diagnóstico, revisão, erros ---------- */
function renderDiag(){
  const d=D(); document.documentElement.style.setProperty("--acc",d.cor);
  const lista=d.temas.flatMap(t=>embaralhar(t.quiz).slice(0,2).map(q=>({...q,tema:t.curto})));
  main.innerHTML=`<header class="cab"><h2>1 · Diagnóstico</h2><p>${lista.length} questões, 2 de cada tema. Responda sem consultar: o objetivo é descobrir o que você ainda não sabe. Ao final, os temas são ordenados do mais fraco para o mais forte.</p></header><section id="corpo"></section>`;
  renderQuiz($("#corpo"),embaralhar(lista),null,()=>renderDiag(),(res)=>{
    const r={}; d.temas.forEach(t=>{const qs=res.filter(x=>x.q.temaId===t.id);r[t.id]=qs.length?Math.round(qs.filter(x=>x.ok).length/qs.length*100):0;});
    estado.diag[d.id]=r; salvar(); montarNav();
    const ord=ordemTemas(d);
    return `<h3>Diagnóstico concluído</h3><p style="margin:0 0 8px">Ordem de estudo sugerida:</p><ol style="margin:0;padding-left:1.2em">${ord.map(t=>`<li>${t.curto} — ${r[t.id]}%</li>`).join("")}</ol><p style="margin:10px 0 0"><button class="btn pri" id="verPlano">Ver meu plano</button></p>`;
  },()=>{$("#verPlano").onclick=()=>ir(d.id,"inicio")});
}
function renderRevisao(){
  const d=D(); document.documentElement.style.setProperty("--acc",d.cor);
  const pend=pendentes(d), due=revisaoHoje(d).filter(q=>!pend.includes(q));
  const lista=embaralhar(pend).concat(embaralhar(due)).slice(0,15).map(q=>({...q,tema:q.temaNome}));
  main.innerHTML=`<header class="cab"><h2>Revisão do dia</h2><p>Questões que você errou ou que estão no momento certo de revisar (depois de 1, 3, 7 e 14 dias). Acertou, ela volta mais tarde; errou, volta amanhã.</p></header><section id="corpo"></section>`;
  if(!lista.length){ $("#corpo").innerHTML=`<div class="bloco"><h3>Nada para revisar hoje</h3><p style="margin:0">As questões que você responder nos temas, no diagnóstico e nos simulados entram aqui automaticamente nos dias certos. Siga o <button class="link" id="vp">plano de estudo</button>.</p></div>`; $("#vp").onclick=()=>ir(d.id,"inicio"); return; }
  renderQuiz($("#corpo"),lista,null,()=>renderRevisao());
}
function renderErros(){
  const d=D(); document.documentElement.style.setProperty("--acc",d.cor);
  const pend=pendentes(d);
  main.innerHTML=`<header class="cab"><h2>Caderno de erros</h2><p>Toda questão errada fica aqui até ser acertada em <b>dois dias diferentes</b>. Zerar o caderno é um dos critérios para dominar os temas.</p></header><section id="corpo"></section>`;
  const c=$("#corpo");
  if(!pend.length){ c.innerHTML=`<div class="bloco"><h3>Caderno de erros zerado ✓</h3><p style="margin:0">Nenhum erro pendente nesta disciplina.</p></div>`; return; }
  const grupos=d.temas.map(t=>({t,qs:pend.filter(q=>q.temaId===t.id)})).filter(g=>g.qs.length);
  c.innerHTML=`<div class="bloco"><h3>${pend.length} erro(s) pendente(s)</h3><div class="linha-temas">${grupos.map(g=>`<div class="lt"><span>${g.t.curto}</span><span class="chip alerta">${g.qs.length}</span></div>`).join("")}</div><p style="margin:14px 0 0"><button class="btn pri" id="refazerErros">Refazer os erros agora</button></p></div>
  <div class="bloco"><h3>Revise antes de refazer</h3><ul>${pend.map(q=>`<li><b>${q.temaNome}:</b> ${q.q}<br><span style="color:var(--tinta2)">${q.exp}</span></li>`).join("")}</ul></div>`;
  $("#refazerErros").onclick=()=>{ c.innerHTML=""; renderQuiz(c,embaralhar(pend).map(q=>({...q,tema:q.temaNome})),null,()=>renderErros()); };
}

/* ---------- tema ---------- */
function renderTema(){
  const d=D(); const t=d.temas.find(x=>x.id===atual.view); if(!t) return ir(d.id);
  document.documentElement.style.setProperty("--acc",t.cor);
  const s=statusTema(d,t);
  main.innerHTML=`<header class="cab"><h2>${t.titulo}</h2><p>${t.desc}</p></header>
  <div class="status-tema"><span class="chip ${s.flashOk?"ok":""}">Flashcards ${Math.min(s.fl,t.flash.length)}/${t.flash.length}</span><span class="chip ${s.quizOk?"ok":""}">Questões ${s.nota!=null?s.nota+"%":"—"} (meta 90%)</span><span class="chip ${s.errosOk?"ok":"alerta"}">${s.pend?s.pend+" erro(s) pendente(s)":"Sem erros pendentes"}</span>${s.dominado?`<span class="chip ok">Tema dominado ✓</span>`:""}</div>
  <div class="sub" role="tablist">${[["resumo","Resumo"],["pegadinhas","Pegadinhas"],["flash","Flashcards"],["quiz","Questões"]].map(([k,l])=>`<button role="tab" aria-selected="${atual.sub===k}" data-s="${k}">${l}</button>`).join("")}</div><section id="corpo"></section>`;
  main.querySelectorAll(".sub button").forEach(b=>b.onclick=()=>{atual.sub=b.dataset.s;renderTema()});
  const c=$("#corpo"), chave=d.id+":"+t.id;
  if(atual.sub==="resumo") c.innerHTML=t.resumo.map((m,i)=>`<details class="bloco" ${i===0?"open":""}><summary>${m.h}</summary><ul>${m.itens.map(x=>`<li>${x}</li>`).join("")}</ul></details>`).join("")+`<p style="text-align:right"><button class="btn pri" id="seg">Próximo: Pegadinhas →</button></p>`;
  if(atual.sub==="pegadinhas") c.innerHTML=`<div class="bloco"><h3>O que costuma derrubar na prova</h3>${t.pegadinhas.map(p=>`<div class="pegadinha"><b>Atenção: </b>${p}</div>`).join("")}</div><p style="text-align:right"><button class="btn pri" id="seg">Próximo: Flashcards →</button></p>`;
  if(atual.sub==="flash") renderFlash(c,t,chave);
  if(atual.sub==="quiz") renderQuiz(c,t.quiz,chave,null,(res,pct)=>{const s2=statusTema(d,t);return `<h3>Resultado: ${res.filter(x=>x.ok).length}/${res.length} (${pct}%)</h3><p style="margin:0">${s2.dominado?"Tema dominado ✓. Siga para o próximo tema do plano.":pct>=90?(s2.flashOk?"Meta de questões atingida. Falta zerar os erros pendentes deste tema (eles voltam na Revisão do dia).":"Meta de questões atingida. Complete os flashcards para dominar o tema."):"Abaixo de 90%. Releia o resumo e as pegadinhas e refaça."}</p>`});
  const seg=$("#seg"); if(seg) seg.onclick=()=>{atual.sub=atual.sub==="resumo"?"pegadinhas":"flash";renderTema()};
}
function renderFlash(c,t,chave){
  let fila=t.flash.map((f,i)=>i).filter(i=>!(estado.flash[chave]||[]).includes(i));
  if(!fila.length) fila=t.flash.map((f,i)=>i);
  fila=embaralhar(fila); let pos=0;
  function draw(){
    const i=fila[pos], f=t.flash[i], sab=(estado.flash[chave]||[]).length;
    c.innerHTML=`<div class="flash-area"><div class="contador">Carta ${pos+1} de ${fila.length} · você já sabe ${Math.min(sab,t.flash.length)} de ${t.flash.length}</div>
      <button class="carta" aria-label="Virar carta"><div class="carta-in"><div class="face frente">${f[0]}</div><div class="face verso">${f[1]}</div></div></button>
      <div class="ctrl"><button class="btn" id="fAnt">Anterior</button><button class="btn pri" id="fVir">Virar</button><button class="btn ok" id="fSei">Já sei</button><button class="btn" id="fProx">Ainda não</button></div>
      <div class="ctrl" style="margin-top:6px"><button class="btn" id="fZera">Recomeçar do zero</button>${sab>=t.flash.length?`<button class="btn pri" id="fQuiz">Ir para as questões →</button>`:""}</div></div>`;
    const carta=c.querySelector(".carta"); const virar=()=>carta.classList.toggle("virada");
    carta.onclick=virar; $("#fVir").onclick=virar;
    $("#fAnt").onclick=()=>{pos=(pos-1+fila.length)%fila.length;draw()};
    $("#fProx").onclick=()=>{pos=(pos+1)%fila.length;draw()};
    $("#fSei").onclick=()=>{const a=estado.flash[chave]||[]; if(!a.includes(i))a.push(i); estado.flash[chave]=a; salvar(); montarNav(); pos=(pos+1)%fila.length; draw()};
    $("#fZera").onclick=()=>{estado.flash[chave]=[];salvar();renderFlash(c,t,chave)};
    const fq=$("#fQuiz"); if(fq) fq.onclick=()=>{atual.sub="quiz";renderTema()};
  }
  draw();
}

/* ---------- questões ---------- */
function renderQuiz(c,lista,chave,refazer,fimHtml,depois){
  const qs=lista.map(q=>({...q,ord:embaralhar(q.op.map((o,i)=>i))}));
  let resp=0,acertos=0; const res=[];
  c.innerHTML=`<div class="placar"><span id="pl">0 de ${qs.length} respondidas</span><div class="barra"><i id="br"></i></div><button class="btn" id="refazer">Refazer</button></div>`+
  qs.map((q,k)=>`<div class="q" data-k="${k}"><p class="enun"><span>${k+1}.</span>${q.q}${q.tema?` <small style="color:var(--tinta2);font-weight:400">(${q.tema})</small>`:""}</p>${q.ord.map((oi,j)=>`<button class="op" data-oi="${oi}">${"ABCDE"[j]}) ${q.op[oi]}</button>`).join("")}<div class="exp" hidden></div></div>`).join("")+`<div id="final"></div>`;
  c.querySelector("#refazer").onclick=refazer||(()=>renderQuiz(c,lista,chave,refazer,fimHtml,depois));
  c.querySelectorAll(".q").forEach(div=>{
    const q=qs[+div.dataset.k];
    div.querySelectorAll(".op").forEach(b=>b.onclick=()=>{
      const oi=+b.dataset.oi, ok=oi===q.c;
      div.querySelectorAll(".op").forEach(x=>{x.disabled=true; if(+x.dataset.oi===q.c)x.classList.add("certa")});
      if(!ok)b.classList.add("errada");
      registrar(q,ok); res.push({q,ok});
      const e=div.querySelector(".exp"); e.hidden=false; e.innerHTML=`<b style="color:${ok?"var(--certo)":"var(--errado)"}">${ok?"Correto.":"Não é essa. Foi para o Caderno de erros."}</b> ${q.exp}`;
      resp++; if(ok)acertos++;
      $("#pl").textContent=`${resp} de ${qs.length} respondidas · ${acertos} acertos`;
      $("#br").style.width=(resp/qs.length*100)+"%";
      if(resp===qs.length){
        const pct=Math.round(acertos/qs.length*100);
        if(chave&&(estado.notas[chave]==null||pct>estado.notas[chave])){estado.notas[chave]=pct;salvar()}
        montarNav();
        $("#final").innerHTML=`<div class="bloco">${fimHtml?fimHtml(res,pct):`<h3>Resultado: ${acertos}/${qs.length} (${pct}%)</h3><p style="margin:0">${pct>=90?"Excelente.":pct>=70?"Bom. Revise os erros no Caderno de erros.":"Volte aos resumos dos temas com mais erros."}</p>`}</div>`;
        if(depois) depois();
      }
    });
  });
}
function renderSimulado(d){
  document.documentElement.style.setProperty("--acc",d?d.cor:"var(--sim)");
  const n=d?20:30;
  main.innerHTML=`<header class="cab"><h2>${d?"5 · Simulado final — "+d.nome:"Simulado geral"}</h2><p>${n} questões sorteadas ${d?"de todos os temas da disciplina. Meta: 90% ou mais em dois simulados.":"de todas as disciplinas."} Cada “Refazer” gera uma prova diferente.</p></header><section id="corpo"></section>`;
  const todas=[];(d?[d]:DISC).forEach(dd=>dd.temas.forEach(t=>t.quiz.forEach(q=>todas.push({...q,tema:d?t.curto:dd.nome+" · "+t.curto}))));
  renderQuiz($("#corpo"),embaralhar(todas).slice(0,n),d?d.id+":simulado":"geral:simulado",()=>renderSimulado(d),(res,pct)=>{
    if(d){(estado.simFinal[d.id]=estado.simFinal[d.id]||[]).push(pct);salvar();montarNav();}
    const ok=d?simFinalOk(d):0;
    return `<h3>Resultado: ${res.filter(x=>x.ok).length}/${res.length} (${pct}%)</h3><p style="margin:0">${d?(pct>=90?`Meta atingida neste simulado (${Math.min(ok,2)} de 2).`:"Abaixo de 90%. Corrija os erros no Caderno de erros e tente outro simulado."):""} Os erros foram para o Caderno de erros da disciplina.</p>`;
  });
}
render();

/* ---------- backup (botões) e aplicativo instalável ---------- */
document.getElementById("btnBackup").onclick=abrirBackup;
document.getElementById("btnBaixar").onclick=()=>{baixarBackup();};
document.getElementById("arqBackup").onchange=e=>{const f=e.target.files[0]; if(f) restaurarBackup(f); e.target.value=""; const d=document.getElementById("dlgBackup"); if(d.close) d.close();};
document.getElementById("btnFechar").onclick=()=>{const d=document.getElementById("dlgBackup"); if(d.close) d.close(); else d.removeAttribute("open");};
if("serviceWorker" in navigator && location.protocol.startsWith("http")){
  window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));
}
