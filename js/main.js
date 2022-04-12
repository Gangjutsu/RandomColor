


/*function clicky() {
    blockColor.style.backgroundColor = '#' + (Math.random() * 0x1000000 | 0x1000000).toString(16).slice(1);
    btnButton.style.backgroundColor = '#' + (Math.random() * 0x1000000 | 0x1000000).toString(16).slice(1);
    btnButton.style.color = '#' + (Math.random() * 0x1000000 | 0x1000000).toString(16).slice(1);
    blockTitle.style.color = '#' + (Math.random() * 0x1000000 | 0x1000000).toString(16).slice(1);

}*/

let mainColor;

btnButton = document.getElementById('butn').addEventListener('click', function colorMain() {
    let blockColor = document.querySelector('.color-block');
    let btnButton = document.getElementById('butn');
    let blockTitle = document.querySelector('.block-title');
    blockColor.style.backgroundColor = '#' + (Math.random() * 0x1000000 | 0x1000000).toString(16).slice(1);
    blockTitle.style.color = '#' + (Math.random() * 0x1000000 | 0x1000000).toString(16).slice(1);

    mainColor = blockColor.style.backgroundColor;
    console.log(mainColor);

    let infoColor = document.querySelector('.block-title').innerHTML = mainColor;

});













