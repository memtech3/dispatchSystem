namespace DispatchSystemBackend.GraphQLSchema.Types
{
    public class UnitInput
    {
        public required string Name { get; set; }
    }

    public class UnitResult : UnitInput
    {
        public int Id { get; set; }

        // TODO: add properties that get full CadEventResults, CadEventTypeResults, and CadLogEntryResults  objects
    }
}