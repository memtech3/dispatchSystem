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

        public IQueryable<CadEventEntity> GetEvents(DispatchSystemBackendContext context)
        {
            return context.CadEvents;
        }

        public IQueryable<CadLogEntryEntity> GetLogEntries(DispatchSystemBackendContext context)
        {
            return context.CadLogEntries;
        }

        public IQueryable<UnitEntity> GetUnits(DispatchSystemBackendContext context)
        {
            return context.Units;
        }
    }
}