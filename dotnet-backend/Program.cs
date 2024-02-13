using dotnet_backend.Data;
using Microsoft.EntityFrameworkCore;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);
ConfigurationManager Configuration = builder.Configuration;

builder.Services.AddGraphQLServer().RegisterDbContext<dotnet_backendContext>()
.AddQueryType<Query>();
builder.Services.AddDbContext<dotnet_backendContext>(options =>
        options.UseNpgsql(Configuration.GetConnectionString("DefaultConnection")));

WebApplication app = builder.Build();

app.MapGet("/", () => "Hello World!");
app.MapGraphQL();

app.Run();