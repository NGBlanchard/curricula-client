import React from 'react';
import { Button, Input } from '../../components/Utils/Utils'

import './Search.css';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // key: value
    }
  }


  render() {
    return (
        <form className="search-form">
            <label htmlFor="course-title"></label>
            <Input 
                type="text" 
                id="search-bar"
                onChange={this.onChange}
                value={this.state.title} 
                placeholder="Hannah Arendt & The Walking Dead" 
                required 
            />
            <Button id="search-button" type="submit">Search Courses</Button>
        </form>
    );
  }
}

export default Search;