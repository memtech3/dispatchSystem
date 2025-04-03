using DispatchSystemBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace DispatchSystemBackend.Data
{
    public class DispatchSystemBackendContext(DbContextOptions<DispatchSystemBackendContext> options) : DbContext(options)
    {
        public DbSet<CadEventTypeEntity> CadEventTypes { get; set; }
        public DbSet<CadEventEntity> CadEvents { get; set; }
        public DbSet<CadLogEntryEntity> CadLogEntries { get; set; }
        public DbSet<UnitEntity> Units { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            _ = modelBuilder.Entity<CadEventEntity>()
                .HasOne(e => e.CadEventType)
                .WithMany(e => e.CadEventEntries)
                .HasForeignKey(e => e.CadEventTypeId);

            base.OnModelCreating(modelBuilder);

            FakeData fakeData = new();
            fakeData.Init(10);

            _ = modelBuilder.Entity<CadEventTypeEntity>().HasData(fakeData.cadEventTypes);
            _ = modelBuilder.Entity<CadEventEntity>().HasData(fakeData.cadEvents);
            _ = modelBuilder.Entity<CadLogEntryEntity>().HasData(fakeData.cadLogEntries);
            _ = modelBuilder.Entity<UnitEntity>().HasData(fakeData.units);

        }
    }
}