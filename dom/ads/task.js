const text = document.getElementsByClassName("rotator__case");
let i = 0;

function getIndex () {
    if (i === (text.length -1)) {
        i = 0;
    } else {
        i++;
    }
    return i
}

function changeText () {
    text[i].classList.remove("rotator__case_active");
    getIndex();
    text[i].classList.add("rotator__case_active")
}

setInterval(changeText,1000);