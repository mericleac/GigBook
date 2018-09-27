using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
 
namespace GigBook.Models
{
    public class GigBookContext : IdentityDbContext<User>
    {
        // base() calls the parent class' constructor passing the "options" parameter along
        public GigBookContext(DbContextOptions<GigBookContext> options) : base(options) { }

        // public DbSet<Gig> Gigs {get;set;}
        public DbSet<Instrument> Instruments {get;set;}
        // public DbSet<PrivateMessage> PMs {get;set;}
        // public DbSet<Review> Reviews {get;set;}
        public DbSet<User> Users {get;set;}
    }
}
