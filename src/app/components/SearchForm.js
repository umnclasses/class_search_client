import React from 'react/addons';
import SingleSelect from './SingleSelect';
import Results from './Results';

import config from '../../../config/app';

/*
 * @class SearchForm
 * @extends React.Component
 */
class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { campuses: [], terms: [], subjects: [], courses: [], formVisible: false };
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

  getSubjects() {
    var queryString = `campuses/${this.refs.campusSelect.state.selectValue}/terms/${this.refs.termSelect.state.selectValue}/subjects.json`;
    return this.fetch(queryString).then(function(response) {
      var subjects = response.subjects.map(function(subject) {
        return {"subject_id": subject.subject_id, "label": `${subject.subject_id} - ${subject.description}`}
      });

      this.setState({subjects: subjects});
    }.bind(this));
  }

  revealFormHandler() {
    var campus = this.refs.campusSelect.state.selectValue;
    var term = this.refs.termSelect.state.selectValue;

    if (campus != "" && term != "") {
      this.getSubjects();
      this.setState({formVisible: true});
    } else {
      this.setState({formVisible: false});
    }
  }

  getFullForm() {
    if (this.state.formVisible) {
      return (
        <div>
          <SingleSelect
            ref="subjectSelect"
            label="Subject:"
            collection={this.state.subjects}
            selectHandler={function(){}}
            selectLabel="label"
            selectValue="subject_id"
          />
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Search</button>
          </div>
        </div>
      );
    }
  }

  executeSearch(e) {
    e.preventDefault();
    var queryString = `campuses/${this.refs.campusSelect.state.selectValue}/terms/${this.refs.termSelect.state.selectValue}/classes.json?q=subject_id=${this.refs.subjectSelect.state.selectValue}`;
    this.fetch(queryString).then(function(response) {
      this.setState({courses: response.courses});
    }.bind(this));
  }

  /*
   * @method render
   * @returns {JSX}
   */
  render () {
    var terms = this.state.terms.map(function(term) {
      return {"sterm": term.strm, "label": this.decodeTerm(term.strm)};
    }.bind(this))

    return (
      <div className="appRoot container">
        <h1>{config.title}</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="searchform">
              <form onSubmit={ this.executeSearch.bind(this) }>
                <div className="row">
                  <div className="col-lg-6">
                    <SingleSelect
                      ref="campusSelect"
                      label="Campus:"
                      collection={this.state.campuses}
                      selectHandler={this.revealFormHandler.bind(this)}
                      selectLabel="abbreviation"
                      selectValue="abbreviation"
                    />
                  </div>
                  <div className="col-lg-6">
                    <SingleSelect
                      ref="termSelect"
                      label="Term:"
                      collection={terms}
                      selectHandler={this.revealFormHandler.bind(this)}
                      selectLabel="label"
                      selectValue="sterm"
                    />
                  </div>
                </div>
                {this.getFullForm()}
              </form>
            </div>
          </div>
          <div className="col-md-8">
            <Results courses={this.state.courses} />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchForm;
