using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace addressbook_backend.Data.Migrations
{
    /// <inheritdoc />
    public partial class FirstMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Contacts",
                columns: table => new
                {
                    contactId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    lastName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    address = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: false),
                    cellPhone = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    age = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Contacts", x => x.contactId);
                });

            migrationBuilder.InsertData(
                table: "Contacts",
                columns: new[] { "contactId", "address", "age", "cellPhone", "lastName", "name" },
                values: new object[,]
                {
                    { 1, "Address: 1", 21, "Cellphone: 9123456", "Last Name: 1", "Contact Name: 1" },
                    { 2, "Address: 2", 22, "Cellphone: 9234567", "Last Name: 2", "Contact Name: 2" },
                    { 3, "Address: 3", 23, "Cellphone: 9345678", "Last Name: 3", "Contact Name: 3" },
                    { 4, "Address: 4", 24, "Cellphone: 9456789", "Last Name: 4", "Contact Name: 4" },
                    { 5, "Address: 5", 25, "Cellphone: 95678910", "Last Name: 5", "Contact Name: 5" },
                    { 6, "Address: 6", 26, "Cellphone: 967891011", "Last Name: 6", "Contact Name: 6" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Contacts");
        }
    }
}
