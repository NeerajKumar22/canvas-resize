var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

// c.fillStyle = "red  "; // for fill the color in the rectangle...
// c.fillRect(100, 100, 100, 100); // make the rectangle
// c.fillStyle = "blue";
// c.fillRect(400, 100, 100, 100);
// c.fillStyle = "green";
// c.fillRect(300, 300, 100, 100);
// console.log(canvas);

// Drawing a Line

// c.beginPath();
// c.moveTo(50, 300); // initial point...
// c.lineTo(300, 100); // for draw a line form origin to point
// c.lineTo(400, 300);
// c.strokeStyle = "blue"; // for color the line...
// c.stroke();

// create an arc and circle...

// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "orange";
// c.stroke();

// for (let i = 0; i < 10; i++) {
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = "orange";
//   c.stroke();
// }

// capital letter of the function shows the function is object




function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, radius, 0, Math.PI * 2, false);
    c.strokeStyle = "orange";
    c.stroke();
    c.fill(); // for filling the color in the circle...
  }

  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }

}



var circleArray = [];

for (i = 0; i < 500; i++) {
  var x = Math.random() * (innerWidth - radius * 2) + radius;
  var y = Math.random() * (innerHeight - radius * 2) + radius;
  var dx = (Math.random() - 0.5) * 10;
  var dy = (Math.random() - 0.5) * 10;
  var radius = 30;
  circleArray.push(new Circle(x, y, dx, dy, radius))
  var circle = new Circle(200, 200, 3, 3, 30);
}

console.log(circleArray)

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();