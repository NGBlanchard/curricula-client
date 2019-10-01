import React, { Component } from 'react'
import CourseContext from '../../context/CourseContext'
import CourseApiService from '../../services/course-api-service'
import { Button, Textarea } from '../Utils/Utils'
import './CommentForm.css'

export default class CommentForm extends Component {
  static contextType = CourseContext

  onBlurb = e => {
    e.preventDefault()
    const { course } = this.context
    const { content } = e.target
    const comment = {
      content: content.value,
      date_created: new Date(),
      course_id: course.id,
      user_id: 1
    }
    CourseApiService.postComment(comment)
      .then(this.context.addComment)
      .then(() => {
        content.value = ''
      })
      // .then(() => {
      //   this.props.render()
      // })
      .catch(this.context.setError)
  }

  render() {
    return (
      <form
        className='CommentForm'
        onSubmit={this.onBlurb}
      >
        <div className='content'>
          <Textarea
            required
            aria-label="Here's to the Alcove..."
            name='content'
            id='content'
            cols='30'
            rows='3'
            placeholder="Here's to the Alcove...">
          </Textarea>
        </div>
        <Button type='submit'>
          Blurb This Course
        </Button>
      </form>
    )
  }
}
