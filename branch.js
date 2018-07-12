class Branch
{

  constructor(level,begin,end)
  {
    this.begin = begin;
    this.end = end;
    this.level=level;
  }

  draw()
  {
    line(this.begin.x,this.begin.y,this.end.x,this.end.y);
  }

  createLeft()
  {
    //creates vector of current Branch
    //rotates it of a certain angle
    //multiplies it for the scale index
    //adds it to the current vector
    //assigns this vector to a new branch

    this.left = new Branch(this.level+1,this.end , p5.Vector.add(this.end , p5.Vector.sub(this.end,this.begin).rotate(-getAngle()).mult(getScaleIndex())));

    tree.push(this.left);
    return this.left;
  }
  createRight()
  {
    this.right = new Branch(this.level+1,this.end , p5.Vector.add(this.end , p5.Vector.sub(this.end,this.begin).rotate(getAngle()).mult(getScaleIndex())));

    tree.push(this.right);
    return this.right;
  }

}

function getAngle()
{
  return slider.value();
}

function getScaleIndex()
{
  return 5/8;
}

function getStartingLength()
{
  return 100;
}

function getMaxLevel()
{
  return 13  ;
}
