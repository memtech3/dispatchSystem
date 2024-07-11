namespace DispatchSystemBackend.GraphQLSchema.Types
{
    public class CadEventInput
    {
        public int CadEventTypeId { get; set; }
        public int Priority { get; set; }
        public string Location { get; set; } = null!;
    }

    public class CadEventResult : CadEventInput
    {
        public int Id { get; set; }
        public IQueryable<UnitResult> AssignedUnits { get; set; } = Enumerable.Empty<UnitResult>().AsQueryable();
        public required CadEventTypeResult CadEventType { get; set; }
        // TODO: add properties that get full CadEventTypeResult, CadLogEntryResults, and UnitResults objects
    }
}