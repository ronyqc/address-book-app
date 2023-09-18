using addressbook_backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;

namespace addressbook_backend.Context
{
    public class ApplicationDbContext: DbContext
    {
        public DbSet<Contact> Contacts { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder dbContextOptionsBuilder) => dbContextOptionsBuilder.UseSqlite("Data Source=./Data/AppDB.db");

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            Contact[] contacsToSeed = new Contact[6];

            for (int i = 1; i <= 6; i++)
            {
                contacsToSeed[i - 1] = new Contact
                {
                    contactId = i,
                    name = $"Contact Name: {i}",
                    lastName = $"Last Name: {i}",
                    address = $"Address: {i}",
                    cellPhone = $"Cellphone: 9{i}{i + 1}{i + 2}{i + 3}{i + 4}{i + 5}",
                    age = i + 20
                };
            }

            modelBuilder.Entity<Contact>().HasData(contacsToSeed);
        }
    }
}
