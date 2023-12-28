# dispatchSystem

An attempt at developing an open source computer aided dispatch system, currently just for funsies. I'd love to build something that could actually be useful but I recognize that I have limited time and experience so we'll see where this goes...

# Tech
- Vue3
- Tailwind CSS with many snippets from the Flowbite documentation
- Storybook
- Supabase (for backend, may change when I start backend work, I'll start backend work after I get a good 'nuff UI together)

# Supabase CLI Unable To Access Port on Windows?
Open command prompt as administrator and run the following commands to restart the Windows Host Networking Service: <br>
`net stop hns` <br>
`net start hns` <br>
Sources: <br>
https://stackoverflow.com/questions/10461257/an-attempt-was-made-to-access-a-socket-in-a-way-forbidden-by-its-access-permissi <br>
https://github.com/supabase/cli/issues/1010