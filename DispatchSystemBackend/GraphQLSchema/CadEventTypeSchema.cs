using DispatchSystemBackend.Data;
using DispatchSystemBackend.GraphQLSchema.Types;
using DispatchSystemBackend.Models;

namespace DispatchSystemBackend.GraphQLSchema
{
    [ExtendObjectType(typeof(Query))]
    public class CadEventTypeQueries
    {
        public IQueryable<CadEventTypeResult> GetEventTypes(DispatchSystemBackendContext context)
        {
            return context.CadEventTypes.Select(c => new CadEventTypeResult
            {
                Id = c.Id,
                Code = c.Code,
                Name = c.Name,
                Description = c.Description,
                Icon = c.Icon,
                DefaultPriority = c.DefaultPriority
            });
        }

        public CadEventTypeResult GetEventTypeByEventId(DispatchSystemBackendContext context, int cadEventId)
        {
            return new CadEventTypeResult
            {
                Id = 0,
                Code = "NONE",
                Name = "NO NAME",
                Description = "NO DESCRIPTION",
                Icon = "NO ICON",
                DefaultPriority = 0
            };

        }
    }
}