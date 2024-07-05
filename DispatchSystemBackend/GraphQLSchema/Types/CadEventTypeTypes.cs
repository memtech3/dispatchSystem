namespace DispatchSystemBackend.GraphQLSchema.Types
{
    public class CadEventTypeInput
    {
        public required string Code { get; set; }
        public required string Name { get; set; }
        public string? Description { get; set; }
        public string? Icon { get; set; }
        public int? DefaultPriority { get; set; }
    }

    public class CadEventTypeResult : CadEventTypeInput
    {
        public int Id { get; set; }

        // TODO: add property that get full CadEventResults objects
    }
}