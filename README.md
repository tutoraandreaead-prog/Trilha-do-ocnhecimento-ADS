# 📒 Caderno de estudo — Método dos 5 passos

Aplicativo web de estudo com seis disciplinas, 30 temas e 308 questões comentadas. Cada disciplina segue o **Método dos 5 passos**: diagnosticar, planejar, dominar, revisar e simular.

- Resumos, pegadinhas, flashcards e questões por tema.
- Diagnóstico, agenda até a prova, caderno de erros e revisão espaçada (1, 3, 7 e 14 dias).
- Funciona sem internet depois do primeiro acesso e pode ser **instalado no celular** como aplicativo.
- O progresso fica salvo no navegador. O botão **⇅ Backup** leva o progresso para outro aparelho.

Não precisa de servidor, banco de dados nem instalação: são só arquivos estáticos.

## Estrutura

```
index.html              página principal
css/estilo.css          visual
js/dados.js             conteúdo das disciplinas (temas, resumos, questões)
js/app.js               funcionamento do caderno e do método
sw.js                   funcionamento sem internet (service worker)
manifest.webmanifest    instalação como aplicativo
icons/                  ícones do aplicativo
netlify.toml            configuração do Netlify
.nojekyll               configuração do GitHub Pages
```

## Publicar no Netlify (o jeito mais rápido)

1. Entre em [app.netlify.com](https://app.netlify.com) e faça login.
2. Na área de sites, escolha a opção de publicar manualmente (*deploy manually*).
3. Arraste a **pasta inteira** `caderno-estudos` para a área indicada.
4. Em poucos segundos o site fica no ar num endereço `https://nome-aleatorio.netlify.app`. O nome pode ser trocado nas configurações do site.

Para atualizar depois, arraste a pasta de novo na aba de deploys do site.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub (por exemplo, `caderno-estudos`), público.
2. Envie os arquivos desta pasta para o repositório. Pelo site, use a opção de enviar arquivos (*uploading an existing file*) e arraste o conteúdo da pasta. Por linha de comando:
   ```bash
   cd caderno-estudos
   git init
   git add .
   git commit -m "Caderno de estudo"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/caderno-estudos.git
   git push -u origin main
   ```
3. No repositório, abra **Settings → Pages**, escolha a branch `main` e a pasta `/ (root)` e salve.
4. Em um ou dois minutos o site fica disponível em `https://SEU-USUARIO.github.io/caderno-estudos/`.

Também é possível ligar o repositório do GitHub ao Netlify. Assim, cada `git push` atualiza o site automaticamente.

## Instalar no celular

Abra o endereço publicado no navegador do celular:
- **Android (Chrome):** menu ⋮ → *Instalar aplicativo* ou *Adicionar à tela inicial*.
- **iPhone (Safari):** botão compartilhar → *Adicionar à Tela de Início*.

Depois do primeiro acesso, o caderno abre mesmo sem internet.

## Progresso e backup

O progresso (notas, flashcards, caderno de erros, diagnóstico, data da prova) fica salvo **no navegador de cada aparelho**. Cada pessoa que usa o link tem o próprio progresso.

Para continuar em outro aparelho:
1. No aparelho de origem, toque em **⇅ Backup → Baixar backup** para gerar um arquivo `.json`.
2. Envie esse arquivo para o outro aparelho (e-mail, WhatsApp, Drive).
3. No outro aparelho, toque em **⇅ Backup → Restaurar backup** e escolha o arquivo.

Os dados são juntados, sem perda: vale a melhor nota de cada tema e os flashcards marcados nos dois aparelhos.

## Como editar o conteúdo

Todo o conteúdo está em `js/dados.js`, numa lista `DISC` com as disciplinas. Cada disciplina tem `temas`, e cada tema tem:

```js
{
  id: "mem",                       // identificador único (sem espaços)
  titulo: "Gerência de memória",
  curto: "Memória",                // nome curto no menu
  desc: "Descrição do tema",
  resumo: [ { h: "Título do bloco", itens: ["tópico 1", "tópico 2"] } ],
  pegadinhas: ["texto", "texto"],
  flash: [ ["frente", "verso"] ],
  quiz: [ { q: "Enunciado", op: ["A", "B", "C", "D"], c: 1, exp: "Explicação" } ]
}
```

No `quiz`, `c` é a posição da alternativa correta, contando a partir de **0** (0 = primeira). As alternativas são embaralhadas automaticamente na tela.

Cuidados ao editar:
- Não mude o `id` de temas já usados: o progresso salvo está ligado a ele.
- Acrescentar questões **no final** da lista de um tema é seguro. Apagar ou reordenar questões antigas faz o histórico de revisão delas se misturar.
- Depois de editar, aumente a versão em `sw.js` (por exemplo, `caderno-v2`). Assim, quem já instalou recebe o conteúdo novo.

## Testar no computador

Abrir o `index.html` com duplo clique funciona, mas o modo sem internet só é ativado quando o caderno é servido por um endereço web. Para testar localmente:

```bash
cd caderno-estudos
python3 -m http.server 8000
```

Depois, abra `http://localhost:8000`.
