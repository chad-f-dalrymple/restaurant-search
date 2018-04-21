import Route from '@ember/routing/route';

export default Route.extend({
  model() {
  return [{
    type: 'location',
    id: 'San Francisco',
    city: 'San Francisco',
    image: 'assets/img/city_skylines/picture_sf.jpg'
  }, {
    type: 'location',
    id: 'Chicago',
    city: 'Chicago',
    image: 'assets/img/city_skylines/picture_chicago.jpg'
  }, {
    type: 'location',
    id: 'New York City',
    city: 'New York City',
    image: 'assets/img/city_skylines/picture_nyc.jpg'
  },{
    type: 'location',
    id: 'Portland',
    city: 'Portland',
    image: 'assets/img/city_skylines/picture_portland.jpg'
  },{
    type: 'location',
    id: 'Austin',
    city: 'Austin',
    image: 'assets/img/city_skylines/picture_austin.jpg'
  },{
    type: 'location',
    id: 'Los Angeles',
    city: 'Los Angeles',
    image: 'assets/img/city_skylines/picture_LA.jpg'
  },{
    type: 'location',
    id: 'Boston',
    city: 'Boston',
    image: 'assets/img/city_skylines/picture_boston.jpg'
  }];
  }
});
