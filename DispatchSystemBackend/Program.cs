using DispatchSystemBackend.Data;
using Microsoft.EntityFrameworkCore;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);
ConfigurationManager Configuration = builder.Configuration;

builder.Services.AddDbContextPool<DispatchSystemBackendContext>(options =>
        options.UseNpgsql(Configuration.GetConnectionString("DefaultConnection"))
        .EnableSensitiveDataLogging());

builder.Services
.AddCors()
.AddGraphQLServer()
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

// TODO: make sure this is done securely for production
app.UseCors(x => x
.AllowAnyOrigin()
.AllowAnyMethod()
.AllowAnyHeader());

app.MapGet("/", () => "Hello World!");
app.MapGraphQL();

app.Run();