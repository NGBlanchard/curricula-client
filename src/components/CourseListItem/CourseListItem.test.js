import CourseListItem from './CourseListItem'
import { BrowserRouter as Router } from "react-router-dom";
import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'


configure({ adapter: new Adapter() });

describe('<CourseListItem />', () => {
  const course = {
    id: 1,
    title: 'title',
    description: 'description',
    readings: 'readings',
    notes: 'notes',
    topic: 'topic',
    duration: 12,
    date_created: "2019-09-28T16:43:22.991Z",
    author_id: 2
  }

const context = {
  clearError(){
    this.setState({ error: null })
  } 
}
  it('Renders without crashing', () => {
    mount(
      <Router>
        <CourseListItem
          key={course.id}
          course={course}
        />
      </Router>, context)
    })
  it('renders the item by default', () => {
    const wrapper = mount(
      <Router>
        <CourseListItem 
          key={course.id} 
          course={course}
        />
      </Router>, context)
    expect(toJson(wrapper)).toMatchSnapshot()  
  });
})
