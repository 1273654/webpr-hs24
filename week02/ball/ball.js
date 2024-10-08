
const radius = 10;
const ball = {x:20, y:20, dx: 5, dy: 2};
let   old  = {x: ball.x, y: ball.y};
const height = 800;
const width = 900;

function start() {
    const canvas  = document.querySelector("canvas");
    canvas.height = height;
    canvas.width = width;
    canvas.style = "background-color: pink;"
    const context = canvas.getContext("2d");
    context.fillStyle = "black"


    setInterval(() => {
        nextBoard();
        display(context);
    }, 1000 / 20);
}

function nextBoard() {
    if (ball.y < height  ) {
        old.y = ball.y
        old.x = ball.x
        if (ball.y >  height - radius * 2 ) {
            ball.dy -= 3;
            ball.dy *= -1;

        }
        if (ball.x > width - radius * 2) ball.dx *= -1;
        if (ball.y <  radius && ball.dy < 0) ball.dy *= -1;
        if (ball.x < radius && ball.dx < 0) ball.dx *= -1;

        ball.y += ball.dy;
        ball.x += ball.dx;

        ball.dy++;

    }




    // keep old ball values for the sake of efficient clearing of the old display

    // handle ball is hitting the bounds
    //   reverse direction
    //   lose some energy relative to the current inertia (only velocity varies)

    // calculate new position
    // calculate any changes in velocity due to gravitational pull or medium resistance


}

function display(context) {
    context.clearRect(old.x - radius - 5 , old.y - radius - 5 , 25, 25 );
    fillBox(context)
}

function fillBox(context) {
    context.beginPath();
    context.arc(ball.x, ball.y, radius, 0, 6.3, false);
    context.fill();
}


