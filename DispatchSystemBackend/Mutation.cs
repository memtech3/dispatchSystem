using DispatchSystemBackend.Data;
using DispatchSystemBackend.Models;

public class Mutation
{

    public IQueryable<EventRecord> GetEvents(int id, DispatchSystemBackendContext context)
    {
        return context.EventRecords;
    }
}