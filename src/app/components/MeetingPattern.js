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

  assembleDays() {
    var days = this.props.meetingPattern.days.map(function(day) {
        return day.abbreviation.toUpperCase();
    });

    return days.join(" ") + " ";
  }

  render() {
    return (
        <dd>
            {this.assembleDays()}
            <MeetingTime
                startTime={this.props.meetingPattern.start_time}
                endTime={this.props.meetingPattern.end_time}
            /> in {this.props.meetingPattern.location.description}
        </dd>
    );
  }
}

// Prop types validation
MeetingPattern.propTypes = {
  meetingPattern: React.PropTypes.object.isRequired,
};

export default MeetingPattern;
