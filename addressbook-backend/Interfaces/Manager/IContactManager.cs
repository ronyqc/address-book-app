using addressbook_backend.Models;
using EF.Core.Repository.Interface.Manager;
using Microsoft.Extensions.Hosting;

namespace addressbook_backend.Interfaces.Manager
{
    public interface IContactManager: ICommonManager<Contact>
    {
        Contact GetById(int id);
        ICollection<Contact> GetContacts();

        bool UpdateContact(Contact contact);
    }
}
