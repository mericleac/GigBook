using Microsoft.EntityFrameworkCore.Migrations;

namespace GigBook.Migrations
{
    public partial class UserMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Instruments_AspNetUsers_MusicianId1",
                table: "Instruments");

            migrationBuilder.RenameColumn(
                name: "MusicianId1",
                table: "Instruments",
                newName: "UserId1");

            migrationBuilder.RenameColumn(
                name: "MusicianId",
                table: "Instruments",
                newName: "UserId");

            migrationBuilder.RenameIndex(
                name: "IX_Instruments_MusicianId1",
                table: "Instruments",
                newName: "IX_Instruments_UserId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Instruments_AspNetUsers_UserId1",
                table: "Instruments",
                column: "UserId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Instruments_AspNetUsers_UserId1",
                table: "Instruments");

            migrationBuilder.RenameColumn(
                name: "UserId1",
                table: "Instruments",
                newName: "MusicianId1");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Instruments",
                newName: "MusicianId");

            migrationBuilder.RenameIndex(
                name: "IX_Instruments_UserId1",
                table: "Instruments",
                newName: "IX_Instruments_MusicianId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Instruments_AspNetUsers_MusicianId1",
                table: "Instruments",
                column: "MusicianId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
