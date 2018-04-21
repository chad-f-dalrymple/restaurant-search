import Route from '@ember/routing/route';

export default Route.extend({
  model() {
  return [{
    type: 'location',
    id: 'San Francisco',
    city: 'San Francisco',
  }, {
    type: 'location',
    id: 'Chicago',
    city: 'Chicago',
  }, {
    type: 'location',
    id: 'Boston',
    city: 'Boston',
  }];
  }
});
