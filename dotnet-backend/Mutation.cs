using dotnet_backend.Data;
using dotnet_backend.Models;

public class Mutation
{

    public IQueryable<EventRecord> GetEvents(int id, dotnet_backendContext context)
    {
        return context.EventRecords;
    }
}