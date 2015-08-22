import React from 'react/addons';
import MeetingPattern from './MeetingPattern';

class Section extends React.Component {

  /*
   * @method shouldComponentUpdate
   * @returns {Boolean}
   */
  shouldComponentUpdate () {
    return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
  }

  render() {
    var meetingPatterns = this.props.section.meeting_patterns.map(function(meetingPattern, index) {
      return (
        <MeetingPattern key={index} meetingPattern={meetingPattern} />
      );
    });

    return (
        <li className="list-group-item">
          <h4>
              Section {this.props.section.number} - {this.props.section.component}
          </h4>
          <span className="glyphicon glyphicon-chevron-right pull-right arrow" aria-hidden="true"></span>
          <dl>
            <dt>Status:</dt>
            {this.props.section.enrollment.status}
            <span className="badge">
              {this.props.section.enrollment.enrollment_total}/{this.props.section.enrollment.enrollment_capacity}
            </span>
            <dt>Meets:</dt>
            {meetingPatterns}
            <dt>Session:</dt>
            <dd>001 Regular Academic Session</dd>
          </dl>
        </li>
    );
  }

}

// Prop types validation
Section.propTypes = {
  section: React.PropTypes.object.isRequired,
};

export default Section;
