// Swaps <link rel="preload" as="style"> tags to rel="stylesheet" once loaded.
// Runs inline (no defer/async) right after the two preload <link> tags in
// <head>, so it executes before those stylesheets finish downloading.
// This replaces the inline onload="this.onload=null;this.rel='stylesheet'"
// attribute pattern so the site can run without 'unsafe-inline' in
// script-src (see vercel.json Content-Security-Policy).
(function () {
  'use strict';
  var links = document.querySelectorAll('link[rel="preload"][as="style"]');
  links.forEach(function (link) {
    link.addEventListener('load', function onLoad() {
      link.removeEventListener('load', onLoad);
      link.rel = 'stylesheet';
    });
    // Fallback: if the resource is already cached and 'load' already fired
    // before the listener was attached, sheet will still be non-null once
    // applied; a short check covers that edge case.
    if (link.sheet) {
      link.rel = 'stylesheet';
    }
  });
})();
