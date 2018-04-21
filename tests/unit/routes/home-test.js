import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit, currentURL } from '@ember/test-helpers';

module('Unit | Route | home', function(hooks) {
  setupApplicationTest(hooks);

  module('Acceptance | list rentals', function (hooks) {
    setupApplicationTest(hooks);

    test('should show rentals as the home page', async function (assert) {
      await visit('/');
      assert.equal(currentURL(), '/rentals', 'should redirect automatically');
    });
  });

})
