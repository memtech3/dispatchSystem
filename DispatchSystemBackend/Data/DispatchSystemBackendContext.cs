using Microsoft.EntityFrameworkCore;

namespace DispatchSystemBackend.Data
{
    public class DispatchSystemBackendContext(DbContextOptions<DispatchSystemBackendContext> options) : DbContext(options)
    {
        public DbSet<Models.EventModel> Events { get; set; }

    }
}