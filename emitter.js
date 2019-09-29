function Emitter(x, y, xSpeed, ySpeed, size, color)
{
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.size = size;
    this.color = color;
    
    this.startParticles = 0;
    this.lifetime = 0;
    
    // Place to store particles
    this.particles = [];
    
    this.addParticle = function()
    {
        // New particle with values from list with randomness
        var p = new Particle(random(this.x - 150,this.x + 150), 
                             random (this.y - 150, this.y + 150), 
                             random(this.xSpeed - 1, this.xSpeed + 1), 
                             random(this.ySpeed - 1, this. ySpeed + 1), 
                             random(this.size - 4, this.size + 4), this.color);
        return p;
    }
    
    // Called to create the initial particles
    this.startEmitter = function(startParticles, lifetime)
    {
        this.startParticles = startParticles;
        this.lifetime = lifetime;
        
        //Start Emitter with inital particles 
        for(var i = 0; i < startParticles; i++)
            {
                // Push new particle to list
              this.particles.push(this.addParticle());
            }
    }
    
    this.updateParticles = function()
    {
        var deadParticles = 0;
        // Iterate through particles and draw to the screen. Backwards so splice doesnt miss any 
        for(var i = this.particles.length - 1; i >= 0; i--)
            {
                this.particles[i].drawParticle();
                this.particles[i].updatePartcile();
                // Remove particle from array after certain age
                if(this.particles[i].age > random(100,this.lifetime))
                    {
                        this.particles.splice(i, 1);
                        deadParticles++;
                    }
            }
        
        // Add more partciles after removing particles
        if(deadParticles > 0)
            {
                for(var i = 0; i < deadParticles; i++)
                    {
                        this.particles.push(this.addParticle());
                    }
            }
        
    }
}