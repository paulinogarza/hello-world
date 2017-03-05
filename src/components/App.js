import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { addReminder, deleteReminder } from '../actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import SignUpSearch from  './SignUpSearch';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      dueDate: ''
    }
  }

  addReminder() {
    this.props.addReminder(this.state.text);
  }

  deleteReminder (id) {
    this.props.deleteReminder(id);
  }

  renderReminders() {
    const { reminders } = this.props; //this.props.reminders
    return (
      <ul className="list-group col-sm-4">
        {
          reminders.map((reminder) => {
            return (
              <li key={reminder.id} className="list-group-item">
                <div className="list-item delete-button">{reminder.text}</div>
                <div
                  className="list-item delete-cursor "
                  onClick={() => this.deleteReminder(reminder.id)}
                  >
                    &#x2715;
                  </div>
                </li>
              );
            })
          }
        </ul>
      );
    }

    render() {
      //console.log('this.props', this.props);
      return (
        <div className="App">
          <div className="title">
            Reminder Pro
          </div>
          <div className="form-inline reminder-form">
            <div className="form-group">
              <input
                className="form-control"
                placeholder="I have to.."
                onChange={event => this.setState({text: event.target.value})}
                onKeyPress={event => {
                  if (event.key === 'Enter') {
                    this.addReminder();
                  }
                }}
              />
              <input
                className="form-control"
                type="datetime-local"
                onChange={event => this.setState({dueDate: event.target.value})}
              />
            </div>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => this.addReminder()}
              >
                Add Reminder
              </button>
              {this.renderReminders()}
            </div>
            <MuiThemeProvider>
              <SignUpSearch />
            </MuiThemeProvider>

          </div>
        )
      }
    }

    /*function mapDispatchToProps(dispatch ) {
    return bindActionCreators({addReminder}, dispatch);
  }*/

  function mapStateToProps(state) {
    return {
      reminders: state
    }
  }

  export default connect(mapStateToProps, { addReminder, deleteReminder })(App);
