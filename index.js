function init() {
    console.log('initialized');

  const stage = new createjs.Stage('main');
  let player, playerBounds, playerWidth, playerHeight;
  
  const img = new Image();
  img.src = 'pietro.jpg';

  img.onload = () => {
    player = new createjs.Bitmap('pietro.jpg');
    playerBounds = player.getBounds();

    console.log('playerBounds: ', playerBounds);

    player.scaleX = .1;
    player.scaleY = .1;

    playerWidth = playerBounds.width * player.scaleX;
    playerHeight = playerBounds.height * player.scaleY;

    player.x = 100;
    player.y = 100;

    stage.addChild(player);

    stage.update();
  }

  
    // const shape = new createjs.Shape();

    // const shapeWidth = 75;
    // const shapeHeight = 75;

    // shape.graphics.beginFill("red").drawRect(0, 0, shapeWidth, shapeHeight);
    // shape.x = 100;
    // shape.y = 100;



    document.addEventListener('keydown', (e) => {
        const { key } = e;
        
        console.log('key down: ', key);

        if (key === 'ArrowUp' || key === 'w') {
            if (player.y > 0) {
                player.y -= 10;
                stage.update();
            }
        }

        if (key === 'ArrowDown' || key === 's') {
          if (player.y + playerHeight < stage.canvas.height) {
            player.y += 10;
            stage.update();
          }
        }

        if (key === 'ArrowLeft' || key === 'a') {
          if (player.x > 0) {
            player.x -= 10;
            stage.update();
          }
        }

        if (key === 'ArrowRight' || key === 'd') {
          if (player.x + playerWidth < stage.canvas.width) {
            player.x += 10;
            stage.update();
          }
        }
    });

    // document.addEventListener('keyup', (e) => {
    //   console.log('key up: ', e.key);
    // });
}