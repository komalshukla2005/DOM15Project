let simple = document.querySelector(".leftside");

simple.addEventListener("click", () => {
    document.body.innerHTML = ""
    let title = document.createElement("h1");
    title.textContent = "Color Flipper";
    title.style.color = 'black';
    title.style.fontSize = '2rem';
    title.style.marginTop = '2rem';
    document.body.appendChild(title);
});

let box2 = document.querySelector('.mainbox')
let mybtn = document.querySelector("#btn")
let colorbox = document.querySelector(".colorbox")
mybtn.addEventListener("click", () => {
    function rgbToHex(red, green, blue) {
        let redHex = red.toString(16).padStart(2, '0');
        let greenHex = green.toString(16).padStart(2, '0');
        let blueHex = blue.toString(16).padStart(2, '0');
        let hexColor = '#' + redHex + greenHex + blueHex;

        return hexColor;
    }
    var red = Math.floor(Math.random() * 256)
    var green = Math.floor(Math.random() * 256)
    var blue = Math.floor(Math.random() * 256)
    let hexColor = rgbToHex(red, green, blue);
    let color = 'rgb(' + red + ',' + green + ',' + blue + ')';
    box2.style.backgroundColor = color;
    mybtn.style.backgroundColor = color;
    colorbox.style.color = 'white'
    colorbox.style.fontSize = '2.4rem'
    colorbox.innerHTML = `Backgroud color : ${hexColor}`
})



