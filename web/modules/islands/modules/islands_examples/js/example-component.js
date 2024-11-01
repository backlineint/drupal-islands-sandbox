// Programmatic usage
// import { ready } from "/is-land.js";

class ExampleComponent extends HTMLElement {
  async connectedCallback() {
    // Programmatic API: waiting to lazy load
    // await ready(this);

    // ready to go
    this.classList.add("connected");
  }
}

if ("customElements" in window && !customElements.get("example-component")) {
  customElements.define("example-component", ExampleComponent);
}
