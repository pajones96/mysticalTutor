# mysticalTutor
A progressive web application that uses Scryfall's API to display Magic cards

## Mystical Tutor

This is a progressive web application (for real, it includes a manifest.json and service worker file and everything) designed to use [Scryfall's](https://scryfall.com/) API.
I'm not endorsed by Scryfall, of course, and this is meant to mostly be a fun little personal project.

Ingredients include: Node.js, Javascript, HTML 5, CSS, Bootstrap, Workbox, Scryfall API (a RESTful API that I think is pretty neat), Saeris' implementation of the Beleren Font (cited below), Magic: the Gathering
I'm using VSCode to write it, NPM to yoink necessary packages, and a lightweight development server package

Planned changes include

- Better looking, more responsive layout
- Implementation of [Andrew Gioia's MTG mana symbol pictographic font thingy](https://github.com/andrewgioia/mana)
- Implementation of a limited search function (less robust than Scryfall's because I am just one human being and there are only so many hours in the day)
- Perhaps a search history?
- Find a replacement for Workbox if possible, mostly 'cause the general design of it and how it generates service worker files gives me the heebie-jeebies

But past that, I dunno. We'll see!
Help and suggestions are appreciated. 

Many thanks to Scryfall for their fantastic API and website.
Thanks to [@Saeris](https://github.com/Saeris/typeface-beleren-bold), and I guess also Wizards of the Coast, for the Beleren Font.
Bootstrap has also been useful!
I used Google's Workbox thing, too. 

Uhhh yeah... that's it.
