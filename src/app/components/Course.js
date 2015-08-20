import React from 'react/addons';
import Section from './Section';

/*
 * @class Course
 * @extends React.Component
 */
class Course extends React.Component {

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
    var sections = this.props.course.sections.map(function(section) {
      return (
        <Section section={section} />
      )
    });

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 class="panel-title">{this.props.course.title}</h3>
          <p>{this.props.course.description}</p>
        </div>
        <ul className="list-group">
          {sections}
        </ul>
      </div>
    );
  }
}

// Prop types validation
Course.propTypes = {
  course: React.PropTypes.object.isRequired,
};

export default Course;
