using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace addressbook_backend.Models
{
    public class Contact
    {
        [Key]
        public int contactId { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        [MaxLength(100)]
        public string name { get; set; } = string.Empty;

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        [MaxLength(100)]
        public string lastName { get; set; } = string.Empty;

        [Required]
        [Column(TypeName = "nvarchar(500)")]
        [MaxLength(500)]
        public string address { get; set; } = string.Empty;

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        [MaxLength(100)]
        public string cellPhone { get; set; } = string.Empty;

        [Column(TypeName = "int")]
        public int age { get; set; } = 0;
    }
}
