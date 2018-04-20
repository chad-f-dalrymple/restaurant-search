import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({

  name(i) {
    return `Restaurant ${i}`;
  },

  location: 'Boston',

  description: 'this is a description',

  avatar() {
    return faker.internet.avatar();
  }

});
