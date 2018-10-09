using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GigBook.Migrations
{
    public partial class GigMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Gigs",
                columns: table => new
                {
                    GigId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Address = table.Column<string>(nullable: false),
                    StartTime = table.Column<DateTime>(nullable: false),
                    Length = table.Column<int>(nullable: false),
                    Amount = table.Column<float>(nullable: false),
                    MusicianConfirm = table.Column<bool>(nullable: false),
                    UserConfirm = table.Column<bool>(nullable: false),
                    Transaction = table.Column<bool>(nullable: false),
                    CreatedAt = table.Column<DateTime>(nullable: false),
                    UpdatedAt = table.Column<DateTime>(nullable: false),
                    UserId = table.Column<int>(nullable: false),
                    UserId1 = table.Column<string>(nullable: true),
                    MusicianId = table.Column<int>(nullable: false),
                    MusicianId1 = table.Column<string>(nullable: true),
                    ReviewId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Gigs", x => x.GigId);
                    table.ForeignKey(
                        name: "FK_Gigs_AspNetUsers_MusicianId1",
                        column: x => x.MusicianId1,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Gigs_AspNetUsers_UserId1",
                        column: x => x.UserId1,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Gigs_MusicianId1",
                table: "Gigs",
                column: "MusicianId1");

            migrationBuilder.CreateIndex(
                name: "IX_Gigs_UserId1",
                table: "Gigs",
                column: "UserId1");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Gigs");
        }
    }
}
