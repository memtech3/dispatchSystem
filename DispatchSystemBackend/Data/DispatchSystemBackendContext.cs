using DispatchSystemBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace DispatchSystemBackend.Data
{
    public class DispatchSystemBackendContext(DbContextOptions<DispatchSystemBackendContext> options) : DbContext(options)
    {
        public DbSet<CadEventEntity> CadEvents { get; set; }
        public DbSet<CadLogEntryEntity> CadLogEntries { get; set; }
        public DbSet<UnitEntity> Units { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            FakeData.Init(10);
            modelBuilder.Entity<CadEventEntity>().HasData(FakeData.cadEvents);
            modelBuilder.Entity<CadLogEntryEntity>().HasData(FakeData.cadLogEntries);
            modelBuilder.Entity<UnitEntity>().HasData(FakeData.units);

        }
    }
}