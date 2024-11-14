<?php

declare(strict_types=1);

namespace Drupal\islands_examples\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Returns responses for Islands examples routes.
 */
final class IslandsExamplesController extends ControllerBase {

  /**
   * Builds the response.
   */
  public function __invoke(): array {

    $build['content'] = [
      '#theme' => 'island_overview'
    ];

    return $build;
  }

  public function vue(): array {
    $build['content'] = [
      '#theme' => 'island_vue_theme'
    ];

    return $build;
  }

  public function WebComponents(): array {
    $build['content'] = [
      '#theme' => 'island_web_components'
    ];

    return $build;
  }

}
