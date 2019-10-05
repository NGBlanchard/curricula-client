import React from 'react';
import { Button, Input } from '../../components/Utils/Utils'

import './Search.css';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
    };
  

  render() {
    return (
        <form onSubmit={this.onSearch} className="search-form">
            <label htmlFor="course-searchTerm"></label>
            <Input 
                type="text" 
                id="searchTerm"
                onChange={this.onChange}
                value={this.state.searchTerm} 
                placeholder="Hannah Arendt & The Walking Dead" 
                required 
            />
            <Button id="search-button" type="submit">Search Courses</Button>
        </form>
    );
  }
}

export default Search;