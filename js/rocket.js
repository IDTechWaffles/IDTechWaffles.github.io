var space = new Raster("img/spaceBackground.png", [400, 400]);

var rocket = new Object({
	speed: [-3, -1],
    skin: new Raster("img/rocket.png", [500, 500]),
});

function onFrame(event){
	rocket.skin.position.x += rocket.speed[0];
    rocket.skin.position.y += rocket.speed[1];
}