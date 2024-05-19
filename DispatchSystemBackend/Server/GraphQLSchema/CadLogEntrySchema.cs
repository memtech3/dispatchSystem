using DispatchSystemBackend.Data;
using DispatchSystemBackend.Models;

namespace DispatchSystemBackend.GraphQLSchema
{
    [ExtendObjectType(typeof(Query))]
    public class CadLogEntryQueries
    {
        public IQueryable<CadLogEntryEntity> GetLogEntries(DispatchSystemBackendContext context)
        {
            return context.CadLogEntries;
        }
    }

    [ExtendObjectType(typeof(Mutation))]
    public class CadLogEntryMutations
    {
        public CadLogEntryEntity CreateLogEntry(DispatchSystemBackendContext context, CadLogEntryEntity inputLogEntry)
        {
            CadLogEntryEntity cadLogEntry = inputLogEntry;
            context.CadLogEntries.Add(cadLogEntry);
            context.SaveChanges();

            return cadLogEntry;
        }

        public CadLogEntryEntity UpdateLogEntry(DispatchSystemBackendContext context, int logEntryId, CadLogEntryEntity inputLogEntry)
        {
            CadLogEntryEntity cadLogEntry = context.CadLogEntries.FirstOrDefault(item => item.Id == logEntryId) ?? throw new Exception("CadLogEntry not found");
            cadLogEntry.Name = inputLogEntry.Name;
            context.SaveChanges();

            return cadLogEntry;
        }
    }
}
