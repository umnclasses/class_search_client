import React from 'react/addons';
import Course from './Course';

/*
 * @class Cart
 * @extends React.Component
 */
class Results extends React.Component {

  /*
   * @method shouldComponentUpdate
   * @returns {Boolean}
   */
  shouldComponentUpdate () {
    return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
  }

  /*
   * @method render
   * @returns {JSX}
   */
  render () {
    var courses = this.props.courses.map(function(course) {
      return (
        <Course course={course} />
      )
    });

    return <div className="results">
      <ul>
      {courses}
      </ul>
    </div>;
  }
}

// Prop types validation
Results.propTypes = {
  courses: React.PropTypes.object.isRequired,
};

export default Results;
