namespace DispatchSystemBackend.GraphQLSchema.Types
{
    public class CadLogEntryInput
    {
        public string Name { get; set; }
        public List<int> CadEventEntryIds { get; set; }
        public List<int> UnitIds { get; set; }
    }

    public class CadLogEntryResult : CadLogEntryInput
    {
        public int Id { get; set; }

        // TODO: add properties that get full CadEventResults and UnitResults objects
    }
}