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
