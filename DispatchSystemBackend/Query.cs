using DispatchSystemBackend.Data;
using DispatchSystemBackend.Models;

public class Query
{
    public string Hello(string name = "World")
    {
        return $"Hello, {name}!";
    }

    public IQueryable<CadEventModel> GetEvents(int id, DispatchSystemBackendContext context)
    {
        return context.Events;
    }
}