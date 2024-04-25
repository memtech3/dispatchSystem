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
                // FIXME: EF Core complains about duplicate IDs, what am I doing wrong?
                .RuleFor(i => i.ID, _ => cadEventID++)
                .RuleFor(i => i.Name, f => f.Hacker.Phrase());
            cadEvents.AddRange(cadEventFaker.Generate(count));

            int cadLogEntryID = 1;
            Faker<CadLogEntryEntity> cadLogEntryFaker = new Faker<CadLogEntryEntity>()
                .RuleFor(i => i.ID, _ => cadLogEntryID++)
                .RuleFor(i => i.Name, f => f.Hacker.Phrase());
                // FIXME: CadEventEntries foreign key rules desn't work because faker returns CadLogEntity items 
                // instead of a list of CadLogEntity IDs
                // .RuleFor(i => i.CadEventEntries, f => f.Random.ListItems(cadEventEntities));
            cadLogEntries.AddRange(cadLogEntryFaker.Generate(count));

            int unitID = 1;
            Faker<UnitEntity> unitFaker = new Faker<UnitEntity>()
                .RuleFor(i => i.ID, _ => unitID++)
                .RuleFor(i => i.Name, f => f.Person.FullName);
            units.AddRange(unitFaker.Generate(count));
        }
    }
}