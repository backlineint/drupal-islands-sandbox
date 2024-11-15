## Introduction

The Islands module provides an implementation of [Islands Architecture](https://www.patterns.dev/vanilla/islands-architecture/) for Drupal. Islands Architecture was popularized by meta-frameworks [Astro](https://docs.astro.build/en/concepts/islands/) and [11ty](https://www.11ty.dev/docs/plugins/is-land/).

Using the provided `<drupal-island>` element in twig templates, developers will be able to:

- Load JavaScript modules based on various conditions, including visibility, an idle callback, user interaction, and more.
- Hydrate client-side components using a variety of frameworks (Preact, Vue, Svelte, Web Components), with or without bundling.
- Provide server rendered fallback content prior to hydrating an island as interactive.
- Easily reference JavaScript modules using [import maps](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap).

**This module is currently experimental** and there will almost certainly be breaking changes to the API in an upcoming release. For example, when Drupal supports [import maps in core](https://www.drupal.org/project/drupal/issues/3398525) this module will adopt the core approach to import maps.

## Requirements

The `<drupal-island>` element currently extends [@11ty/is-land](https://github.com/11ty/is-land), although this may change in a future version of this module.

## Installation

Install as you would normally install a contributed Drupal module.
See: https://www.drupal.org/node/895232 for further information.

## Usage

Enabling the submodule `Islands Examples` will provide examples of how to use the `<drupal-island>` element in twig templates. Examples can be seen at the path `/islands-examples`

The `<drupal-islands>` element currently matches [the API of @11ty/is-land](https://github.com/11ty/is-land/blob/main/README.md), which it extends. The following is a brief overview of some options:

### Directives

The `on` directive is used to specify when an island should be hydrated. The following are some examples of how to use the `on` directive with a custom element:

`on:visible`

```
<drupal-island on:visible>
  <example-component>This component will load when visible</example-component>
</drupal-island>
```

`on:interaction`

```
<drupal-island on:interaction>
  This component will only load on interaction, but replaces this pre-js markup.
  <template data-island="replace">
    <example-component>This is an example component</example-component>
  </template>
</drupal-island>
```

### Framework Components

Islands can also load framework components. Files in the template directory of a module or theme ending with .islands.js will be included in an import map. You can import the related module by referencing a key with the format module_or_theme_name/filename.

Twig template:

```
<drupal-island on:visible
  autoinit="preact"
  import="islands_examples/preact-component.island.js"
  >
</drupal-island>
```

preact-component.island.js:

```
import { html, render } from "https://unpkg.com/htm/preact/index.mjs?module";
import { useState } from "https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevState) => prevState + 1);
  };
  const decrement = () => {
    setCount((prevState) => prevState - 1);
  };

  return html`
    <span>Preact Counter: </span>
    <button onClick=${increment}>⬆️</button>
    <span> ${count} </span>
    <button onClick=${decrement}>⬇️</button>
  `;
}

export default function (el) {
  render(html`<${App} />`, el);
}
```

Or components using frameworks like Vue can optionally be defined directly in your twig template.

```
<drupal-island
  on:visible autoinit="petite-vue"
  import="https://unpkg.com/petite-vue@0.4.1/dist/petite-vue.es.js"
  v-scope="{ count: 0 }">
	Petite Vue
	<template data-island>
		<button @click="count++">⬆️</button>
		<button @click="count--">⬇️</button>
		<span v-html="count">0</span>
	</template>
</drupal-island>
```

## Maintainers

Current maintainers:

- Brian Perry (brianperry) - https://www.drupal.org/u/brianperry
- I'm always looking for new friends.
