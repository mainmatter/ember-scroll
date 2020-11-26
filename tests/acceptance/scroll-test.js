import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | scroll', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/');

    // should not be inserted on initial render
    assert.dom('.ember-scroll-navigation-message', document).doesNotExist();

    await click('a');
    assert.equal(currentURL(), '/post');

    assert.dom('.ember-scroll-navigation-message', document).exists();

    // check if we're the first element in the rootElement
    assert.dom('#ember-testing > *:first-child', document).hasClass('ember-scroll-navigation-message');

    assert.dom('.ember-scroll-navigation-message', document).isFocused();
    assert.dom('.ember-scroll-navigation-message', document).hasText('The page navigation is complete. You may now navigate the page content as you wish.');

    assert.dom('.ember-scroll-navigation-message', document).hasAttribute('role', 'text');
    assert.dom('.ember-scroll-navigation-message', document).hasAttribute('tabindex', '-1');
    assert.dom('.ember-scroll-navigation-message', document).hasStyle({
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: '0px',
      overflow: 'hidden',
      clip: 'rect(0px, 0px, 0px, 0px)',
      whiteSpace: 'nowrap',
      border: '0px none rgb(0, 0, 0)'
    });
  });
});
