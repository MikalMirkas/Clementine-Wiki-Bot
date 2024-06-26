# Phantasy Star Universe Clementine Wiki Bot
Simple wiki bot to automate content changes.

## Features
- Scans a folder for weapon files and sends that data to the wiki.
- Moves files that have been processed into a new folder.

## Setup
The project looks for several files during runtime. Failure to provide proper data for any of the searched fields will result in process termination.
- Firstly, it looks in `./data/pending` for **all files** directly within it. It will throw an exception if any file within isn't parsable by JSON5 or if the directory is missing.
  - It will move any files that the API returns a 200 from into `./data/done`.
- Secondly, it looks for three environment variables during runtime.
  - WIKI_ENDPOINT, the path to the [MediaWiki API](https://psu-clementine.net/wiki/api.php).
  - WIKI_USERNAME, the bot username used to authenticate.
  - WIKI_PASSWORD, the [bot password](https://psu-clementine.net/wiki/index.php/Special:BotPasswords) used to authenticate.

## Considerations
This project currently has a dependency which uses a [vulnerable (CWE-352)](https://github.com/advisories/GHSA-wf5p-g6vw-rhxx) version of axios.
