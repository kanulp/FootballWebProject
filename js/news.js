/* News List */
function populateNewsList() {

    console.log('before');
    fetch('https://raw.githubusercontent.com/kanulp/FootballWebProject/master/news.json', {
            //method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin

        }).then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.imglist.length; i++) {
                console.log(data.imglist[i][i]);
                //console.log(data.newsTxts[0]["0"]);
                let divcontent = document.createElement("div"); //main div
                divcontent.className = "clearfix";

                document.getElementById("divgrid").appendChild(divcontent);

                let divcolumn = document.createElement("div"); //left column
                divcolumn.className = "column";
                divcontent.appendChild(divcolumn);

                let imgele = document.createElement("img"); //img
                //imgele.src = result["imglist" [index]];
                imgele.src = data.imglist[i][i];
                imgele.className = "img";
                divcolumn.appendChild(imgele);

                let divinner = document.createElement("div"); //right column
                divinner.className = "column";

                let h2ele = document.createElement("h2"); //header
                //let t = document.createTextNode(newsHeadings[index]);
                let t = document.createTextNode(data.newsHeadings[i][i]);
                h2ele.appendChild(t);

                divinner.appendChild(h2ele);

                let span = document.createElement("span");
                span.innerHTML = data.newsTxts[i][i];
                //span.innerHTML = newsTxts[index];
                divinner.appendChild(span);
                divcontent.appendChild(divinner);

                let br = document.createElement("br");
                document.getElementById("divgrid").appendChild(br);
            }

        });


    // for (let index = 0; index < result["imglist"].length; index++) {

    //     let divcontent = document.createElement("div"); //main div
    //     divcontent.className = "clearfix";

    //     document.getElementById("divgrid").appendChild(divcontent);

    //     let divcolumn = document.createElement("div"); //left column
    //     divcolumn.className = "column";
    //     divcontent.appendChild(divcolumn);

    //     let imgele = document.createElement("img"); //img
    //     imgele.src = result["imglist" [index]];
    //     imgele.className = "img";
    //     divcolumn.appendChild(imgele);

    //     let divinner = document.createElement("div"); //right column
    //     divinner.className = "column";

    //     let h2ele = document.createElement("h2"); //header
    //     let t = document.createTextNode(newsHeadings[index]);
    //     h2ele.appendChild(t);

    //     divinner.appendChild(h2ele);

    //     let span = document.createElement("span");
    //     span.innerHTML = newsTxts[index];

    //     divinner.appendChild(span);
    //     divcontent.appendChild(divinner);

    //     let br = document.createElement("br");
    //     document.getElementById("divgrid").appendChild(br);

    // }
    //return response.text()
    //});

    /*imglist = [
        "./images/img0.jpg",
        "./images/img1.jpg",
        "./images/img3.jpg"
    ];
    newsHeadings = [
        "What We Learned From FC Barcelona And Sevilla�s La Liga Clash",
        "Barcelona 4-0 Sevilla, La Liga: Match Review",
        "Gerard Pique, Ousmane Dembele and Ronald Araujo suspended for Eibar trip"
    ]
    newsTxts = [
        "The opening half an hour seemed less catastrophic than against Inter on Wednesday, but Luuk De Jong still had three decent chances in quick succession. Ter Stegen will be counting his blessings to have kept a clean sheet on his 200th appearance. Individual moments of brilliance again saved the day Shortly after however, there was an overhead kick from Luis Suarez, a through ball from Arthur to find Arturo Vidal in the box and then the trickery of Ousmane Demb�l� to put the tie beyond Sevilla's reach. Yet some detractors fretted about Barcelona's lack of collective play and what it could mean against superior teams - especially in the Champions League.",
        "Barcelona moved into second place in the standings with an important win over Sevilla. Four different goal scorers found the back of the net, including all three members of the attacking trio of Luis Suarez, Ousmane Dembele and Lionel Messi, while Arturo Vidal also scored for the Catalans. The win did come at a great cost as three Barcelona players picked up suspensions.",
        "Gerard Pique picked up his fifth booking of the new La Liga season on Sunday, meaning he will miss Barcelona�s next game against Eibar on October 19. The centre-back will be joined on the sidelines by Ronald Ara�jo who was harshly sent off on his La Liga debut, while Ousmane Dembele also saw red for two bookable offences."
    ]*/


}
populateNewsList();
/*-----------------*/

