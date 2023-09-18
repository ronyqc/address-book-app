using addressbook_backend.Models;
using EF.Core.Repository.Interface.Repository;
using Microsoft.Extensions.Hosting;

namespace addressbook_backend.Interfaces.Repository
{
    public interface IContactRepository : ICommonRepository<Contact>
    {
    }
}
