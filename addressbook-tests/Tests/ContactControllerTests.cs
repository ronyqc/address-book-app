using System;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Xunit;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Newtonsoft.Json;
using addressbook_backend.Models;
using addressbook_backend.Controllers;
using addressbook_backend.Interfaces.Manager;
using Microsoft.AspNetCore.Mvc;
using Moq;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace addressbook_tests.Tests
{
    [TestClass]
    public class ContactControllerTests
    {
        [TestMethod]
        public void GetContacts_ReturnsListOfContacts()
        {
            // Arrange
            var mockContactManager = new Mock<IContactManager>();
            mockContactManager.Setup(manager => manager.GetContacts())
                .Returns(new List<Contact>
                {
                    new Contact { contactId = 1, name = "John" },
                    new Contact { contactId = 2, name = "Jane" }
                });
            var controller = new ContactController(mockContactManager.Object);

            // Act
            var result = controller.GetContacts();

            // Assert
            var okResult = result as OkObjectResult;
            var contacts = okResult?.Value as List<Contact>;
            Microsoft.VisualStudio.TestTools.UnitTesting.Assert.IsNotNull(okResult);
            Microsoft.VisualStudio.TestTools.UnitTesting.Assert.IsNotNull(contacts);
            Microsoft.VisualStudio.TestTools.UnitTesting.Assert.AreEqual(2, contacts.Count);
        }

        [TestMethod]
        public void GetById_ContactExists_ReturnsContact()
        {
            // Arrange
            var contactId = 1;
            var mockContactManager = new Mock<IContactManager>();
            mockContactManager.Setup(manager => manager.GetById(contactId))
                .Returns(new Contact { contactId = contactId, name = "John" });
            var controller = new ContactController(mockContactManager.Object);

            // Act
            var result = controller.GetById(contactId);

            // Assert
            var okResult = result as OkObjectResult;
            var contact = okResult?.Value as Contact;
            Microsoft.VisualStudio.TestTools.UnitTesting.Assert.IsNotNull(okResult);
            Microsoft.VisualStudio.TestTools.UnitTesting.Assert.IsNotNull(contact);
            Microsoft.VisualStudio.TestTools.UnitTesting.Assert.AreEqual(contactId, contact.contactId);
        }

        // Similar tests for other controller methods (CreateContact, UpdateContact, DeleteContact).
    }
}
