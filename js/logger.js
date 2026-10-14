class Log
{
  static d (message)
  {
    console.debug ("[DEBUG] " + message);
  }

  
  static e (message)
  {
    console.error ("[ERROR] " + message);
  }


  static e (message, cause)
  {
    console.error ("[ERROR] " + message + ": " + cause);
  }


  static i (message)
  {
    console.info ("[INFO] " + message);
  }


  static w (message)
  {
    console.warn ("[WARNING] " + message);
  }
}
