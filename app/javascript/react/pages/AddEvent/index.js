import React, {Component} from 'react';
import Flatpickr from 'react-flatpickr';
import Event from './../../../models/Event';

export default class AddEvent extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      endDate: new Date(),
      message: "",
      url: "",
      error: false
    }
    this.addEvent = this.addEvent.bind(this);
  }

  handleChange(type, event){
    let value = event.target.value;

    if(type === "url" && "/\\?.!@#$%^&*(),:;'\"{}[]+= ".includes(value[value.length - 1])){
      return this.setState({ error: true })
    }

    this.setState({
      [type]: value,
      error: false
    })
  }

  handleDateChange(endDate){
    this.setState({ endDate })
  }

  addEvent(event){
    event.preventDefault();
    let { name, endDate, message, url } = this.state;
    Event.create(name, endDate, message, url)
      .then( response => {
        this.props.history.push("/")
      });
  }

  render(){
    let error;
    if(this.state.error){
      error = <p className="errorMessage">Special characters are not allowed in the url.</p>
    }

    return <div className="blueBackground">
      <div className="page">
        <div className="newForm">
          <h2>Add New Countdown</h2>
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
            {error}
            <input type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    </div>
  }
}
