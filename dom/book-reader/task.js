let fontSize = document.getElementsByClassName("font-size")
let Color = document.getElementsByClassName("color")

let book = document.querySelector(".book");
fontSize = Array.from(fontSize);
textColor = Array.from(Color).slice(0, 3);
backgroundColor = Array.from(Color).slice(3, 6);


function changeSize() {

    for (let older of fontSize) {
        if (older.getElementsByClassName("font-size_active")) {
            older.classList.remove("font-size_active");
        }
    }

    book.classList.remove("book_fs-small");
    book.classList.remove("book_fs-big");

    this.classList.add("font-size_active");

    if (this.classList.contains('font-size_small')) {
        book.classList.add("book_fs-small");
    } else if (this.classList.contains('font-size_big')) {
        book.classList.add("book_fs-big");
    }

    return false
}


function changeColorText() {

    for (let older of textColor) {
        if (older.classList.contains("color_active")) {
            older.classList.remove("color_active");
        }
    }

    book.classList.remove("book_color-black");
    book.classList.remove("book_color-gray");
    book.classList.remove("book_color-whitesmoke");

    this.classList.add("color_active");

    if (this.classList.contains('text_color_black')) {
        book.classList.add("book_color-black");
    } else if (this.classList.contains('text_color_gray')) {
        book.classList.add("book_color-gray");
    } else if (this.classList.contains('text_color_whitesmoke')) {
        book.classList.add("book_color-whitesmoke");
    }

    return false

}


function changeColorBg() {

    for (let older of backgroundColor) {
        if (older.classList.contains("color_active")) {
            older.classList.remove("color_active");
        }
    }

    book.classList.remove("bg_color_black");
    book.classList.remove("bg_color_gray");
    book.classList.remove("bg_color_white");

    this.classList.add("color_active");

    if (this.classList.contains('bg_color_black')) {
        book.classList.add("bg_color_black");
    } else if (this.classList.contains('bg_color_gray')) {
        book.classList.add("bg_color_gray");
    } else if (this.classList.contains('bg_color_white')) {
        book.classList.add("bg_color_white");
    }

    return false

}

for (let active of fontSize) {
    active.onclick = changeSize;
}

for (let active of textColor) {
    active.onclick = changeColorText;
}

for (let active of backgroundColor) {
    active.onclick = changeColorBg;
}