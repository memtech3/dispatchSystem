namespace DispatchSystemBackend.GraphQLSchema.Types
{
    public class UnitInput
    {
        public string Name { get; set; }
        public string Status { get; set; }
    }

    public class UnitResult : UnitInput
    {
        public int Id { get; set; }

        // TODO: add properties that get full CadEventResults, CadEventTypeResults, and CadLogEntryResults  objects
    }
}