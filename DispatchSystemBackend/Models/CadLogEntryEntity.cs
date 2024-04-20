namespace DispatchSystemBackend.Models
{
    public class CadLogEntryEntity
    {
        public int ID { get; set; }
        public string Name { get; set; } = null!;
        public List<CadEventEntity> CadEventEntries { get; set; } = [];
        public List<UnitEntity> Units { get; set; } = [];
    }
}