import CourseListItem from './CourseListItem'
import { BrowserRouter as Router } from "react-router-dom";
import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });

//this is a change

describe('<CourseListItem />', () => {
  it('Renders without crashing', () => {
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

    mount(
      <Router>
        <CourseListItem
          key={course.id}
          course={course}
        />
      </Router>, context)
  })
})
