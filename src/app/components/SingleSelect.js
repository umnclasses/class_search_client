import React from 'react/addons';

/*
 * @class SingleSelect
 * @extends React.Component
 */
class SingleSelect extends React.Component {

  constructor(props) {
    super(props);
    this.state = { selectValue: '' };
  }

  onSelect(event) {
    this.setState({selectValue: event.target.value}, this.props.selectHandler);
    // this.props.selectHandler();
  }

  /*
   * @method render
   * @returns {JSX}
   */
  render () {
    var options = this.props.collection.map(function(item) {
      return(
        <option key={item[this.props.selectValue]} value={item[this.props.selectValue]}>
          {item[this.props.selectLabel]}
        </option>
      );
    }.bind(this))
    return(
      <div className="form-group">
        <label>{this.props.label}</label>
        <select value={this.state.selectValue} onChange={this.onSelect.bind(this)} className="form-control">
          <option value="">Select an option</option>
          { options }
        </select>
      </div>
    );
  }
}

// Prop types validation
SingleSelect.propTypes = {
  collection: React.PropTypes.array.isRequired,
  selectHandler: React.PropTypes.func.isRequired,
  selectLabel: React.PropTypes.string.isRequired,
  selectValue: React.PropTypes.string.isRequired
};

export default SingleSelect;
