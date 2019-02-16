import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Flatpickr from 'react-flatpickr';
import formatDatetime from '../../../utilities/DateFormatter';
import Event from './../../../models/Event';

export default class AllEvents extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount(){
    Event.all().then(events => {
      this.setState({ events })
    })
  }

  renderEvents(events){

    return events.map(event => {


      return <Link
        key={event.id}
        to={`/users/${event.userId}/events/${event.url}`}
        className="cell medium-6 small-12"
        >
        <div className="eventCard">
          <h3>{event.name}</h3>
          <div>{formatDatetime(event.endDate)}</div>
          <div>{event.message}</div>
        </div>
      </Link>
    })
  }

  render(){
    let { events } = this.state;
    let eventsHTML;
    if(events){
      eventsHTML = this.renderEvents(events)
    }

    return <div className="blueBackground">
      <div className="page grid-x grid-margin-x grid-margin-y">
        {eventsHTML}
      </div>
    </div>
  }
}
