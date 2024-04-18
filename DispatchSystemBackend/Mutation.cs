using DispatchSystemBackend.Data;
using DispatchSystemBackend.Models;

public class Mutation
{

    public EventModel CreateEvent(DispatchSystemBackendContext context, EventModel inputEvent)
    {
        EventModel eventEntity = new EventModel() { ID = inputEvent.ID, Name = inputEvent.Name };
        context.Events.Add(eventEntity);
        context.SaveChanges();

        return eventEntity;
    }
}