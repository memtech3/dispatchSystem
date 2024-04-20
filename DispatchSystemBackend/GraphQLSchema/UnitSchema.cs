using DispatchSystemBackend.Data;
using DispatchSystemBackend.Models;

namespace DispatchSystemBackend.GraphQLSchema
{
    [ExtendObjectType(typeof(Query))]
    public class UnitQueries
    {
        public IQueryable<UnitEntity> GetUnits(DispatchSystemBackendContext context)
        {
            return context.Units;
        }
    }

    [ExtendObjectType(typeof(Mutation))]
    public class UnitMutations
    {
        public UnitEntity CreateUnit(DispatchSystemBackendContext context, UnitEntity inputUnit)
        {
            UnitEntity unit = inputUnit;
            context.Units.Add(unit);
            context.SaveChanges();

            return unit;
        }

        public UnitEntity UpdateUnit(DispatchSystemBackendContext context, int unitID, UnitEntity inputUnit)
        {
            UnitEntity unit = context.Units.FirstOrDefault(item => item.ID == unitID) ?? throw new Exception("Unit not found");
            unit.Name = inputUnit.Name;
            context.SaveChanges();

            return unit;
        }
    }
}
