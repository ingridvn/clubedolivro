let listaLivros = [
    "https://images-na.ssl-images-amazon.com/images/I/71X245OYRBL.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/91r5G8RxqfL.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/61CtnMRwfyL.jpg",
    "https://m.media-amazon.com/images/I/51iOoBnCS6L.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/81vSAMK43SL.jpg",
    "https://m.media-amazon.com/images/I/41Yzwvd85oS.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/91yEPgRcELL.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/61sYCEjI46S.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/918DhRgIRIL.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/816Udvs9O7L.jpg"
  ];
  
  let nomesLivros = [
    "A Vida Invisível de Addie LaRue - V. E. Schwab",
    "É Assim Que Acaba - Colleen Hoover",
    "Fique Comigo - Ayobami Adebayo",
    "Gente Ansiosa - Fredrik Backman",
    "Juntando os Pedaços - Jennifer Niven",
    "Os Dois Morrem no Final - Adam Silvera",
    "Os Sete Maridos de Evelyn Hugo - Taylor Jenkins Reid",
    "Toda a Luz que Não Podemos Ver - Anthony Doerr",
    "Todas As Cores do Céu - Amita Trasi",
    "Tudo é Rio - Carla Madeira"
  ];

  let linkSkoob = [
    "https://www.skoob.com.br/livro/11954882ED11909230?privacy-agree=true","https://www.skoob.com.br/e-assim-que-acaba-738219ed740815.html","https://www.skoob.com.br/fique-comigo-790073ed812091.html","https://www.skoob.com.br/gente-ansiosa-11951903ed11944673.html","https://www.skoob.com.br/juntando-os-pedacos-619504ed620156.html","https://www.skoob.com.br/os-dois-morrem-no-final-11957528ed11950118.html","https://www.skoob.com.br/os-sete-maridos-de-evelyn-hugo-866308ed967690.html","https://www.skoob.com.br/toda-a-luz-que-nao-podemos-ver-563432ed565364.html","https://www.skoob.com.br/todas-as-cores-do-ceu-833710ed871248.html","https://www.skoob.com.br/tudo-e-rio-435848ed11802730.html"
  ];
  
  for (let i = 0; i < listaLivros.length; i++) {
    document.write(
      "<div class='capas'><img src='" +
        listaLivros[i] +
        "' class='aumentar'></img><div class='overlay'><div class='titulo'>" + "<a href=" + linkSkoob [i] + ">" +
        nomesLivros[i] +
        "</div></div></div>"
    );
  }