using Microsoft.EntityFrameworkCore;

namespace DispatchSystemBackend.Data
{
    public class DispatchSystemBackendContext(DbContextOptions<DispatchSystemBackendContext> options) : DbContext(options)
    {
        public DbSet<Models.CadEventEntity> CadEvents { get; set; }
        public DbSet<Models.CadLogEntryEntity> CadLogEntries { get; set; }
        public DbSet<Models.UnitEntity> Units { get; set; }
    }
}