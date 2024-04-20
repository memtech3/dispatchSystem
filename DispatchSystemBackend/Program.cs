using DispatchSystemBackend.Data;
using Microsoft.EntityFrameworkCore;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);
ConfigurationManager Configuration = builder.Configuration;

builder.Services.AddDbContextPool<DispatchSystemBackendContext>(options =>
        options.UseNpgsql(Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddGraphQLServer()
.InitializeOnStartup()
.RegisterDbContext<DispatchSystemBackendContext>()
.AddQueryType<DispatchSystemBackend.GraphQLSchema.Query>()
.AddMutationType<DispatchSystemBackend.GraphQLSchema.Mutation>()
.AddTypeExtension<DispatchSystemBackend.GraphQLSchema.CadEventQueries>()
.AddTypeExtension<DispatchSystemBackend.GraphQLSchema.CadEventMutations>()
.AddTypeExtension<DispatchSystemBackend.GraphQLSchema.CadLogEntryQueries>()
.AddTypeExtension<DispatchSystemBackend.GraphQLSchema.CadLogEntryMutations>()
.AddTypeExtension<DispatchSystemBackend.GraphQLSchema.UnitQueries>()
.AddTypeExtension<DispatchSystemBackend.GraphQLSchema.UnitMutations>();


WebApplication app = builder.Build();

app.MapGet("/", () => "Hello World!");
app.MapGraphQL();

app.Run();