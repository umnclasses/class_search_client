import React from 'react/addons';
import MeetingTime from './MeetingTime';

class MeetingPattern extends React.Component {

  /*
   * @method shouldComponentUpdate
   * @returns {Boolean}
   */
  shouldComponentUpdate () {
    return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
  }

  getFormattedDays() {
    var days = this.props.meetingPattern.days.map(function(day) {
        return day.abbreviation.toUpperCase();
    });

    return days.join(" ") + " ";
  }

  getMeetingTime() {
    if (this.props.meetingPattern.start_time != null && this.props.meetingPattern.end_time != null) {
      return (
        <MeetingTime
          startTime={this.props.meetingPattern.start_time}
          endTime={this.props.meetingPattern.end_time}
        />
      );
    }
    return null;
  }

  render() {
    return (
      <dd>
        {this.getFormattedDays()}
        {this.getMeetingTime()}
      </dd>
    );
  }
}

// Prop types validation
MeetingPattern.propTypes = {
  meetingPattern: React.PropTypes.object.isRequired,
};

export default MeetingPattern;
