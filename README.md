<h1 align="center">
  CAP 🧢
</h1>

<p align="center">
  <strong>Almost-drop-in replacements for custom confirm, alert, and prompt dialogs</strong>
</p>

- 🪂 Dead-simple alternative to the browser's built-in dialogs
- 🌈 Promise-based and customizable
- ✨ Looks great out of the box with [@andreasphil/design-system](https://github.com/andreasphil/design-system)

## Installation

From a CDN:

```js
import * as CAP from "https://esm.sh/gh/andreasphil/cap@<tag>";
```

With a package manager:

```sh
npm i github:andreasphil/cap#<tag>
```

## Usage

```js
import * as CAP from "@andreasphil/cap";

await CAP.alert("Alert");

const didConfirm = await CAP.confirm("Are you sure?"); // -> boolean

const name = await CAP.prompt("What's your name?"); // -> string or null
```

## Development

Packages are managed by [pnpm](https://pnpm.io). The following commands are available:

```sh
node --run build        # Typecheck and emit declarations
```

For a demo, open [index.html](./index.html) in a browser.

## Credits

This library uses a number of open source packages listed in [package.json](./package.json).

Thanks 🙏
