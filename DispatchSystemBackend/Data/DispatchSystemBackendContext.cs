using DispatchSystemBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace DispatchSystemBackend.Data
{
    public class DispatchSystemBackendContext(DbContextOptions<DispatchSystemBackendContext> options) : DbContext(options)
    {
        public DbSet<Models.CadEventEntity> CadEvents { get; set; }
        public DbSet<Models.CadLogEntryEntity> CadLogEntries { get; set; }
        public DbSet<Models.UnitEntity> Units { get; set; }

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