using dotnet_backend.Data;
using dotnet_backend.Models;

public class Query
{
    public string Hello(string name = "World")
    {
        return $"Hello, {name}!";
    }

    public IQueryable<EventRecord> GetEvents(int id, dotnet_backendContext context)
    {
        return context.EventRecords;
    }
}