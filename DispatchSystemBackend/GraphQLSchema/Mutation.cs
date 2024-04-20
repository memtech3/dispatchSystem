using DispatchSystemBackend.Data;
using DispatchSystemBackend.Models;

namespace DispatchSystemBackend.GraphQLSchema
{
    public class Mutation
    {

        public CadEventEntity CreateEvent(DispatchSystemBackendContext context, CadEventEntity inputEvent)
        {
            CadEventEntity cadEvent = new CadEventEntity() { ID = inputEvent.ID, Name = inputEvent.Name };
            context.CadEvents.Add(cadEvent);
            context.SaveChanges();

            return cadEvent;
        }
    }
}