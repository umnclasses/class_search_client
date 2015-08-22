import React from 'react/addons';

class EnrollmentStatus extends React.Component {

  getStatusClass(status) {
    var labelClasses = {
      open: 'label label-success text-capitalize',
      closed: 'label label-danger text-capitalize',
      waitlist: 'label label-warning text-capitalize'
    };

    return labelClasses[status];
  }

  getCountClass(enrollment) {
    var fillPerecent = enrollment.enrollment_total / enrollment.enrollment_capacity;

    if (fillPerecent >= 0.8 && fillPerecent < 0.9) {
      return 'label label-default text-warning';
    }

    if (fillPerecent >= 0.9) {
      return 'label label-default text-danger';
    }

    return 'label label-default';
  }

  render() {
    return (
      <div className="label-group h4">
        <span className={getStatusClass(this.props.enrollment.status)}>
          {status}
        </span>
        <span className={getCountClass(this.props.enrollment)}>
          {this.props.enrollment.enrollment_total}/{this.props.enrollment.enrollment_capacity}
        </span>
      </div>
    );
  }
}

// Prop types validation
EnrollmentStatus.propTypes = {
  enrollment: React.PropTypes.object.isRequired,
};

export default EnrollmentStatus;