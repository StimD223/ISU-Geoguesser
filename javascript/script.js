var smallMap = document.getElementById("smallmap");
var current = document.getElementById('currentMap');
var img = document.createElement('img');
var pin = document.createElement('img');
var myButton = document.getElementById('myButton');
var isSwapped = false;
var offsetX = 90;
var offsetY = 50;
var xCoordinate = 0;
var yCoordinate = 0;
var mapX = 0;
var mapY = 0;

var placesImages = 
[
    "laverne.png 494 791",
    "beard.png 612 489",
    "lebaron.png 643 252",
    "carver.png 490 625",
    "lied.png 1395 480",
    "design.png 115 225",
    "udcc.png 270 580",
    "seasons.png 1313 735",
    "coover.png 330 200",
    "gilman.png 480 175",
    "campanile.png 710 527",
    "helser.png 257 758"


]


function getRandomImage() {
    var randomIndex = Math.floor(Math.random() * placesImages.length);
    mapX = placesImages[randomIndex].split(' ')[1];
    mapY = placesImages[randomIndex].split(' ')[2];
    return placesImages[randomIndex].split(' ')[0];
}



window.onload = function() 
{
    current.src = "places/" + getRandomImage();
};

img.src = 'icon/cy.png'; 
img.style.position = 'absolute';
img.style.width = "50px";
img.style.height = "auto";
img.style.pointerEvents = "none";



smallMap.addEventListener('click', function() {smallMap.src = 'UI/map.png', isSwapped = true, toggleVisible()});

current.addEventListener('click', function() {smallMap.src = 'UI/small map.png', isSwapped = false, smallMap.parentElement.removeChild(img), toggleVisible()});

smallMap.addEventListener('click', function(event)
    {
        if (isSwapped == true)
                {
                    
                    img.style.left = (event.clientX - offsetX) + 'px';
                    img.style.top = (event.clientY - offsetY) + 'px';
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

});

function freezeGame() {
    smallMap.style.pointerEvents = 'none';
    current.style.pointerEvents = 'none';

}

