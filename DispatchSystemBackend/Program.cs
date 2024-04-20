using DispatchSystemBackend.Data;
using Microsoft.EntityFrameworkCore;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);
ConfigurationManager Configuration = builder.Configuration;

builder.Services.AddDbContextPool<DispatchSystemBackendContext>(options =>
        options.UseNpgsql(Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddGraphQLServer()
.RegisterDbContext<DispatchSystemBackendContext>()
.AddQueryType<DispatchSystemBackend.GraphQLSchema.Query>()
.AddMutationType<DispatchSystemBackend.GraphQLSchema.Mutation>();

WebApplication app = builder.Build();

app.MapGet("/", () => "Hello World!");
app.MapGraphQL();

app.Run();