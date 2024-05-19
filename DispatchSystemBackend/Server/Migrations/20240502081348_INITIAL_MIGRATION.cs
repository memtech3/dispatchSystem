using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace DispatchSystemBackend.Migrations
{
    /// <inheritdoc />
    public partial class INITIAL_MIGRATION : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CadEvents",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CadEvents", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CadLogEntries",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CadLogEntries", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Units",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Status = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Units", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CadEventEntityCadLogEntryEntity",
                columns: table => new
                {
                    CadEventEntriesId = table.Column<int>(type: "integer", nullable: false),
                    CadLogEntriesId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CadEventEntityCadLogEntryEntity", x => new { x.CadEventEntriesId, x.CadLogEntriesId });
                    table.ForeignKey(
                        name: "FK_CadEventEntityCadLogEntryEntity_CadEvents_CadEventEntriesId",
                        column: x => x.CadEventEntriesId,
                        principalTable: "CadEvents",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CadEventEntityCadLogEntryEntity_CadLogEntries_CadLogEntries~",
                        column: x => x.CadLogEntriesId,
                        principalTable: "CadLogEntries",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CadEventEntityUnitEntity",
                columns: table => new
                {
                    CadEventEntitiesId = table.Column<int>(type: "integer", nullable: false),
                    UnitsId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CadEventEntityUnitEntity", x => new { x.CadEventEntitiesId, x.UnitsId });
                    table.ForeignKey(
                        name: "FK_CadEventEntityUnitEntity_CadEvents_CadEventEntitiesId",
                        column: x => x.CadEventEntitiesId,
                        principalTable: "CadEvents",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CadEventEntityUnitEntity_Units_UnitsId",
                        column: x => x.UnitsId,
                        principalTable: "Units",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CadLogEntryEntityUnitEntity",
                columns: table => new
                {
                    CadLogEntriesId = table.Column<int>(type: "integer", nullable: false),
                    UnitsId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CadLogEntryEntityUnitEntity", x => new { x.CadLogEntriesId, x.UnitsId });
                    table.ForeignKey(
                        name: "FK_CadLogEntryEntityUnitEntity_CadLogEntries_CadLogEntriesId",
                        column: x => x.CadLogEntriesId,
                        principalTable: "CadLogEntries",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CadLogEntryEntityUnitEntity_Units_UnitsId",
                        column: x => x.UnitsId,
                        principalTable: "Units",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "CadEvents",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "synthesizing the alarm won't do anything, we need to back up the primary USB alarm!" },
                    { 2, "programming the monitor won't do anything, we need to program the neural HDD monitor!" },
                    { 3, "The HDD interface is down, override the optical interface so we can override the HDD interface!" },
                    { 4, "synthesizing the hard drive won't do anything, we need to calculate the back-end XML hard drive!" },
                    { 5, "You can't synthesize the sensor without indexing the wireless COM sensor!" },
                    { 6, "You can't navigate the alarm without calculating the primary EXE alarm!" },
                    { 7, "bypassing the port won't do anything, we need to generate the back-end SMTP port!" },
                    { 8, "We need to transmit the multi-byte RSS hard drive!" },
                    { 9, "The XSS hard drive is down, hack the bluetooth hard drive so we can hack the XSS hard drive!" },
                    { 10, "If we bypass the array, we can get to the TCP array through the digital TCP array!" }
                });

            migrationBuilder.InsertData(
                table: "CadLogEntries",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "synthesizing the alarm won't do anything, we need to back up the primary USB alarm!" },
                    { 2, "programming the monitor won't do anything, we need to program the neural HDD monitor!" },
                    { 3, "The HDD interface is down, override the optical interface so we can override the HDD interface!" },
                    { 4, "synthesizing the hard drive won't do anything, we need to calculate the back-end XML hard drive!" },
                    { 5, "You can't synthesize the sensor without indexing the wireless COM sensor!" },
                    { 6, "You can't navigate the alarm without calculating the primary EXE alarm!" },
                    { 7, "bypassing the port won't do anything, we need to generate the back-end SMTP port!" },
                    { 8, "We need to transmit the multi-byte RSS hard drive!" },
                    { 9, "The XSS hard drive is down, hack the bluetooth hard drive so we can hack the XSS hard drive!" },
                    { 10, "If we bypass the array, we can get to the TCP array through the digital TCP array!" }
                });

            migrationBuilder.InsertData(
                table: "Units",
                columns: new[] { "Id", "Name", "Status" },
                values: new object[,]
                {
                    { 1, "Pam Bergnaum", "Pam" },
                    { 2, "Clark Will", "Clark" },
                    { 3, "Fred Langworth", "Fred" },
                    { 4, "Harriet Doyle", "Harriet" },
                    { 5, "Angela Hoppe", "Angela" },
                    { 6, "Garry Bailey", "Garry" },
                    { 7, "Laverne Kihn", "Laverne" },
                    { 8, "Isaac Shields", "Isaac" },
                    { 9, "Nicolas Durgan", "Nicolas" },
                    { 10, "Bridget Batz", "Bridget" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_CadEventEntityCadLogEntryEntity_CadLogEntriesId",
                table: "CadEventEntityCadLogEntryEntity",
                column: "CadLogEntriesId");

            migrationBuilder.CreateIndex(
                name: "IX_CadEventEntityUnitEntity_UnitsId",
                table: "CadEventEntityUnitEntity",
                column: "UnitsId");

            migrationBuilder.CreateIndex(
                name: "IX_CadLogEntryEntityUnitEntity_UnitsId",
                table: "CadLogEntryEntityUnitEntity",
                column: "UnitsId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CadEventEntityCadLogEntryEntity");

            migrationBuilder.DropTable(
                name: "CadEventEntityUnitEntity");

            migrationBuilder.DropTable(
                name: "CadLogEntryEntityUnitEntity");

            migrationBuilder.DropTable(
                name: "CadEvents");

            migrationBuilder.DropTable(
                name: "CadLogEntries");

            migrationBuilder.DropTable(
                name: "Units");
        }
    }
}
