
//for loop for adding modal popup redirection on click of every image on the main page (Image highlights.)
for (let index = 0; index < 20; index++) {
    let modal = document.getElementById("myModal");

    let img = document.getElementById("myImg" + index);

    //keep the modal popup same, just change the images inside that are to be shown on popup
    let modalImg = document.getElementById("img01");
    let captionText = document.getElementById("caption");
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

// var mainRow = document.getElementById("main-row");
// uiSchema.map((elem, index) => {
//     if (index % 6 == 0) {
//         if (index != 0)
//             mainRow.append('</div>');
//         mainRow.append('<div class="column">');
//     }
//     var imgElem = document.createElement("img");
//     imgElem.id = elem["id"];
//     imgElem.src = elem["src"];
//     imgElem.alt = elem["alt"];
//     mainRow.append(imgElem);
// });