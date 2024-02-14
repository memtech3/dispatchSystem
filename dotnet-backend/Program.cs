using dotnet_backend.Data;
using Microsoft.EntityFrameworkCore;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);
ConfigurationManager Configuration = builder.Configuration;

builder.Services.AddDbContextPool<dotnet_backendContext>(options =>
        options.UseNpgsql(Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddGraphQLServer().RegisterDbContext<dotnet_backendContext>()
.AddQueryType<Query>().AddMutationType<Mutation>();

WebApplication app = builder.Build();

app.MapGet("/", () => "Hello World!");
app.MapGraphQL();

app.Run();