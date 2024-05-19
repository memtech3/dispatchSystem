namespace DispatchSystemBackend.Models
{
    public class UnitEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Status { get; set; }
        public List<CadLogEntryEntity> CadLogEntries { get; set; } = [];
        public List<CadEventEntity> CadEventEntities { get; set; } = [];
    }
}