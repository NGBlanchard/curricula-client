import CoursePage from './CoursePage'
import { BrowserRouter as Router } from "react-router-dom"
import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });


describe('<CoursePage />', () => {
  it('Renders without crashing', () => {
    const course = {
        id: 4,
        title: 'title',
        description: 'description',
        readings: 'readings',
        notes: 'notes',
        topic: 'topic',
        date_created: 'date',
        author_id: 2
      }

    const context = {
      clearError(){
        return;
      }, 
      setCourseList(){
        return;
      },
      filterTopics() {
        const filteredtopics = this.state.courseList.map(t => t.topic)
        this.setState({
          topics: filteredtopics
        })
      },
      courseList: [],
      filteredList: [],
    }

    mount(
      <Router>
        <CoursePage
          key={course.id}
          course={course}
        />
      </Router>, context)
  })
})
