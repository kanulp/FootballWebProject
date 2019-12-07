

let uiSchema = [
  { id: "myImg0", src: "assets/extras/1.jpg", alt: "What a save by the goalkeeper!" },
  { id: "myImg1", src: "assets/extras/2.jpg", alt: "Gotze! GOAAL!!" },
  { id: "myImg2", src: "assets/extras/3.jpg", alt: "Just punched the ball away!" },
  { id: "myImg3", src: "assets/extras/4.jpg", alt: "GOALLLLLL! They are into the finals!" },
  { id: "myImg4", src: "assets/extras/5.jpg", alt: "Messi being Messi!!" },
  { id: "myImg5", src: "assets/extras/6.jpg", alt: " 4 Years of hardwork. Their expressions say it all" },
  { id: "myImg6", src: "assets/extras/7.jpg", alt: "12 years the manager has waited, and finally!" },
  { id: "myImg7", src: "assets/extras/8.jpg", alt: "Canadian team!" },
  { id: "myImg8", src: "assets/extras/9.jpg", alt: "Barcelona!" },
  { id: "myImg9", src: "assets/extras/10.jpg", alt: "Group photo anyone?!" },
  { id: "myImg10", src: "assets/extras/11.jpg", alt: "fitness" },
  { id: "myImg11", src: "assets/extras/12.jpg", alt: "Tossed away!" },
  { id: "myImg12", src: "assets/extras/13.jpg", alt: "run along!" },
  { id: "myImg13", src: "assets/club-logos/liverpool.png", alt: "liverpool." },
  { id: "myImg14", src: "assets/extras/14.jpg", alt: "Group one!" },
  { id: "myImg15", src: "assets/club-logos/chelsea.png", alt: "chelsea." },
  { id: "myImg16", src: "assets/club-logos/granada.png", alt: "granada" },
  { id: "myImg17", src: "assets/club-logos/dortmund.png", alt: "dortmund" },
  { id: "myImg18", src: "assets/club-logos/juventus.png", alt: "juventus" },
  { id: "myImg19", src: "assets/club-logos/levante.png", alt: "levante" }
]

//for loop for adding modal popup redirection on click of every image on the main page (Image highlights.)
for (let index = 0; index < 20; index++) {
  var modal = document.getElementById("myModal");

  var img = document.getElementById("myImg" + index);

  //keep the modal popup same, just change the images inside that are to be shown on popup
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  var span = document.getElementsByClassName("close")[0];
  span.onclick = function () {
    modal.style.display = "none";
  }
}


//Dynamic JS framework

let renderElement = (elemType, elemParent, elemAttributes) => {

  switch (elemType) {
    case "image":
      let img = document.createElement("img");
      elemParent.appendChild((assignAttributes(img, elemAttributes)));
      break;
    case "div":
      let div = document.createElement("div");
      document.appendChild((assignAttributes(img, elemAttributes)));
      break;
    case "image":
      let img = document.createElement("img");
      document.appendChild((assignAttributes(img, elemAttributes)));
      break;

    default:
      break;
  }
}

let assignAttributes = (elem, elemAttributes) => {
  elemAttributes.forEach(attribute => {
    elem[attribute] = 1;
  });
  return elem;
}