var tree= [];

function setup()
{
  createCanvas(720, 400);
  slider = createSlider(0.1,1.3,PI/2-1.0472, 0.001);
  precSliderVal = 0;
}

function draw()
{
  if(slider.value()!==precSliderVal)
  {
    buildTree();
    precSliderVal = slider.value();
  }

  background(51)
  stroke(255)
  stop = false;
  for(i=0;i<tree.length && !stop;i++)
  {
    if(tree[i].level>getMaxLevel())
      stop=true;
    else
    {
      colorf(tree[i])
      tree[i].draw();
      tree[i].createLeft();
      tree[i].createRight();
    }
  }



  document.getElementById("valore").innerHTML=slider.value()

}

function buildTree()
{

  var first = new Branch(1,createVector(width/2,height),createVector(width/2,height-getStartingLength()));

  tree = [];
  tree[0]=first;
}

function colorf(o)
{
  digit1 = floor(o.level*5000000000/pow(255,1)) % 255
  digit2 = floor(o.level*5000000000/pow(255,2)) % 255
  digit3 = floor(o.level*5000000000/pow(255,3)) % 255

  stroke(digit1,digit2,digit3)
}
