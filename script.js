function changeBackground(color) {
    document.getElementById("myText").style.backgroundColor = color;
}

function changeTextColor(color) {
    document.getElementById("myText").style.color = color;
}

function changeFont() {
    var font = document.getElementById("fontFamily").value;
    document.getElementById("myText").style.fontFamily = font;
}

function downloadText() {
    var text = document.getElementById("myText").value;
    var file = new Blob([text], { type: "text/plain" });
    var link = document.createElement("a");

    link.href = URL.createObjectURL(file);
    link.download = "my-text.txt";
    link.click();
}
