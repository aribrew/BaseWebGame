Game.instance = null;

class Game
{
  static Init ()
  {
    if (Game.instance == null)
    {
      Game.instance = new Game ();
      Game.instance.init ();
    }
  }


  static Instance ()
  {
    if (Game.instance == null)
    {
      Log.e ("Game hasn't been initialized yet.");
    }
    else
    {
      return Game.instance;
    }
  }


  firstFrame ()
  {
    this.deltaTime = 0;
    this.lastTime = 0;

    requestAnimationFrame (this.update.bind (this);
  }


  IsRunning ()
  {
    return this.running;
  }


  Start ()
  {
    if (!this.running)
    {
      this.firstFrame ();
      this.running = true;

      Log.i ("Game started.");
    }
  }


  Stop ()
  {
    if (this.running)
    {
      this.running = false;
      Log.i ("Game stopped");
    }
  }


  update (currentTime)
  {
    if (this.running)
    {
      this.deltaTime = ((currentTime - this.lastTime) / 1000);
      this.lastTime = currentTime;

      if (this.debugging)
      {
        Log.i (`Updated. Delta time: ${this.deltaTime.toFixed(2)}``);
        requestAnimationFrame (this.update.bind (this));
      }
    }
  }
}
