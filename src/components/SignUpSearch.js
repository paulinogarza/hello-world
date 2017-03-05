import React, {Component } from 'react';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  customWidth: {width: 150},
  margin:12
}

class SignUpSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      value2: 2
    }
  }

  handleChangeIam =  (event, index,value) => {
    let value2 = 2;
    if(value===2)
     value2 = 1;

    this.setState({value, value2});
  };
  handleChangeLookingFor = (event, index, value2) => this.setState({value2});

  // getChildContext() {
  //   return {muiTheme: getMuiTheme(baseTheme)};
  // }

  render () {
    return (
      // <div className="search-block-container">
      //   <span className="search-block-message">It takes seconds to find others in your area who may be Set For Marriage!</span>
      //   <input className="search-block-zip" type="text" placeholder="Zip code" />
      //   <input className="search-block-age" type="text" placeholder="Age" />
      //   <div className="search-block-pickSex1">
      //     <span>I am a: </span>
      //     <select className="search-block-picklist">
      //       <option value="male">Male</option>
      //       <option value="female">Female</option>
      //     </select>
      //   </div>
      //   <div className="search-block-pickSex2">
      //     <span>Looking for a: </span>
      //     <select className="search-block-picklist">
      //       <option value="male">Male</option>
      //       <option value="female">Female</option>
      //     </select>
      //   </div>
      //   <button className="search-block-submit" type="submit" >GO!</button>
      //
      // </div>
      <div className="search-block">
        <span className="search-block-message">It takes seconds to find others in your area who may be Set For Marriage!</span>
        <br />
        <TextField className='city'
          hintText="City"
          floatingLabelText="Please type your city"
        />
        <TextField className='city'
          hintText="Age"
          floatingLabelText="Please type your age"
        /> <br />
        <SelectField
          floatingLabelText="I am a:"
          value={this.state.value}
          onChange={this.handleChangeIam}
          // style={styles.customWidth}
        >
          <MenuItem value={1} primaryText="Male" />
          <MenuItem value={2} primaryText="Female" />
        </SelectField>
        <SelectField
          floatingLabelText="looking for a:"
          value={this.state.value2}
          onChange={this.handleChangeLookingFor}
          // style={styles.customWidth}
        >
          <MenuItem value={1} primaryText="Male" />
          <MenuItem value={2} primaryText="Female" />
        </SelectField>
        <br/>
        <RaisedButton className='search-block-button' label="GO!" primary={true} />
      </div>
    )
  }
}
// SignUpSearch.childContextTypes = {
//   muiTheme: React.PropTypes.object.isRequired
// };
export default SignUpSearch;
