using Bogus;
using DispatchSystemBackend.Models;

namespace DispatchSystemBackend.Data
{
    public class FakeData
    {
        public List<CadEventEntity> cadEvents = new List<CadEventEntity>();
        public List<CadLogEntryEntity> cadLogEntries = new List<CadLogEntryEntity>();
        public List<UnitEntity> units = new List<UnitEntity>();

        public FakeData() { }
        public void Init(int count)
        {
            int seed = 3660; // seed for Bogus's pseudo random generator, keeps output consistent

            int cadEventId = 1;
            Faker<CadEventEntity> cadEventFaker = new Faker<CadEventEntity>()
                // FIXME: EF Core complains about duplicate Ids, what am I doing wrong?
                .RuleFor(i => i.Id, _ => cadEventId++)
                .RuleFor(i => i.Name, f => f.Hacker.Phrase());
            cadEvents.AddRange(cadEventFaker.UseSeed(seed).Generate(count));

            int cadLogEntryId = 1;
            Faker<CadLogEntryEntity> cadLogEntryFaker = new Faker<CadLogEntryEntity>()
                .RuleFor(i => i.Id, _ => cadLogEntryId++)
                .RuleFor(i => i.Name, f => f.Hacker.Phrase());
            // FIXME: CadEventEntries foreign key rules desn't work because faker returns CadLogEntity items 
            // instead of a list of CadLogEntity Ids
            // .RuleFor(i => i.CadEventEntries, f => f.Random.ListItems(cadEventEntities));
            cadLogEntries.AddRange(cadLogEntryFaker.UseSeed(seed).Generate(count));

            int unitId = 1;
            Faker<UnitEntity> unitFaker = new Faker<UnitEntity>()
                .RuleFor(i => i.Id, _ => unitId++)
                .RuleFor(i => i.Name, f => f.Person.FullName)
                .RuleFor(i => i.Status, f => f.Person.FirstName);
            units.AddRange(unitFaker.UseSeed(seed).Generate(count));
        }
    }
}