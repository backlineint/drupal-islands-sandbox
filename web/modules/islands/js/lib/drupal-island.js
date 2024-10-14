import { Island } from "@11ty/is-land";

// Assumption here is that we will eventually add Drupal specific functionality
class DrupalIsland extends Island {}

if (!customElements.get("drupal-island")) {
  customElements.define("drupal-island", DrupalIsland);
}
