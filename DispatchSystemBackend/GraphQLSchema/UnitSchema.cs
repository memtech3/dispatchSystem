using Bogus.DataSets;
using DispatchSystemBackend.Data;
using DispatchSystemBackend.Models;

namespace DispatchSystemBackend.GraphQLSchema
{
    public class UnitInputType
    {
        public string Name { get; set; }
        public string Status { get; set; }
    }
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
        public UnitEntity CreateUnit(DispatchSystemBackendContext context, UnitInputType unitInput)
        {
            UnitEntity unit = new UnitEntity()
            {
                Name = unitInput.Name,
                Status = unitInput.Status
            };

            _ = context.Units.Add(unit);
            _ = context.SaveChanges();

            return unit;
        }

        public UnitEntity UpdateUnit(DispatchSystemBackendContext context, int Id, UnitInputType unitInput)
        {
            // FIXME: graphql client doesn't get this exception, check that it's getting thrown properly
            UnitEntity unit = context.Units.Find(Id) ?? throw new Exception("Unit not found");
            unit.Name = unitInput.Name;
            unit.Status = unitInput.Status;
            _ = context.SaveChanges();

            return unit;
        }
    }
}
