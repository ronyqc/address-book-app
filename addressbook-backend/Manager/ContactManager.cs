using addressbook_backend.Context;
using addressbook_backend.Interfaces.Manager;
using addressbook_backend.Models;
using addressbook_backend.Repository;
using EF.Core.Repository.Manager;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;

namespace addressbook_backend.Manager
{
    public class ContactManager: CommonManager<Contact>, IContactManager
    {
        public ContactManager(ApplicationDbContext _dbContext) : base(new ContactRepository(_dbContext))
        {
        }

        public ICollection<Contact> GetContacts()
        {
            return GetAll().ToList();
        }

        public Contact GetById(int id)
        {
            return GetFirstOrDefault(x => x.contactId == id);
        }

        public bool UpdateContact(Contact contact)
        {
            var existingContact = GetById(contact.contactId);

            if (existingContact != null)
            {
                // Copiar los valores actualizados al contacto existente.
                existingContact.name = contact.name;
                existingContact.lastName = contact.lastName;
                existingContact.address = contact.address;
                existingContact.cellPhone = contact.cellPhone;
                existingContact.age = contact.age;

                // Guardar los cambios en la base de datos.
                Update(existingContact);
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
