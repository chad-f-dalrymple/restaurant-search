export default function() {
  this.namespace = '/api';

  this.get('/home', function() {
    return {
      data: [{
        type: 'location',
        id: 'San Francisco',
        attributes: {
          city: 'San Francisco',
          }
      }, {
        type: 'location',
        id: 'Chicago',
        attributes: {
          city: 'Chicago',
          }
      }, {
        type: 'location',
        id: 'Boston',
        attributes: {
          city: 'Boston',
          }
      }]
    };
  });
}