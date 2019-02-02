import React, {Component} from 'react';
import Event from './../../../models/Event';
import Countdown from './Countdown';
import formatDatetime from '../../../utilities/DateFormatter';

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

  renderEvent(event){
    return <div>
      <h1>Countdown to {event.name}!</h1>
      <p>{event.message}</p>
      <p>{formatDatetime(event.endDate)}</p>
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
