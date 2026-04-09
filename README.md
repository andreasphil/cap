<h1 align="center">
  CAP 🧢
</h1>

<p align="center">
  <strong>Almost-drop-in replacements for custom confirm, alert, and prompt dialogs</strong>
</p>

- 🪂 Dead-simple alternative to the browser's built-in dialogs
- 🌈 Promise-based and customizable
- ✨ Looks great out of the box with [@andreasphil/design-system](https://github.com/andreasphil/design-system)

## Usage

```js
import * as CAP from "cap.js";

await CAP.alert("Alert");

const didConfirm = await CAP.confirm("Are you sure?"); // -> boolean

const name = await CAP.prompt("What's your name?"); // -> string or null
```

## Development

For a demo, open [index.html](./index.html) in a browser.
