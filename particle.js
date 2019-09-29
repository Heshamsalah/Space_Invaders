function Particle(x, y , xSpeed, ySpeed, size, color)
{
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.size = size;
    this.color = color;
    this.age = 0;
    
    this.drawParticle = function()
    {
        noStroke();
        fill(this.color);
        ellipse(this.x, this.y, this.size);
    }
    
    this.updatePartcile = function()
    {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        this.age++;
    }
}