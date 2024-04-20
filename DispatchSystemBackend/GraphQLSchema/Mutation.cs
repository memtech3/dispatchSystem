using DispatchSystemBackend.Data;
using DispatchSystemBackend.Models;

namespace DispatchSystemBackend.GraphQLSchema
{
    public class Mutation
    {

        public CadEventEntity CreateEvent(DispatchSystemBackendContext context, CadEventEntity inputEvent)
        {
            CadEventEntity cadEvent = inputEvent;
            context.CadEvents.Add(cadEvent);
            context.SaveChanges();

            return cadEvent;
        }

        public CadLogEntryEntity CreateLogEntry(DispatchSystemBackendContext context, CadLogEntryEntity inputLogEntry)
        {
            CadLogEntryEntity cadLogEntry = inputLogEntry;
            context.CadLogEntries.Add(cadLogEntry);
            context.SaveChanges();

            return cadLogEntry;
        }

        public UnitEntity CreateUnit(DispatchSystemBackendContext context, UnitEntity inputUnit)
        {
            UnitEntity unit = inputUnit;
            context.Units.Add(unit);
            context.SaveChanges();

            return unit;
        }
    }
}