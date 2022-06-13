const outputWidth = document.querySelector('.width');
const outputHeight = document.querySelector('.height');
/* let deviceWidth = window.innerWidth;*/
outputHeight.textContent = window.innerHeight + "px";

outputWidth.textContent = window.innerWidth + "px";


window.onresize = windResize;

function windResize() {

    outputWidth.textContent = "Width: " + window.innerWidth + "px";
    outputHeight.textContent = "Height: " + window.innerHeight + "px";


}


/* 
function getWindowSize(type, selector, callback) {
    window.addEventListener(type, (e) => {
        if (e.target.matches(selector)) callback(e);
    });
}

getWindowSize('resize', window, e => {
    output.textContent = deviceWidth;
}) */