import React, {Component} from 'react';
import Flatpickr from 'react-flatpickr';
import Event from './../../models/Event'
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      endDate: new Date(),
      message: "",
      url: ""
    }
    this.addEvent = this.addEvent.bind(this);
  }

  handleChange(type, event){
    this.setState({ [type]: event.target.value })
  }

  handleDateChange(endDate){
    this.setState({ endDate })
  }

  addEvent(event){
    event.preventDefault();
    let { name, endDate, message, url } = this.state;
    Event.create(name, endDate, message, url);
  }

  render(){
    return <div>
      <div>Countdown</div>
      <form onSubmit={this.addEvent}>
        <label htmlFor="event">Name of Event</label>
        <input type="text" name="event" value={this.state.name} onChange={this.handleChange.bind(this, "name")}/>

        <label htmlFor="Message">Message</label>
        <input type="text" name="Message" value={this.state.message} onChange={this.handleChange.bind(this, "message")}/>

        <label>End Date</label>
        <Flatpickr
          data-enable-time
          value={this.state.date}
          onChange={this.handleDateChange.bind(this)}
          options={{
            enableTime: true,
            dateFormat: "M. j, Y  h:i K",
            minDate: "Jan. 1, 2000 00:00 AM",
          }}
        />

        <label htmlFor="url">URL</label>
        <input type="text" name="url" value={this.state.url} onChange={this.handleChange.bind(this, "url")}/>

        <input type="submit" value="Submit"/>
      </form>
    </div>
  }
}
