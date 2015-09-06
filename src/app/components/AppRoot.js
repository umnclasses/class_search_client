import React from 'react/addons';
import Results from './Results';
import SearchForm from './SearchForm'

import config from '../../../config/app';

/*
 * @class AppRoot
 * @extends React.Component
 */
class AppRoot extends React.Component {

  constructor(props) {
    super(props);
    this.state = {"courses": []};
  }

  /*
   * AppRootly PureRenderMixin
   *
   * in React 0.13 there is no way to attach mixins to ES6 classes
   * this is a workaround to solve this
   * http://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#mixins
   *
   * @method shouldComponentUpdate
   * @returns {Boolean}
   */
  shouldComponentUpdate () {
    return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
  }

  searchHandler(courses) {
    this.setState({courses: courses});
  }

  /*
   * @method render
   * @returns {JSX}
   */
  render () {
    return(
      <div className="appRoot container">
        <h1>{config.title}</h1>
        <div className="row">
          <div className="col-md-4"><SearchForm searchHandler={this.searchHandler.bind(this)} /></div>
          <div className="col-md-8"><Results courses={this.state.courses} /></div>
        </div>
      </div>
    );
  }
}

// Prop types validation
AppRoot.propTypes = {
  state: React.PropTypes.object.isRequired,
};

export default AppRoot;
