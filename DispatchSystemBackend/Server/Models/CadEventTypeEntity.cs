namespace DispatchSystemBackend.Models
{
    public class CadEventTypeEntity
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Icon { get; set; }
        public int DefaultPriority { get; set; }
        public List<CadEventEntity> CadEventEntries { get; set; } = [];
    }
}
