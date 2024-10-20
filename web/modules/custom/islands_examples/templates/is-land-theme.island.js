import { html, render } from "https://unpkg.com/htm/preact/index.mjs?module";

// TODO - update this to the classic counter example
function App(props) {
  return html`<p><strong>Hello ${props.name}!</strong></p>`;
}

export default function (el) {
  render(html`<${App} name="from Preact" />`, el);
}
