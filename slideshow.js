const display = document.querySelector('.cid-rxIj8RjHZ1');

setInterval(() => {
    display.style.backgroundImage = `url("../../../assets/images/gallery/a${Math.floor(Math.random() * 65) + 1}.jpg")`
}, 4000)