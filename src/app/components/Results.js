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
        <Course key={course.id} course={course} />
      )
    });

    return(
      <div className="results">
        <h2>{courses.length} Results</h2>
        <hr />
        <ul className="list-unstyled">
          {courses}
        </ul>
      </div>
    );
  }
}

// Prop types validation
Results.propTypes = {
  courses: React.PropTypes.array.isRequired,
};

export default Results;
