using Bogus;
using DispatchSystemBackend.Models;

namespace DispatchSystemBackend.Data
{
    public static class FakeData
    {
        public static List<CadEventEntity> cadEvents = new List<CadEventEntity>();
        public static List<CadLogEntryEntity> cadLogEntries = new List<CadLogEntryEntity>();
        public static List<UnitEntity> units = new List<UnitEntity>();


        public static void Init(int count)
        {
            int cadEventID = 1;
            Faker<CadEventEntity> cadEventFaker = new Faker<CadEventEntity>()
                .RuleFor(i => i.ID, _ => cadEventID++)
                .RuleFor(i => i.Name, f => f.Hacker.Phrase());
            List<CadEventEntity> cadEventEntities = cadEventFaker.Generate(count);

            int cadLogEntryID = 1;
            Faker<CadLogEntryEntity> cadLogEntryFaker = new Faker<CadLogEntryEntity>()
                .RuleFor(i => i.ID, _ => cadLogEntryID++)
                .RuleFor(i => i.Name, f => f.Hacker.Phrase())
                .RuleFor(i => i.CadEventEntries, f => f.PickRandom(cadEvents));
            List<CadLogEntryEntity> cadLogEntryEntities = cadLogEntryFaker.Generate(count);

            int unitID = 1;
            Faker<UnitEntity> unitFaker = new Faker<UnitEntity>()
                .RuleFor(i => i.ID, _ => unitID++)
                .RuleFor(i => i.Name, f => f.Person.FullName);
            List<UnitEntity> unitEntities = unitFaker.Generate(count);




            cadEvents.AddRange(cadEventEntities);
            cadLogEntries.AddRange(cadLogEntryEntities);
            units.AddRange(unitEntities);

        }
    }
}