namespace DispatchSystemBackend.Models
{
    public class CadEventEntity
    {
        public int Id { get; set; }
        public required CadEventTypeEntity Type { get; set; }
        public int Priority { get; set; }
        public string Location { get; set; } = null!;
        public List<CadLogEntryEntity> CadLogEntries { get; set; } = [];
        public List<UnitEntity> AssignedUnits { get; set; } = [];
    }
}