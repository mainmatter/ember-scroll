ember-scroll
==============================================================================

A sensible default implementation of scrolling for Ember apps, aiming to mimic static site behaviour.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-scroll
```


Usage
------------------------------------------------------------------------------

Once installed this addon automatically starts working. There is no need to configure anything.

On route navigation this addon will scroll to the top of the page in an accessible way, inspired by [ember-a11y-refocus](https://github.com/ember-a11y/ember-a11y-refocus). Scrolling to the top will not occur when the browser's back and forward buttons are used.

This addon also avoids the common pitfall of scrolling to the top of the page on initial render.


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

ember-scroll is developed by and &copy; [simplabs GmbH](http://simplabs.com) and contributors. It is released under the [MIT License](LICENSE).
