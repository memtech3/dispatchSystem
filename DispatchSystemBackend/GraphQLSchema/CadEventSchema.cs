using DispatchSystemBackend.Data;
using DispatchSystemBackend.GraphQLSchema.Types;
using DispatchSystemBackend.Models;
using HotChocolate.Resolvers;

namespace DispatchSystemBackend.GraphQLSchema
{
    [ExtendObjectType(typeof(Query))]
    public class CadEventQueries
    {
        public IQueryable<CadEventResult> GetEvents(DispatchSystemBackendContext context, IResolverContext resolverContext)
        {
            return context.CadEvents.Select(c => new CadEventResult
            {
                Id = c.Id,
                CadEventTypeId = c.CadEventTypeId,
                Priority = c.Priority,
                Location = c.Location,
                // CadLogEntryIds = c.CadLogEntries.Select(l => l.Id).ToList(),
                // AssignedUnitIds = c.AssignedUnits.Select(u => u.Id).ToList()
                AssignedUnits = resolverContext.Resolver<UnitQueries>().GetUnitsByCadEventId(context, c.Id),
                CadEventType = resolverContext.Resolver<CadEventTypeQueries>().GetEventTypeByEventId(context, c.CadEventTypeId)
            });
        }
    }

    [ExtendObjectType(typeof(Mutation))]
    public class CadEventMutations
    {
        public CadEventResult CreateEvent(DispatchSystemBackendContext context, CadEventInput cadEventInput)
        {
            CadEventEntity cadEventEntity = new CadEventEntity
            {
                CadEventTypeId = cadEventInput.CadEventTypeId,
                CadEventType = context.CadEventTypes.FirstOrDefault(cadEventType
                    => cadEventType.Id == cadEventInput.CadEventTypeId) ?? throw new Exception("CadEventType not found"),
                Priority = cadEventInput.Priority,
                Location = cadEventInput.Location
            };

            _ = context.CadEvents.Add(cadEventEntity);
            _ = context.SaveChanges();

            CadEventResult cadEventResult = new CadEventResult
            {
                Id = cadEventEntity.Id,
                CadEventTypeId = cadEventEntity.CadEventTypeId,
                Priority = cadEventEntity.Priority,
                Location = cadEventEntity.Location,
                // CadLogEntryIds = cadEventEntity.CadLogEntries.Select(l => l.Id).ToList(),
                // AssignedUnitIds = cadEventEntity.AssignedUnits.Select(u => u.Id).ToList()
            };

            return cadEventResult;
        }

        public CadEventResult UpdateEvent(DispatchSystemBackendContext context, int Id, CadEventInput cadEventInput)
        {
            CadEventEntity cadEventEntity = new()
            {
                Id = Id,
                CadEventTypeId = cadEventInput.CadEventTypeId,
                CadEventType = context.CadEventTypes.FirstOrDefault(cadEventType
                    => cadEventType.Id == cadEventInput.CadEventTypeId) ?? throw new Exception("CadEventType not found"),
                Priority = cadEventInput.Priority,
                Location = cadEventInput.Location
            };

            _ = context.CadEvents.Update(cadEventEntity);
            _ = context.SaveChanges();

            CadEventResult cadEventResult = new()
            {
                Id = cadEventEntity.Id,
                CadEventTypeId = cadEventEntity.CadEventTypeId,
                Priority = cadEventEntity.Priority,
                Location = cadEventEntity.Location,
                // CadLogEntryIds = cadEventEntity.CadLogEntries.Select(l => l.Id).ToList(),
                // AssignedUnitIds = cadEventEntity.AssignedUnits.Select(u => u.Id).ToList()
            };

            return cadEventResult;
        }
    }
}