/* Var detail */
function populateVarDetail() {
    imglist = [
        "../assets/karan_images/var0.jpeg",
        "../assets/karan_images/var1.jpeg",
        "../assets/karan_images/var2.jpg"
    ];
    varHeadings = [
        "What is VAR in soccer",
        "THE CAMERAS",
        "What are the rules of VAR being used?"
    ]

    varTxts = [
        "The <b>video assistant referee</b> (VAR) is a system/concept for a video referee match official in association football who reviews decisions made by the head referee with the use of video footage and a headset for communication.</br>The system has already been used in the World Cup group stages and Round of 16 to correct and clarify decisions, including Diego Costa's first goal against Portugal, France's penalty against Australia as well as Sweden's penalty against South Korea.",
        "The video assistant referee team has access to 33 broadcast cameras, eight of which are super slow-motion and four of which are ultra slow-motion cameras. In addition, they have access to two offside cameras. These two cameras are only available to the video assistant referee team. For the knockout phase two additional ultra slow-motion cameras will be installed one behind each goal that will also be available to the VAR team. Slow motion replays are mainly used for factual situations, for example, to identify the point of contact of a physical offence or the position of an offence. Normal speed is used for subjective judgments, for example, the intensity of an offence or to determine if a handball was deliberate.",
        "VAR only intervenes in the course of a match when the officials have made a 'clear and obvious error' in one of four key areas.<h4>Goals</h4>" +
        "<p>A close offside decision is the most common reason for VAR being consulted after a goal has been scored, but shirt-pulling and other infringements can cause goals to be chalked off.</p>" +
        "<h4>Penalties</h4><p>The most subjective and arguably problematic area. Penalties can be awarded or rescinded using VAR if there has been a 'clear and obvious error' in the original decision.</p>" +
        "<h4>Straight red cards</h4><p>Violent conduct and dangerous tackles can be penalised using VAR. Second-yellow cards cannot.</p>" +
        "<h4>Mistaken identity</h4><p>If the referee sends off the wrong player, such as the famous incident with Kieran Gibbs and Alex Oxlade-Chamberlain in Arsenal's 6-0 drubbing at Chelsea in 2014, that injustice can be repaired.</p>" +
        "<p>The system is restricted to these four areas in order to minimise disruption to the flow of the game. </p>"
    ]

    innerHeadings = ["Goals", "Penalties", "Straight red cards", "Mistaken identity"]

    for (let index = 0; index < imglist.length; index++) {

        let imgele = document.createElement("img"); //img
        imgele.src = imglist[index];
        imgele.className = "imgview";
        document.getElementById("mainContent").appendChild(imgele);

        let divcontent = document.createElement("div"); //content div
        divcontent.className = "content";

        document.getElementById("mainContent").appendChild(divcontent);

        let h2ele = document.createElement("h2"); //header
        let t = document.createTextNode(varHeadings[index]);
        h2ele.appendChild(t);
        divcontent.appendChild(h2ele);

        let ptxt = document.createElement("p");
        ptxt.innerHTML = varTxts[index];
        divcontent.appendChild(ptxt);
    }
}
/*-----------------*/

/*Women's football detail*/
function populatewfootball() {
    contents = [
        "<b>Women's association football</b>, usually known as <b>women's football</b> or <b>women's soccer</b>, is the most prominent team sport[citation needed] played by women around the globe. It is played at the professional level in numerous countries throughout the world and 176 national teams participate internationally.",
        "Although women’s football has grown exponentially at all levels in recent times, the passion for and potential of the sport offers vast untapped opportunities. The launch of the FIFA Women’s Football Strategy charts the course for how FIFA will work with all stakeholders to take concrete steps to empower girls and women, make football a sport for all and advocate against gender discrimination.",
        "Taking place on 6-7 June, the first FIFA Women’s Football Convention assembled leaders from the worlds of sports and politics for the first time, discussing key issues around the development and empowerment of women in football."
    ]
    let data = '';
    for (let index = 0; index < contents.length; index++) {
        if (index == contents.length - 1)
            data += "<h3>WOMEN'S FOOTBALL CONVENTION</h3><p>" + contents[index] + "</p>";
        else
            data += "<p>" + contents[index] + "</p>";
    }
    //img
    document.getElementById('wfootbalimg').src = "images/wfootball.jpg";
    //content
    document.getElementById('divContent').innerHTML = data;
}
/*-----------------*/