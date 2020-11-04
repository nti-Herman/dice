document.getElementById("button").addEventListener("click", random);


function random() {
    let value = Math.floor((Math.random() * 6) + 1);
    // console.log(value);
    let filename = value + ".png";
    // console.log(filename);
    document.getElementById("image").src = filename;
    document.querySelector("p").innerHTML = "Nummer " + value;
}