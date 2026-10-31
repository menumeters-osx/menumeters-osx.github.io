# menumeters-osx.github.io

The website of [MenuMeters](https://github.com/menumeters-osx/MenuMeters),
published with GitHub Pages from `main`. It is plain HTML and CSS with no build
step: edit the files and push.

| Path | Contents |
| --- | --- |
| `index.html` | The whole site |
| `assets/css/site.css` | Styles, light and dark |
| `assets/js/site.js` | The menu bar clock |
| `assets/fonts/` | Archivo and Source Serif 4, self-hosted, with their OFL licenses |
| `assets/img/meters/` | Meters rendered by MenuMeters at 6x, light and dark |
| `assets/img/shots/` | Menus and preferences captured from MenuMeters |

## For each release

- Update the version in `index.html`: the download button and the
  `softwareVersion` in the JSON-LD block.
- The download button links to
  `releases/latest/download/MenuMeters-latest.dmg`, so attach that file to
  every GitHub release alongside the versioned one.
