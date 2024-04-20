using DispatchSystemBackend.Data;
using DispatchSystemBackend.Models;

namespace DispatchSystemBackend.GraphQLSchema
{
    public class Mutation
    {

        public CadEventEntity CreateEvent(DispatchSystemBackendContext context, CadEventEntity inputEvent)
        {
            CadEventEntity eventEntity = new CadEventEntity() { ID = inputEvent.ID, Name = inputEvent.Name };
            context.Events.Add(eventEntity);
            context.SaveChanges();

            return eventEntity;
        }
    }
}