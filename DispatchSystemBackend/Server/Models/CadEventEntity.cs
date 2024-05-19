namespace DispatchSystemBackend.Models
{
    public class CadEventEntity
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public List<CadLogEntryEntity> CadLogEntries { get; set; } = [];
        public List<UnitEntity> Units { get; set; } = [];
    }
}