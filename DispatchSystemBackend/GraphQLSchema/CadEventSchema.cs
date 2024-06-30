using DispatchSystemBackend.Data;
using DispatchSystemBackend.Models;

namespace DispatchSystemBackend.GraphQLSchema
{
    [ExtendObjectType(typeof(Query))]
    public class CadEventQueries
    {
        public IQueryable<CadEventEntity> GetEvents(DispatchSystemBackendContext context)
        {
            return context.CadEvents;
        }
    }

    [ExtendObjectType(typeof(Mutation))]
    public class CadEventMutations
    {
        public CadEventEntity CreateEvent(DispatchSystemBackendContext context, CadEventEntity inputEvent)
        {
            CadEventEntity cadEvent = inputEvent;
            _ = context.CadEvents.Add(cadEvent);
            _ = context.SaveChanges();

            return cadEvent;
        }

        public CadEventEntity UpdateEvent(DispatchSystemBackendContext context, int eventId, CadEventEntity inputEvent)
        {
            CadEventEntity cadEvent = context.CadEvents.FirstOrDefault(item => item.Id == eventId) ?? throw new Exception("CadEvent not found");
            // Implement update logic here
            _ = context.SaveChanges();

            return cadEvent;
        }
    }
}
