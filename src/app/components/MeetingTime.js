import React from 'react/addons';

class MeetingTime extends React.Component {

  /*
   * @method shouldComponentUpdate
   * @returns {Boolean}
   */
  shouldComponentUpdate () {
    return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
  }

  timeToTwelveHour(time) {
    var newTime = time.split(":");

    var suffix = newTime[0] > 12 ? ' PM' : ' AM';
    newTime[0] = newTime[0] > 12 ? newTime[0] % 12 : newTime[0];

    return newTime.join(":") + suffix;
  }

  render() {
    return (
        <span>{this.timeToTwelveHour(this.props.startTime)} - {this.timeToTwelveHour(this.props.endTime)}</span>
    );
  }

}

// Prop types validation
MeetingTime.propTypes = {
  startTime: React.PropTypes.object.isRequired,
  endTime: React.PropTypes.object.isRequired
};

export default MeetingTime;
