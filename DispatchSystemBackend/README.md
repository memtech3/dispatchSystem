# Useful Info
asp.net 8, hot chocolate 13, postgresql

# Useful Commands
Install project dependencies and tools:

`dotnet restore`

`dotnet tool restore`


EF core commands:

Drop db (destroy everything):
`dotnet ef database drop`

Make a new migration:
`dotnet ef migrations add MIGRATION_NAME_HERE`

Apply the migration:
`dotnet ef database update`
