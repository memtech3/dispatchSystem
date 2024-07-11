using DispatchSystemBackend.Data;
using DispatchSystemBackend.GraphQLSchema.Types;
using DispatchSystemBackend.Models;

namespace DispatchSystemBackend.GraphQLSchema
{
    [ExtendObjectType(typeof(Query))]
    public class UnitQueries
    {
        public IQueryable<UnitResult> GetUnits(DispatchSystemBackendContext context)
        {
            return context.Units.Select(u => new UnitResult
            {
                Id = u.Id,
                Name = u.Name,
                Status = u.Status,
            });
        }
        public UnitEntity GetUnitById(DispatchSystemBackendContext context, int Id)
        {
            UnitEntity unit = context.Units.Find(Id) ?? throw new Exception("Unit not found");
            context.Entry(unit)
                .Collection(u => u.CadEventEntities)
                .Load();
            return unit;
        }

        public IQueryable<UnitResult> GetUnitsByCadEventId(DispatchSystemBackendContext context, int cadEventId)
        {
            IQueryable<UnitEntity> unitEntities = context.Units.Where(u => u.CadEventEntities.Any(e => e.Id == cadEventId));

            return unitEntities.Select(u => new UnitResult
            {
                Id = u.Id,
                Name = u.Name,
                Status = u.Status,
            });

        }
    }

    [ExtendObjectType(typeof(Mutation))]
    public class UnitMutations
    {
        public UnitResult CreateUnit(DispatchSystemBackendContext context, UnitInput unitInput)
        {
            UnitEntity unitEntity = new UnitEntity
            {
                Name = unitInput.Name,
            };

            _ = context.Units.Add(unitEntity);
            _ = context.SaveChanges();

            UnitResult unitResult = new UnitResult
            {
                Id = unitEntity.Id,
                Name = unitEntity.Name,
                Status = unitEntity.Status
            };

            return unitResult;
        }

        public UnitResult UpdateUnit(DispatchSystemBackendContext context, int Id, UnitInput unitInput)
        {
            UnitEntity unitEntity = new UnitEntity
            {
                Id = Id,
                Name = unitInput.Name,
            };

            _ = context.Units.Update(unitEntity);
            _ = context.SaveChanges();

            UnitResult unitResult = new UnitResult
            {
                Id = unitEntity.Id,
                Name = unitEntity.Name,
                Status = unitEntity.Status
            };

            return unitResult;
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
