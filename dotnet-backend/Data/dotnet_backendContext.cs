using Microsoft.EntityFrameworkCore;

namespace dotnet_backend.Data
{
    public class dotnet_backendContext(DbContextOptions<dotnet_backendContext> options) : DbContext(options)
    {
        public DbSet<Models.EventRecord> EventRecords { get; set; }

    }
}