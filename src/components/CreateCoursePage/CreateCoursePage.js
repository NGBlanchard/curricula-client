import React from 'react';
import CourseContext from '../../context/CourseContext';
import CourseApiService from '../../services/course-api-service';
import TokenService from '../../services/token-service';
import { Button, Input, Section} from '../Utils/Utils'
import Nav from '../Nav/Nav'

import './CreateCoursePage.css';


class CreateCoursePage extends React.Component {
  state = {
    topic: 'Writing',
    user: ""
  }
  static contextType = CourseContext

  componentDidMount() {
    const userId = TokenService.getUserId()
      this.setState({
      user: userId
      })
  }

  onSubmit = e => {
    e.preventDefault();
    const { title, description, notes, readings, duration } = e.target
    const course = {
      title: title.value,
      description: description.value,
      notes: notes.value,
      readings: readings.value,
      duration: duration.value,
      topic: this.state.topic,
      date_created: new Date(),
      author: this.state.user
    }
    CourseApiService.postCourse(course)
      .then(this.context.addCourse)
      .then(() => {
        course.value = ''
      })
      .then(this.props.history.push('/'))
      .catch(this.context.setError)
  };

  handleChange = (event) => {
    this.setState({
      topic: event.target.value
    });
  }

  render() {
    return (
      <>
      <Nav />
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
          <p>Select Course Topic</p>
          <div className="topic-container">
            <select className="select" onChange={this.handleChange}>
              <option value="Writing">Writing</option>
              <option value="Film">Film</option>
              <option value="Philosophy">Philosophy</option>
              <option value="Pop Culture">Pop Culture</option>
              <option value="Teaching">Teaching</option>
              <option value="Politics">Politics</option>
            </select>
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
    </>
    );
  }
}

export default CreateCoursePage;