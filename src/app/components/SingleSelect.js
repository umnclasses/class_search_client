import React from 'react/addons';

/*
 * @class SingleSelect
 * @extends React.Component
 */
class SingleSelect extends React.Component {

  /*
   * @method render
   * @returns {JSX}
   */
  render () {
    var options = this.props.collection.map(function(item) {
      return <option value={ item[this.props.selectValue] }>{ item[this.props.selectLabel] }</option>
    })
    return <select>{ options }</select>
  }
}

// Prop types validation
SingleSelect.propTypes = {
  collection: React.PropTypes.array.isRequired,
  selectHandler: React.PropTypes.func.isRequired,
  selectLabel: React.PropTypes.string.isRequired,
  selectValue: React.PropTypes.string.isRequired,
  selectId: React.PropTypes.string.isRequred
};

export default SingleSelect;
