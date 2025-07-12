const img=document.getElementById("cookie")

const counter = document.getElementById("clicker__counter")

img.onclick = () => {
    counter.textContent = Number(counter.textContent) +1
    if (counter.textContent > 0 && counter.textContent % 2 != 0){
        img.height +=10
        img.width +=10
    } else {
        img.height -=10
        img.width -=10
    }

}

