using DispatchSystemBackend.Data;
using DispatchSystemBackend.Models;

namespace DispatchSystemBackend.GraphQLSchema
{
    public class Query
    {
        public string Hello(string name = "World")
        {
            return $"Hello, {name}!";
        }

        public IQueryable<CadEventEntity> GetEvents(int id, DispatchSystemBackendContext context)
        {
            return context.CadEvents;
        }
    }
}