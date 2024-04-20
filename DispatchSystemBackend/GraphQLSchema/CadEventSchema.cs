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
            context.CadEvents.Add(cadEvent);
            context.SaveChanges();

            return cadEvent;
        }

        public CadEventEntity UpdateEvent(DispatchSystemBackendContext context, int eventID, CadEventEntity inputEvent)
        {
            CadEventEntity cadEvent = context.CadEvents.FirstOrDefault(item => item.ID == eventID) ?? throw new Exception("CadEvent not found");
            cadEvent.Name = inputEvent.Name;
            context.SaveChanges();

            return cadEvent;
        }
    }
}
