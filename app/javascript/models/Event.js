class Event  {

  constructor( props ){
    const params = props.event

    this.id = params.id;
    this.name = params.name;
    this.message = params.message;
    this.endDate = new Date(params.end_date);
    this.url = params.url;
    this.userId = params.user_id;
  }

  static create(name, end_date, message, url){
    let data = { name, end_date, message, url }

    fetch('/api/v1/users/1/events', {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
  }

  static find(userId, eventUrl){
    return fetch(`/api/v1/users/${userId}/events/${eventUrl}`, {
      method: 'GET'
    }).then(res => res.json())
    .then(res => new Event(res))
    .catch(error => console.error('Error:', error));
  }

}

export default Event
