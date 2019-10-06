import React from 'react';
import CourseContext from '../../context/CourseContext';
import CourseApiService from '../../services/course-api-service';
import TokenService from '../../services/token-service';
import { Button, Input, Section} from '../Utils/Utils'

import './CreateCoursePage.css';

const userId = TokenService.getUserId()

class CreateCoursePage extends React.Component {
  static contextType = CourseContext

  onSubmit = e => {
    e.preventDefault();
    const { title, description, notes, readings, duration, topic } = e.target
    const course = {
      title: title.value,
      description: description.value,
      notes: notes.value,
      readings: readings.value,
      duration: duration.value,
      topic: topic.value,
      date_created: new Date(),
      author: userId
    }
    CourseApiService.postCourse(course)
      .then(this.context.addCourse)
      .then(() => {
        course.value = ''
      })
      .then(this.props.history.push('/'))
      .catch(this.context.setError)
  };


  render() {
    return (
      <div className="create-form">
      <header>
        <h1>Create New Course</h1>
      </header>
      <form id="new-course" onSubmit={this.onSubmit}>
        <Section className="form-section">
          <label htmlFor="course-title">Course Title</label>
          <Input 
              type="text" 
              id="title"
              placeholder="Hannah Arendt & The Walking Dead" 
              required 
          />
        </Section>
        <Section className="form-section">
          {/* <p>Select Course Topic</p> */}
          <div className="other-topic-container">
            <label htmlFor="other-topic">Course Topic</label>
            <Input 
              type="text" 
              id="topic"
              placeholder="Writing, Philosophy, Film, Pop Culture" />
          </div>
        </Section>
        <Section className="form-section">
          <label htmlFor="course-description">Course Description</label>
          <textarea 
              name="course-descrition" 
              id="description"
              rows="15" 
              required>
          </textarea>
        </Section>
        <Section className="form-section">
          <label htmlFor="teaching-notes">Teaching Notes</label>
          <textarea 
              name="teaching-notes" 
              id="notes" 
              rows="15" 
              required>
          </textarea>
        </Section>
        <Section className="form-section">
          <label htmlFor="reading-list">Readings & Resources</label>
          <textarea 
              name="reading-list" 
              id="readings"
              rows="15" 
              required>
          </textarea>
        </Section>
        <Section className="course-duration-container">
          <label htmlFor="course-duration">Estimated Course Duration (in weeks)</label>
          <Input 
              type="number" 
              id="duration"
              placeholder="16" 
          />
        </Section>
        <Section className="button-container">
            <Button id="submit-new" type="submit">Submit</Button>
            <Button id="reset-new" type="reset">Reset</Button>
        </Section>
        </form>
    </div>
    );
  }
}

export default CreateCoursePage;