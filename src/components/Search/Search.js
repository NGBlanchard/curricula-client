import React from 'react';
import CourseContext from '../../context/CourseContext'

import './Search.css';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: '',
    }
  }
  static contextType = CourseContext

  handleChange = (event) => {
    this.setState({
      topic: event.target.value
    });
    this.context.filterList(event.target.value)
  }

  render() {
    const filteredtopics = this.props.courseList.map(t => t.topic)
    .filter((value, index, topic) => topic.indexOf(value) === index)
    return (
          <div className="topic-sort-container">
            <p>Sort by Course Topic: </p>
            <select className="topic-sort" onChange={this.handleChange}>
              {filteredtopics.map( ( topic, index ) => 
                <option 
                  className="selected-topic" 
                  value={topic}
                  key={index}
                  >
                  {topic}
                </option>
                )}
                <option 
                className="deselect-topic" 
                value=""
                key="none"
                >
                None
              </option>
              
            </select>
          </div>
    )
  }
}
export default Search;
