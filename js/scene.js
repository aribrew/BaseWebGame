class Scene
{
  constructor (is3d)
  {
    this.is3d = is3d;
    this.entities = new Array();
  }


  Add (entity)
  {
    if ((entity != null) &&
        !this.entities.includes(entity))
    {
      this.entities.push (entity);
    }
  }


  Find (entityName)
  {
    this.entities.forEach(
      (entity) =>
      {
        if (entity.Name() == entityName)
        {
          return entity;
        }
      }
    );
  }
}
