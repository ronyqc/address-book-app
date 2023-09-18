using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using addressbook_backend.Models;
using addressbook_backend.Interfaces.Manager;
using System.Net;
using EficazFramework.Extensions;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using addressbook_backend.Manager;
using System.Diagnostics.Contracts;

namespace addressbook_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        IContactManager _contactManager;

        public ContactController(IContactManager contactManager)
        {
            _contactManager = contactManager;
        }

        [HttpGet]
        [Route("/get-all-contacts")]
        public IActionResult GetContacts()
        {
            try
            {
                var contacts = _contactManager.GetContacts().ToList();
                return Ok(contacts);
            }
            catch (Exception ex)
            {
                return NotFound();
            }

        }

        [HttpGet()]
        [Route("/get-contact-by-id/{id}")]
        public IActionResult GetById(int id)
        {
            try
            {
                var contact = _contactManager.GetById(id);
                if (contact == null)
                {
                    return NotFound(HttpStatusCode.NotFound);
                }
                return Ok(contact);
            }
            catch (Exception ex)
            {
                return NotFound();
            }
        }

        [HttpPut()]
        [Route("/update-contact/{id}")]
        public IActionResult UpdateContact(int id, [FromBody] Contact contact)
        {
            try
            {
                if (contact == null)
                {
                    return BadRequest("Contact object is null.");
                }

                var existingContact = _contactManager.GetById(id);

                if (existingContact == null)
                {
                    return NotFound($"Contact with ID {id} not found.");
                }

                _contactManager.UpdateContact(contact);

                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPost]
        [Route("/create-contact")]
        public IActionResult CreateContact([FromBody] Contact contact)
        {
            try
            {
                if (contact == null)
                {
                    return BadRequest("Contact object is null.");
                }

                _contactManager.Add(contact);
                return CreatedAtAction("GetById", new { id = contact.contactId }, contact);
                
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpDelete()]
        [Route("/delete-contact-by-id/{id}")]
        public IActionResult DeleteContact(int id)
        {
            try
            {
                var contact = _contactManager.GetById(id);

                if (contact == null)
                {
                    return NotFound($"Contact with ID {id} not found.");
                }

                _contactManager.Delete(contact);

                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}
