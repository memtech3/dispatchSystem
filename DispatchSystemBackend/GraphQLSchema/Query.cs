namespace DispatchSystemBackend.GraphQLSchema
{
    public class Query
    {
        public string Hello(string name = "World")
        {
            return $"Hello, {name}!";
        }
    }
}