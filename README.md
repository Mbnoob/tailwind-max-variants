# tailwind-max-variants

A handy Tailwind CSS plugin that automatically generates `max-*` responsive variants for every breakpoint defined in your Tailwind theme. Now you can effortlessly style elements based on viewport sizes *below* your breakpoints (e.g. `max-md:text-lg`) without writing custom media queries!

## Why This Plugin?

Tailwind CSS already makes responsive design a breeze with its built-in min-width variants. But sometimes you need the opposite behavior—applying styles for viewports that are smaller than a given breakpoint. This plugin creates those inverse variants for you so that you can simply write:

```html
<h1 class="text-4xl max-md:text-2xl">
  Responsive Heading
</h1>
```
# Features

- **Automatic Generation:** For every screen (breakpoint) defined in your Tailwind config, the plugin automatically creates a corresponding `max-{breakpoint}` variant.

- **Seamless Integration:** Works with all Tailwind utilities—use your favorite classes along with the new inverse variants.

- **TypeScript Support:** Written in TypeScript with clear type definitions, so you get reliable and predictable behavior when using or extending the plugin.

- **Developer Friendly:** If your Tailwind configuration isn’t set up properly (e.g. if screens are missing), you get a descriptive error message to help you debug.
## Installation

You can install the plugin via npm or yarn:

```bash
  npm install tailwind-max-variants
```
or 

```bash
  yarn add tailwind-max-variants
```
    
## Usage
After installing, add the plugin to your `tailwind.config.js` file:

```javascript
// tailwind.config.js
const maxVariantsPlugin = require('tailwind-max-variants');

module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // your theme extensions here
    },
  },
  plugins: [
    maxVariantsPlugin,
    // other plugins...
  ],
};
```

or 

By using ES6 module, 

```javascript
  import type { Config } from "tailwindcss";
  import { MaxVariantsPlugin } from 'tailwind-max-variants'

  const config: Config = {
    content: [
      "./pages/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./app/**/*.{ts,tsx}",
      "./src/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      // your theme extensions here
    },
  },
  plugins: [
    MaxVariantsPlugin,
    // other plugins...
  ],
}
```
## Demo


## 🚀 About Me
I'm a full stack developer with 3+ years of experience. currently working at [Oxbow-Intellect](https://oxbowintellect.com/).


## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/debayan-bain/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/Maharaj_bain/)
## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


## Contributing

Contributions, bug reports, and feature requests are warmly welcome! Feel free to open an issue or submit a pull request. Please follow the project's coding style and include clear, descriptive commit messages.

