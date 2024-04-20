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

        public CadEventEntity UpdateEvent(DispatchSystemBackendContext context, int eventID, CadEventEntity inputEvent)
        {
            CadEventEntity cadEvent = context.CadEvents.FirstOrDefault(item => item.ID == eventID) ?? throw new Exception("CadEvent not found");
            cadEvent.Name = inputEvent.Name;
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

        public CadLogEntryEntity UpdateLogEntry(DispatchSystemBackendContext context, int logEntryID, CadLogEntryEntity inputLogEntry)
        {
            CadLogEntryEntity cadLogEntry = context.CadLogEntries.FirstOrDefault(item => item.ID == logEntryID) ?? throw new Exception("CadLogEntry not found");
            cadLogEntry.Name = inputLogEntry.Name;
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

        public UnitEntity UpdateUnit(DispatchSystemBackendContext context, int unitID, UnitEntity inputUnit)
        {
            UnitEntity unit = context.Units.FirstOrDefault(item => item.ID == unitID) ?? throw new Exception("Unit not found");
            unit.Name = inputUnit.Name;
            context.SaveChanges();

            return unit;
        }
    }
}