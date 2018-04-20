import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
  keyForAttribute(attr) {
    return dasherize(attr);
  },

  keyForRelationship(attr) {
    return dasherize(attr);
  },
});
