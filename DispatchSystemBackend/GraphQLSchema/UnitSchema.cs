using DispatchSystemBackend.Data;
using DispatchSystemBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace DispatchSystemBackend.GraphQLSchema
{
    [ExtendObjectType(typeof(Query))]
    public class UnitQueries
    {
        public IQueryable<UnitEntity> GetUnits(DispatchSystemBackendContext context)
        {
            return context.Units.Include(u => u.CadEventEntities).Include(u => u.CadLogEntries);
        }
        public UnitEntity GetUnitById(DispatchSystemBackendContext context, int Id)
        {
            UnitEntity unit = context.Units.Find(Id) ?? throw new Exception("Unit not found");
            context.Entry(unit)
                .Collection(u => u.CadEventEntities)
                .Load();
            return unit;
        }
    }

    [ExtendObjectType(typeof(Mutation))]
    public class UnitMutations
    {
        public UnitEntity CreateUnit(DispatchSystemBackendContext context, string name, string initialStatus)
        {
            UnitEntity unit = new()
            {
                Name = name,
                Status = initialStatus
            };

            _ = context.Units.Add(unit);
            _ = context.SaveChanges();

            return unit;
        }

        public UnitEntity UpdateUnit(DispatchSystemBackendContext context, int Id, string name)
        {
            // FIXME: graphql client doesn't get this exception, check that it's getting thrown properly
            UnitEntity unit = context.Units.Find(Id) ?? throw new Exception("Unit not found");
            unit.Name = name;
            _ = context.SaveChanges();

            return unit;
        }

        public UnitEntity UpdateUnitStatus(DispatchSystemBackendContext context, int Id, string status)
        {
            UnitEntity unit = context.Units.Find(Id) ?? throw new Exception("Unit not found");
            unit.Status = status;
            _ = context.SaveChanges();

            return unit;
        }

        public UnitEntity AttachUnitToEvent(DispatchSystemBackendContext context, int unitId, int eventId)
        {
            UnitEntity unit = context.Units.Find(unitId) ?? throw new Exception("Unit not found");
            CadEventEntity cadEvent = context.CadEvents.Find(eventId) ?? throw new Exception("Event not found");

            unit.CadEventEntities.Add(cadEvent);
            _ = context.SaveChanges();

            return unit;
        }

        public UnitEntity DetachUnitFromEvent(DispatchSystemBackendContext context, int unitId, int eventId)
        {
            UnitEntity unit = context.Units.Find(unitId) ?? throw new Exception("Unit not found");
            CadEventEntity cadEvent = context.CadEvents.Find(eventId) ?? throw new Exception("Event not found");

            // TODO: make sure this is a proper use of dotnet
            // this fixes issues with Detach not doing anything
            context.Entry(unit)
                .Collection(u => u.CadEventEntities)
                .Load();

            _ = unit.CadEventEntities.Remove(cadEvent);

            _ = context.SaveChanges();

            return unit;
        }
    }
}
