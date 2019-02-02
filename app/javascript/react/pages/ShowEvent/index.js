import React, {Component} from 'react';
import Event from './../../../models/Event';
import Countdown from './Countdown';

export default class ShowEvent extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount(){
    let { user_id, event_url } = this.props.match.params;

    Event.find(user_id, event_url).then(event => {
      this.setState({ event });
    })
  }

  formatDatetime(datetime){
    const dateFormatOptions = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    };

    const timeFormatOptions = {
      hour: '2-digit',
      minute:'2-digit'
    };

    const formattedDate = datetime.toLocaleDateString([], dateFormatOptions);
    const formattedTime = datetime.toLocaleTimeString([], timeFormatOptions);
    return `${formattedDate} – ${formattedTime}`
  }

  renderEvent(event){
    return <div>
      <h1>Countdown to {event.name}!</h1>
      <p>{event.message}</p>
      <p>{this.formatDatetime(event.endDate)}</p>
      <Countdown endDate={event.endDate} />
    </div>
  }

  render(){
    let { event } = this.state;

    let eventHTML;
    if(event){
      eventHTML = this.renderEvent(event);
    }

    return <div>
      {eventHTML}
    </div>
  }
}
