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
    this.state = { campuses: [], terms: [], formVisible: false };
  }

  /*
   * @method shouldComponentUpdate
   * @returns {Boolean}
   */
  shouldComponentUpdate () {
    return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
  }

  componentWillMount() {
    this.fetch('campuses.json').then(function(response) { this.setState({"campuses": response.campuses}); }.bind(this));
    this.fetch('terms.json').then(function(response) { this.setState({"terms": response.terms}); }.bind(this));
  }

  fetch(route) {
    return $.getJSON(config.apiRoot + route);
  }

  decodeTerm(sTerm) {
    var year = sTerm.substring(1,3);
    var terms = { "3": "Spring", "5": "Summer", "9": "Fall" };
    var term = terms[sTerm[3]];
    return `${ term } 20${ year }`;
  }

  revealFormHandler() {
    var campus = this.refs.campusSelect.state.selectValue;
    var term = this.refs.termSelect.state.selectValue;

    if (campus != "" && term != "") {
      this.setState({formVisible: true});
    } else {
      this.setState({formVisible: false});
    }
  }

  executeSearch() {}

  /*
   * @method render
   * @returns {JSX}
   */
  render () {
    var fullForm;

    if (this.state.formVisible) {
      fullForm = (
        <p>See me</p>
      );
    }

    var terms = this.state.terms.map(function(term) {
      return {"sterm": term.strm, "label": this.decodeTerm(term.strm)};
    }.bind(this))

    return <div className="searchform">
      <form onSubmit={ this.executeSearch() }>
        <div className="form-inline">
          <div className="form-group">
            <SingleSelect ref="campusSelect" collection={ this.state.campuses } selectHandler={this.revealFormHandler.bind(this)} selectLabel="abbreviation" selectValue="abbreviation"/>
          </div>
          <div className="form-group">
            <SingleSelect ref="termSelect" collection={ terms } selectHandler={this.revealFormHandler.bind(this)} selectLabel="label" selectValue="sterm" />
          </div>
        </div>
        {fullForm}
      </form>
    </div>;
  }
}

export default SearchForm;
