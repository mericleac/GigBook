using Microsoft.EntityFrameworkCore.Migrations;

namespace GigBook.Migrations
{
    public partial class SecondMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Musicians_MusicianId1",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Users_MusicianId1",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "MusicianId1",
                table: "Users");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "MusicianId1",
                table: "Users",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Users_MusicianId1",
                table: "Users",
                column: "MusicianId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Musicians_MusicianId1",
                table: "Users",
                column: "MusicianId1",
                principalTable: "Musicians",
                principalColumn: "MusicianId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
