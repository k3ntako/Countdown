class Event  {

  constructor( props ){
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

    return fetch('/api/v1/users/1/events', {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error));
  }

  static find(eventUrl, userId = null){
    let link = `/api/v1/events/${eventUrl}`;

    if(userId){
      link = `/api/v1/users/${userId}/events/${eventUrl}`;
    }
    
    return fetch(link, {
      method: 'GET'
    }).then(res => res.json())
    .then(res => new Event(res.event))
    .catch(error => console.error('Error:', error));
  }

}

export default Event
