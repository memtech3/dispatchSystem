using Bogus;
using DispatchSystemBackend.Models;

namespace DispatchSystemBackend.Data
{
    public class FakeData
    {
        public List<CadEventTypeEntity> cadEventTypes = new List<CadEventTypeEntity>();
        public List<CadEventEntity> cadEvents = new List<CadEventEntity>();
        public List<CadLogEntryEntity> cadLogEntries = new List<CadLogEntryEntity>();
        public List<UnitEntity> units = new List<UnitEntity>();

        public FakeData() { }
        public void Init(int count)
        {
            int seed = 3660; // seed for Bogus's pseudo random generator, keeps output consistent

            int cadEventTypeId = 1;
            Faker<CadEventTypeEntity> cadEventTypeFaker = new Faker<CadEventTypeEntity>()
                .RuleFor(i => i.Id, _ => cadEventTypeId++)
                .RuleFor(i => i.Code, f => f.Random.AlphaNumeric(5))
                .RuleFor(i => i.Name, f => f.Random.Words(3))
                .RuleFor(i => i.Description, f => f.Random.Words(10))
                .RuleFor(i => i.Icon, f => f.Random.Word())
                .RuleFor(i => i.DefaultPriority, f => f.Random.Int(1, 9));
            cadEventTypes.AddRange(cadEventTypeFaker.UseSeed(seed).Generate(count));

            // FIXME: can't create CadEventEntities because cadEventTypes aren't getting added to
            // cadEvents properly
            int cadEventId = 1;
            Faker<CadEventEntity> cadEventFaker = new Faker<CadEventEntity>()
                .RuleFor(i => i.Id, _ => cadEventId++)
                .RuleFor(i => i.Location, f => f.Address.StreetAddress())
                .RuleFor(i => i.CadEventTypeId, f => f.PickRandom(cadEventTypes).Id)
                .RuleFor(i => i.Priority, f => f.PickRandom(cadEventTypes).DefaultPriority);
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