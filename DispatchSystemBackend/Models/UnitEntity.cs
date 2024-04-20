namespace DispatchSystemBackend.Models
{
    public class UnitEntity
    {
        public int ID { get; set; }
        public string Name { get; set; } = null!;
        public List<CadLogEntryEntity> CadLogEntries { get; set; } = [];
        public List<CadEventEntity> CadEventEntities { get; set; } = [];
    }
}