class Event  {

  constructor( props ){

  }

  static create(name, end_date, message, url){
    let data = { name, end_date, message, url }

    fetch('/api/v1/users/1/events', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));



    // return Fetcher.post('/api/v1/events', {
    //   name: name,
    //   datetime: datetime.getTime(),
    //   location_id: location.id
    // }).then( eventJson => new Event(eventJson) );
  }

}

export default Event
