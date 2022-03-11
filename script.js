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
  
  for (let i = 0; i < listaLivros.length; i++) {
    document.write(
      "<div class='capas'><img src='" +
        listaLivros[i] +
        "' class='aumentar'></img><div class='overlay'><div class='titulo'>" +
        nomesLivros[i] +
        "</div></div></div>"
    );
  }