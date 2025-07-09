# Phantasy Star Universe Clementine Wiki Bot
Simple wiki bot to automate content changes.

## Features
- Scans a folder for item files and sends that data to the wiki through pfautoedit.
- Moves files that have been processed into its respective folder.

### Item Types Supported
- [x] Weapons
- [ ] Line Shields
- [ ] Consumables
- [ ] Photon Art Discs
- [ ] Materials
- [ ] Units
- [ ] Clothes / Parts
- [ ] Decorations / Music / Tickets
- [ ] Boards
- [ ] Partner Machine Devices
- [ ] Grinders
- [ ] Boosts
- [ ] Events

## Setup
The project scans for several files during runtime. Failure to provide expected data for any of the searches will result in exceptions being thrown.
- Firstly, it looks in several folders for **all files** directly within them. Of note: the program will move any file that the MediaWiki API returns a 200 from into a matching subfolder within `./data/done`, overwriting existing files if they are present (requires testing). The scanned directories are as follows:
  - `./data/pending/items`
- Secondly, it looks for three environment variables during runtime. Failure to connect to the MediaWiki API will result in exceptions being thrown.
  - WIKI_ENDPOINT, the path to the [MediaWiki API](https://psu-clementine.com/wiki/api.php).
  - WIKI_USERNAME, the bot username used to authenticate.
  - WIKI_PASSWORD, the [bot password](https://psu-clementine.com/wiki/index.php/Special:BotPasswords) used to authenticate.
