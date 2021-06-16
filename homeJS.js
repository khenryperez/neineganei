function parallaxStart(){
    const parallax = document.getElementById('parallax');

window.addEventListener("scroll", function()
{
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.2 + "px"
})
}


function btnClicked(){
    const btnScrollToTop = document.querySelector("#btnScrollToTop");

    btnScrollToTop.addEventListener("click", function (){
        //window.scrollTo(0,0);
        window.scrollTo({
            top:0,
            left: 0,
            behavior: "smooth"
        })
    })
}

function btnDOMNight(){

    var head = document.getElementById("header").style.backgroundColor = '#343a40';
    var h2BPSU = document.getElementById("h2BPSU");
        h2BPSU.style.backgroundColor = '#343a40';
        h2BPSU.style.color = '#eeebdd';
    var divIDs = document.getElementById("divIDs").style.backgroundColor = '#343a40';

    var h2IDs = document.getElementById("h2IDs");
        h2IDs.style.backgroundColor = '#343a40';
        h2IDs.style.color = '#eeebdd';

    var bpsuInfo = document.getElementById("bpsuInfo");
        bpsuInfo.style.backgroundColor = '#343a40';
        bpsuInfo.style.color = '#eeebdd';

        var divC = document.getElementsByTagName('div')[2];
            divC.style.backgroundColor = '#343a40';
            divC.style.color = '#eeebdd';
        var divC = document.getElementsByTagName('div')[3];
            divC.style.backgroundColor = '#343a40';
            divC.style.color = '#eeebdd';
        var divC = document.getElementsByTagName('div')[4];
            divC.style.backgroundColor = '#343a40';
            divC.style.color = '#eeebdd';
        var divC = document.getElementsByTagName('div')[5];
            divC.style.backgroundColor = '#343a40';
            divC.style.color = '#eeebdd';
        
}

function btnDOMLight(){

    var head = document.getElementById("header").style.backgroundColor = '#eeebdd';
    var h2BPSU = document.getElementById("h2BPSU");
        h2BPSU.style.backgroundColor = '#eeebdd';
        h2BPSU.style.color = '#ce1212';
    var divIDs = document.getElementById("divIDs").style.backgroundColor = '#eeebdd';
    var h2IDs = document.getElementById("h2IDs");
        h2IDs.style.backgroundColor = '#eeebdd';
        h2IDs.style.color = '#ce1212';
    var bpsuInfo = document.getElementById("bpsuInfo");
        bpsuInfo.style.backgroundColor = '#eeebdd';
        bpsuInfo.style.color = '#343a40';
        var divC = document.getElementsByTagName('div')[2];
            divC.style.backgroundColor = '#eeebdd';
            divC.style.color = '#ce1212';
        var divC = document.getElementsByTagName('div')[3];
            divC.style.backgroundColor = '#eeebdd';
            divC.style.color = '#ce1212';
        var divC = document.getElementsByTagName('div')[4];
            divC.style.backgroundColor = '#eeebdd';
            divC.style.color = '#ce1212';
        var divC = document.getElementsByTagName('div')[5];
            divC.style.backgroundColor = '#eeebdd';
            divC.style.color = '#ce1212';
        

}
