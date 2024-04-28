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

            FakeData fakeData = new FakeData();
            fakeData.Init(10);

            modelBuilder.Entity<CadEventEntity>().HasData(fakeData.cadEvents);
            modelBuilder.Entity<CadLogEntryEntity>().HasData(fakeData.cadLogEntries);
            modelBuilder.Entity<UnitEntity>().HasData(fakeData.units);

        }
    }
}