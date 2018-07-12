
function setup() {
  createCanvas(720, 400);
  scaleIndex=3/4;
  var startingAngle = 0.664;
  slider = createSlider(0.1,1.3,startingAngle, 0.001)
}

function draw()
{
  background(51);
  stroke(255);

  var length = 100
  var level = 1

  translate(width/2,height)
  line(0,0,0,-length)

  push()
  branch(level,length,slider.value())
  pop()
  push()
  branch(level,length,-slider.value())
  pop()

  document.getElementById("valore").innerHTML=slider.value()

}

function branch(level,length,a)
{
  digit1 = floor(level*5000000000/pow(255,1)) % 255
  digit2 = floor(level*5000000000/pow(255,2)) % 255
  digit3 = floor(level*5000000000/pow(255,3)) % 255

  stroke(digit1,digit2,digit3)

  translate(0,-length)

  rotate(a)
  line(0,0,0,-length*scaleIndex)

  if(length > 4)
  {
    push()
    branch(level++,length*scaleIndex,a)
    pop()

    // push()
    // branch(level++,length*scaleIndex,a*2)
    // pop()

    push()
    branch(level++,length*scaleIndex,-a)
    pop()

    // push()
    // branch(level++,length*scaleIndex,-a*2)
    // pop()
  }
}
