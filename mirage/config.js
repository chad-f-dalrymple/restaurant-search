export default function() {
    this.namespace = '/api/restaurants';

    this.get('/authors', (schema, request) => {
      return schema.authors.all();
    });
  }