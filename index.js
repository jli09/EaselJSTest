function init() {
    console.log('initialized');

    const stage = new createjs.Stage('main');

    const shape = new createjs.Shape();

    const shapeWidth = 75;
    const shapeHeight = 75;

    shape.graphics.beginFill("red").drawRect(0, 0, shapeWidth, shapeHeight);
    shape.x = 100;
    shape.y = 100;

    console.log('shape: ', shape)

    stage.addChild(shape);

    stage.update();

    // const tick = () => {
    //     shape.x += 5;
    //     if (shape.x > stage.canvas.width)
    //         shape.x = 0;
        
    //     stage.update();
    // }

    // createjs.Ticker.framerate = 40;
    // createjs.Ticker.on('tick', tick);

    document.addEventListener('keydown', (e) => {
        const { key } = e;
        
        console.log('key down: ', key);

        if (key === 'ArrowUp' || key === 'w') {
            if (shape.y > 0) {
                shape.y -= 10;
                stage.update();
            }
        }

        if (key === 'ArrowDown' || key === 's') {
            console.log(shape.y);

          if (shape.y + shapeHeight < stage.canvas.height) {
            shape.y += 10;
            stage.update();
          }
        }
        
        
    });

    document.addEventListener('keyup', (e) => {
      console.log('key up: ', e.key);
    });
}