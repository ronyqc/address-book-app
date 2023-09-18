using addressbook_backend.Context;
using addressbook_backend.Interfaces.Repository;
using addressbook_backend.Models;
using EF.Core.Repository.Repository;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;

namespace addressbook_backend.Repository
{
    public class ContactRepository : CommonRepository<Contact>, IContactRepository
    {
        private readonly ApplicationDbContext _dbContext;

        public ContactRepository(ApplicationDbContext dbContext) : base(dbContext)
        {
        }

        public void Update(Contact contact)
        {
            if (contact == null)
            {
                throw new ArgumentNullException(nameof(contact));
            }

            var entry = _dbContext.Entry(contact);
            if (entry.State == EntityState.Detached)
            {
                _dbContext.Attach(contact);
            }

            entry.State = EntityState.Modified;
        }
    }
}
