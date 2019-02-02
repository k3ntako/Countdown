class Event  {

  constructor( props ){
    console.log(props);
    // const params = props.event

    this.id = props.id;
    this.name = props.name;
    this.message = props.message;
    this.endDate = new Date(props.end_date);
    this.url = props.url;
    this.userId = props.user_id;
  }

  static all(){
    return fetch('/api/v1/events/all', {
      method: 'GET'
    }).then(res => res.json())
    .then(res => res.events.map(event => new Event(event)))
    .catch(error => console.error('Error:', error));
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
    .then(res => new Event(res.event))
    .catch(error => console.error('Error:', error));
  }

}

export default Event
