function init() {
  console.log('initialized');

  //set up main stage over background
  const stage = new createjs.Stage('main');

  //set background image
  const background = new Image();
  background.src = 'background.png';
  let backgroundMap;

  background.onload = () => {
    backgroundMap = new createjs.Bitmap(background);
  };

  //set up player image
  let player, playerBounds, playerWidth, playerHeight;

  const img = new Image();
  img.src = 'pietro.jpg';

  img.onload = () => {
    player = new createjs.Bitmap(img);
    playerBounds = player.getBounds();

    console.log('playerBounds: ', playerBounds);

    player.scaleX = 0.05;
    player.scaleY = 0.1;

    playerWidth = playerBounds.width * player.scaleX;
    playerHeight = playerBounds.height * player.scaleY;

    player.x = 550;
    player.y = 400;
  };

  //give images time to load
  setTimeout(() => {
    stage.addChild(backgroundMap);
    stage.addChild(player);
    stage.update();
  }, 200);

  
  //listen for keydown events and move player
  document.addEventListener('keydown', (e) => {
    const { key } = e;

    console.log('location', player.x, player.y);

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
