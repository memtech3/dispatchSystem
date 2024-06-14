using System.ComponentModel.DataAnnotations.Schema;

namespace DispatchSystemBackend.Models
{
    public class CadEventEntity
    {
        public int Id { get; set; }
        [ForeignKey("CadEventType")]
        public required int CadEventTypeId { get; set; }
        public required CadEventTypeEntity CadEventType { get; set; }
        public int Priority { get; set; }
        public string Location { get; set; } = null!;
        public List<CadLogEntryEntity> CadLogEntries { get; set; } = [];
        public List<UnitEntity> AssignedUnits { get; set; } = [];
    }
}