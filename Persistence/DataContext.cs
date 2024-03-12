using Microsoft.EntityFrameworkCore;

namespace Persistence;

public class DataContext(DbContextOptions options) : DbContext(options)
{
    public DbSet<Domain.Activity> Activities { get; set; }
}
