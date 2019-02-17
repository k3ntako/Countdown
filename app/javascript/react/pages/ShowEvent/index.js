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
    let { userId, eventUrl } = this.props.match.params;

    Event.find(eventUrl, userId).then(event => {
      this.setState({ event });
    })

  }

  renderEvent(event){
    let message;
    if(event.message){
      message = <div className="message">{event.message}</div>
    }

    return <div className="event">
      <div className="head">
        <h1>Countdown to {event.name}!</h1>
        <p>{formatDatetime(event.endDate)}</p>
      </div>
      <div className="bottom">
        <Countdown endDate={event.endDate} />
        {message}
      </div>
    </div>
  }

  render(){
    let { event } = this.state;

    let eventHTML;
    if(!event){
      return <div></div>
    }

    return this.renderEvent(event);
  }
}
