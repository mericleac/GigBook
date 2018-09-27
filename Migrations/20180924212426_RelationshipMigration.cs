using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GigBook.Migrations
{
    public partial class RelationshipMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Gigs_Musicians_MusicianId",
                table: "Gigs");

            migrationBuilder.DropForeignKey(
                name: "FK_Instruments_Musicians_MusicianId",
                table: "Instruments");

            migrationBuilder.DropForeignKey(
                name: "FK_PMs_Musicians_MusicianId",
                table: "PMs");

            migrationBuilder.DropForeignKey(
                name: "FK_Reviews_Musicians_MusicianId",
                table: "Reviews");

            migrationBuilder.DropTable(
                name: "Musicians");

            migrationBuilder.DropIndex(
                name: "IX_Reviews_MusicianId",
                table: "Reviews");

            migrationBuilder.DropIndex(
                name: "IX_PMs_MusicianId",
                table: "PMs");

            migrationBuilder.DropIndex(
                name: "IX_Instruments_MusicianId",
                table: "Instruments");

            migrationBuilder.DropIndex(
                name: "IX_Gigs_MusicianId",
                table: "Gigs");

            migrationBuilder.DropColumn(
                name: "MusicianId",
                table: "AspNetUsers");

            migrationBuilder.AddColumn<string>(
                name: "MusicianId1",
                table: "Reviews",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MusicianId1",
                table: "PMs",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MusicianId1",
                table: "Instruments",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MusicianId1",
                table: "Gigs",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ImageUrl",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Location",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MusicianName",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Summary",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Reviews_MusicianId1",
                table: "Reviews",
                column: "MusicianId1");

            migrationBuilder.CreateIndex(
                name: "IX_PMs_MusicianId1",
                table: "PMs",
                column: "MusicianId1");

            migrationBuilder.CreateIndex(
                name: "IX_Instruments_MusicianId1",
                table: "Instruments",
                column: "MusicianId1");

            migrationBuilder.CreateIndex(
                name: "IX_Gigs_MusicianId1",
                table: "Gigs",
                column: "MusicianId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Gigs_AspNetUsers_MusicianId1",
                table: "Gigs",
                column: "MusicianId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Instruments_AspNetUsers_MusicianId1",
                table: "Instruments",
                column: "MusicianId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_PMs_AspNetUsers_MusicianId1",
                table: "PMs",
                column: "MusicianId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Reviews_AspNetUsers_MusicianId1",
                table: "Reviews",
                column: "MusicianId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Gigs_AspNetUsers_MusicianId1",
                table: "Gigs");

            migrationBuilder.DropForeignKey(
                name: "FK_Instruments_AspNetUsers_MusicianId1",
                table: "Instruments");

            migrationBuilder.DropForeignKey(
                name: "FK_PMs_AspNetUsers_MusicianId1",
                table: "PMs");

            migrationBuilder.DropForeignKey(
                name: "FK_Reviews_AspNetUsers_MusicianId1",
                table: "Reviews");

            migrationBuilder.DropIndex(
                name: "IX_Reviews_MusicianId1",
                table: "Reviews");

            migrationBuilder.DropIndex(
                name: "IX_PMs_MusicianId1",
                table: "PMs");

            migrationBuilder.DropIndex(
                name: "IX_Instruments_MusicianId1",
                table: "Instruments");

            migrationBuilder.DropIndex(
                name: "IX_Gigs_MusicianId1",
                table: "Gigs");

            migrationBuilder.DropColumn(
                name: "MusicianId1",
                table: "Reviews");

            migrationBuilder.DropColumn(
                name: "MusicianId1",
                table: "PMs");

            migrationBuilder.DropColumn(
                name: "MusicianId1",
                table: "Instruments");

            migrationBuilder.DropColumn(
                name: "MusicianId1",
                table: "Gigs");

            migrationBuilder.DropColumn(
                name: "ImageUrl",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Location",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "MusicianName",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Summary",
                table: "AspNetUsers");

            migrationBuilder.AddColumn<int>(
                name: "MusicianId",
                table: "AspNetUsers",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Musicians",
                columns: table => new
                {
                    MusicianId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    CreatedAt = table.Column<DateTime>(nullable: false),
                    ImageUrl = table.Column<string>(nullable: true),
                    Location = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: false),
                    Summary = table.Column<string>(nullable: true),
                    UpdatedAt = table.Column<DateTime>(nullable: false),
                    UserId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Musicians", x => x.MusicianId);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Reviews_MusicianId",
                table: "Reviews",
                column: "MusicianId");

            migrationBuilder.CreateIndex(
                name: "IX_PMs_MusicianId",
                table: "PMs",
                column: "MusicianId");

            migrationBuilder.CreateIndex(
                name: "IX_Instruments_MusicianId",
                table: "Instruments",
                column: "MusicianId");

            migrationBuilder.CreateIndex(
                name: "IX_Gigs_MusicianId",
                table: "Gigs",
                column: "MusicianId");

            migrationBuilder.AddForeignKey(
                name: "FK_Gigs_Musicians_MusicianId",
                table: "Gigs",
                column: "MusicianId",
                principalTable: "Musicians",
                principalColumn: "MusicianId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Instruments_Musicians_MusicianId",
                table: "Instruments",
                column: "MusicianId",
                principalTable: "Musicians",
                principalColumn: "MusicianId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_PMs_Musicians_MusicianId",
                table: "PMs",
                column: "MusicianId",
                principalTable: "Musicians",
                principalColumn: "MusicianId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Reviews_Musicians_MusicianId",
                table: "Reviews",
                column: "MusicianId",
                principalTable: "Musicians",
                principalColumn: "MusicianId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
