import { Template } from '../models';

export const phpStarter: Template = {
  title: 'PHP Starter',
  thumbnail: 'assets/templates/php.svg',
  language: 'php',
  markup: {
    language: 'html',
    content: `
<div id="root">
  <h1>Hello, <span id="title">world</span>!</h1>
  <img src="{{ __localpen_baseUrl__ }}assets/templates/php.svg" class="logo" />
  <p>You clicked <span id="counter">0</span> times.</p>
  <button id="counter-button">Click me</button>
</div>
`.trimStart(),
  },
  style: {
    language: 'css',
    content: `
#root,
#root button {
  text-align: center;
  font: 1em sans-serif;
}
.logo {
  width: 150px;
}
`.trimStart(),
  },
  script: {
    language: 'php',
    content: `
<?php
$title = 'PHP';
$document->getElementById('title')->textContent = $title;

$count = 0;

$document
  ->getElementById('counter-button')
  ->addEventListener('click', function () use (&$count, $document) {
      $count += 1;
      $document->getElementById('counter')->textContent = $count;
      echo "count: $count";
  });
`.trimStart(),
  },
  stylesheets: [],
  scripts: [],
  cssPreset: '',
  modules: [],
};
