namespace DispatchSystemBackend.GraphQLSchema.Types
{
    public class CadEventInput
    {
        public int CadEventTypeId { get; set; }
        public int Priority { get; set; }
        public string Location { get; set; } = null!;
        public List<int> CadLogEntryIds { get; set; } = [];
        public List<int> AssignedUnitIds { get; set; } = [];
    }

    public class CadEventResult : CadEventInput
    {
        public int Id { get; set; }

        // TODO: add properties that get full CadEventTypeResult, CadLogEntryResults, and UnitResults objects
    }
}