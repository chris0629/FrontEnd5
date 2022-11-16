function refresh()
{
var refresh=1000;
mytime=setTimeout('intervals()',refresh)
}

function intervals(){
var x = new Date();
document.getElementById('timeinfo').innerHTML = x;
generateRandomColor();
document.getElementById('header').style.backgroundColor = generateRandomColor();
document.getElementById('menu').style.backgroundColor = generateRandomColor();
document.getElementById('main').style.backgroundColor = generateRandomColor();
document.getElementById('right').style.backgroundColor = generateRandomColor();
document.getElementById('footer').style.backgroundColor = generateRandomColor();
refresh();


function generateRandomColor()
{
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

// document.body.style.backgroundColor = generateRandomColor() // -> #e1ac94
// someDiv.style.color = generateRandomColor() 




}

