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


oneliner (DO NOT USE IN PRODUCTION, THIS DESTROYS THE DATABASE AND ANY PAST MIGRATIONS)
`dotnet ef database drop && rm -rf Migrations/ && dotnet ef migrations add INITIAL_MIGRATION && dotnet ef database update`