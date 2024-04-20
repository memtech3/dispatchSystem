using DispatchSystemBackend.Data;
using DispatchSystemBackend.Models;

public class Mutation
{

    public CadEventModel CreateEvent(DispatchSystemBackendContext context, CadEventModel inputEvent)
    {
        CadEventModel eventEntity = new CadEventModel() { ID = inputEvent.ID, Name = inputEvent.Name };
        context.Events.Add(eventEntity);
        context.SaveChanges();

        return eventEntity;
    }
}