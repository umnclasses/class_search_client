import React from 'react/addons';
import SingleSelect from './SingleSelect';

import config from '../../../config/app';

/*
 * @class SearchForm
 * @extends React.Component
 */
class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { campuses: [], terms: [] };
  }

  /*
   * @method shouldComponentUpdate
   * @returns {Boolean}
   */
  shouldComponentUpdate () {
    return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
  }

  componentWillMount() {
    this.fetch('campuses.json').then(function(response) { this.state.campuses = response.data.campuses; });
    this.fetch('terms.json').then(function(response) { this.state.terms = response.data.terms; });
  }

  fetch(route) {
    return $.getJSON(config.apiRoot + route);
  }

  decodeTerm(sTerm) {
    var year = sTerm.slice(1,3);
    var terms = { "3": "Spring", "5": "Summer", "9": "Fall" };
    var term = terms[sTerm[3]];
    return `${ term } 20${ year }` ;
  }

  executeSearch() {}

  /*
   * @method render
   * @returns {JSX}
   */
  render () {
    return <div className="searchform">
      <form onSubmit={ this.executeSearch() }>
        <div className="form-inline">
          <div className="form-group">
            <SingleSelect collection={ this.state.campuses } selectHandler={ function(){} } selectLabel="campus" selectValue="campus"/>
          </div>
          <div className="form-group">

          </div>
        </div>
      </form>
    </div>;
  }
}

export default SearchForm;
