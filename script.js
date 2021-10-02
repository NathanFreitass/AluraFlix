var listaFilmes = [
  "https://br.web.img3.acsta.net/medias/nmedia/18/90/57/96/20121842.jpg",

  "https://pbs.twimg.com/media/EwQR1QFUUAIgB4p.jpg",

  "https://img.elo7.com.br/product/zoom/268A820/big-poster-filme-jogador-numero-1-lo003-tamanho-90x60-cm-presente-geek.jpg",

  "https://img.elo7.com.br/product/original/2F576C9/poster-impresso-dark-netflix-03-digital.jpg",
  "https://i.pinimg.com/originals/52/2e/21/522e2185df74c5eea381b0e25826fca8.jpg",
  "https://i.pinimg.com/originals/d3/4b/a0/d34ba07d38260fda50cae8fd1fd4fef9.jpg",

  "https://images.squarespace-cdn.com/content/v1/5426ee3be4b0c110b8c43a58/1424206107210-4Q6SJRHGSH8RSQX8D97S/fury.jpg",

  "https://m.media-amazon.com/images/I/61DADLNob+L._AC_SL1418_.jpg",
  "https://i.redd.it/19mxv41g9rh61.jpg",

  "https://img.elo7.com.br/product/zoom/2F581AB/poster-impresso-the-witcher-netflix-loja.jpg"
];

var listaTrailer = [
  "https://www.youtube.com/watch?v=TQfATDZY5Y4",
  "https://www.youtube.com/watch?v=PmaH69Y7PG0",
  "https://www.youtube.com/watch?v=q_1OJNcTld0",
  "https://www.youtube.com/watch?v=ESEUoa-mz2c",
  "https://www.youtube.com/watch?v=wUFwunMKa4E",
  "https://www.youtube.com/watch?v=tivv135aGbc",
  "https://www.youtube.com/watch?v=09w9MTtZDEM",
  "https://www.youtube.com/watch?v=CpR3rI_rjtg&t=65s",
  "https://www.youtube.com/watch?v=vM-Bja2Gy04",
  "https://www.youtube.com/watch?v=tjujvMkqWe4"
];

for (let i = 0; i < listaFilmes.length; i++) {
  document.write(
    `<img class="Poster" id= filme${i} onclick="window.open(listaTrailer[${i}])" src=${listaFilmes[i]}>`
  );
}