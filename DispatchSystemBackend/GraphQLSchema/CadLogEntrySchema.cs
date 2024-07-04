using DispatchSystemBackend.Data;
using DispatchSystemBackend.GraphQLSchema.Types;
using DispatchSystemBackend.Models;

namespace DispatchSystemBackend.GraphQLSchema
{
    [ExtendObjectType(typeof(Query))]
    public class CadLogEntryQueries
    {
        public IQueryable<CadLogEntryResult> GetLogEntries(DispatchSystemBackendContext context)
        {
            return context.CadLogEntries.Select(c => new CadLogEntryResult
            {
                Id = c.Id,
                Name = c.Name,
                CadEventEntryIds = c.CadEventEntries.Select(l => l.Id).ToList(),
                UnitIds = c.Units.Select(u => u.Id).ToList()
            });
        }
    }

    [ExtendObjectType(typeof(Mutation))]
    public class CadLogEntryMutations
    {
        public CadLogEntryResult CreateLogEntry(DispatchSystemBackendContext context, CadLogEntryInput cadLogEntryInput)
        {
            CadLogEntryEntity cadLogEntry = new CadLogEntryEntity
            {
                Name = cadLogEntryInput.Name
                // TODO: add CadEvents and Units fields
            };

            _ = context.CadLogEntries.Add(cadLogEntry);
            _ = context.SaveChanges();

            CadLogEntryResult cadLogEntryResult = new CadLogEntryResult
            {
                Id = cadLogEntry.Id,
                Name = cadLogEntry.Name,
                CadEventEntryIds = cadLogEntry.CadEventEntries.Select(l => l.Id).ToList(),
                UnitIds = cadLogEntry.Units.Select(u => u.Id).ToList()
            };

            return cadLogEntryResult;
        }

        public CadLogEntryResult UpdateLogEntry(DispatchSystemBackendContext context, int Id, CadLogEntryInput cadLogEntryInput)
        {
            CadLogEntryEntity cadLogEntry = new CadLogEntryEntity
            {
                Id = Id,
                Name = cadLogEntryInput.Name
                // TODO: add CadEvents and Units fields
            };

            _ = context.CadLogEntries.Update(cadLogEntry);
            _ = context.SaveChanges();

            CadLogEntryResult cadLogEntryResult = new CadLogEntryResult
            {
                Id = cadLogEntry.Id,
                Name = cadLogEntry.Name,
                CadEventEntryIds = cadLogEntry.CadEventEntries.Select(l => l.Id).ToList(),
                UnitIds = cadLogEntry.Units.Select(u => u.Id).ToList()
            };

            return cadLogEntryResult;
        }
    }
}
