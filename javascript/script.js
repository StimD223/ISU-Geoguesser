var smallMap = document.getElementById("smallmap");
var current = document.getElementById('currentMap');
var img = document.createElement('img');
var pin = document.createElement('img');
var myButton = document.getElementById('myButton');
var scoreDisplay = document.getElementById('scoreDisplay');
var isSwapped = false;
var offsetX = 90;
var offsetY = 50;
var xCoordinate = 0;
var yCoordinate = 0;
var mapX = 0;
var mapY = 0;

var placesImages = 
[
    "laverne.png 500 800",
    "beard.png 615 460",
    "lebaron.png 643 225",
    "carver.png 503 602",
    "lied.png 1395 445",
    "design.png 120 193",
    "udcc.png 270 565",
    "seasons.png 1315 705",
    "coover.png 335 230",
    "gilman.png 478 150",
    "campanile.png 700 495",
    "helser.png 255 723"
]


function getRandomImage() {
    var randomIndex = Math.floor(Math.random() * placesImages.length);
    mapX = parseInt(placesImages[randomIndex].split(' ')[1]);
    mapY = parseInt(placesImages[randomIndex].split(' ')[2]);
    return placesImages[randomIndex].split(' ')[0];
}



window.onload = function() 
{
    current.src = "places/" + getRandomImage();
    current.style.width = "1800px";
    current.style.height = "850px";
};

img.src = 'icon/cy.png'; 
img.style.position = 'absolute';
img.style.width = "50px";
img.style.height = "auto";
img.style.pointerEvents = "none";

pin.src = 'icon/pin.png';
pin.style.position = 'absolute';
pin.style.width = '30px';
pin.style.height = 'auto';
pin.style.pointerEvents = 'none';




smallMap.addEventListener('click', function() {smallMap.src = 'UI/map.png', isSwapped = true, toggleVisible()});

current.addEventListener('click', function() {smallMap.src = 'UI/small map.png', isSwapped = false, smallMap.parentElement.removeChild(img), toggleVisible()});

smallMap.addEventListener('click', function(event)
    {
        if (isSwapped == true)
                {
                    
                    img.style.left = event.clientX - 90 + 'px';
                    img.style.top = event.clientY - 90 + 'px';
                    xCoordinate = event.clientX - offsetX; 
                    yCoordinate = event.clientY - offsetY; 
                    console.log(xCoordinate, yCoordinate);
                    smallMap.parentElement.appendChild(img);
                }
    }
);

function toggleVisible()
{
    if (isSwapped)
        {
            myButton.style.display = 'block';
        }
    else
        {
            myButton.style.display = 'none';
        }
}


    
myButton.addEventListener('click', function()
{
    finalX = Math.abs(Math.abs(mapX) - Math.abs(xCoordinate));
    finalY = Math.abs(Math.abs(mapY) - Math.abs(yCoordinate));
    score = Math.round((2434 - finalY - finalX) / 24.34);
    scoreDisplay.textContent = 'Score: ' + score;
    scoreDisplay.style.display = 'block';
    freezeGame();
    pin.style.left = mapX + 80 + "px";
    pin.style.top = mapY + 10 + "px";
    document.body.appendChild(pin);



});

function freezeGame() 
{
    smallMap.style.pointerEvents = 'none';
    current.style.pointerEvents = 'none';

}


