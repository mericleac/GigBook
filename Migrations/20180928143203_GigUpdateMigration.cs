using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GigBook.Migrations
{
    public partial class GigUpdateMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Gigs_AspNetUsers_MusicianId1",
                table: "Gigs");

            migrationBuilder.DropForeignKey(
                name: "FK_Gigs_AspNetUsers_UserId1",
                table: "Gigs");

            migrationBuilder.DropIndex(
                name: "IX_Gigs_MusicianId1",
                table: "Gigs");

            migrationBuilder.DropIndex(
                name: "IX_Gigs_UserId1",
                table: "Gigs");

            migrationBuilder.DropColumn(
                name: "Length",
                table: "Gigs");

            migrationBuilder.DropColumn(
                name: "MusicianId1",
                table: "Gigs");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "Gigs");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Gigs",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<string>(
                name: "MusicianId",
                table: "Gigs",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddColumn<DateTime>(
                name: "EndTime",
                table: "Gigs",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.CreateIndex(
                name: "IX_Gigs_MusicianId",
                table: "Gigs",
                column: "MusicianId");

            migrationBuilder.CreateIndex(
                name: "IX_Gigs_UserId",
                table: "Gigs",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Gigs_AspNetUsers_MusicianId",
                table: "Gigs",
                column: "MusicianId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Gigs_AspNetUsers_UserId",
                table: "Gigs",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Gigs_AspNetUsers_MusicianId",
                table: "Gigs");

            migrationBuilder.DropForeignKey(
                name: "FK_Gigs_AspNetUsers_UserId",
                table: "Gigs");

            migrationBuilder.DropIndex(
                name: "IX_Gigs_MusicianId",
                table: "Gigs");

            migrationBuilder.DropIndex(
                name: "IX_Gigs_UserId",
                table: "Gigs");

            migrationBuilder.DropColumn(
                name: "EndTime",
                table: "Gigs");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Gigs",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "MusicianId",
                table: "Gigs",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Length",
                table: "Gigs",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "MusicianId1",
                table: "Gigs",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId1",
                table: "Gigs",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Gigs_MusicianId1",
                table: "Gigs",
                column: "MusicianId1");

            migrationBuilder.CreateIndex(
                name: "IX_Gigs_UserId1",
                table: "Gigs",
                column: "UserId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Gigs_AspNetUsers_MusicianId1",
                table: "Gigs",
                column: "MusicianId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Gigs_AspNetUsers_UserId1",
                table: "Gigs",
                column: "UserId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
