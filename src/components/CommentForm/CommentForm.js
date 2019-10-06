import React, { Component } from 'react'
import CourseContext from '../../context/CourseContext'
import TokenService from '../../services/token-service';
import CourseApiService from '../../services/course-api-service'
import { Button, Textarea } from '../Utils/Utils'
import './CommentForm.css'

const userId = TokenService.getUserId()

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
      user_id: userId
    }
    CourseApiService.postComment(comment)
      .then(this.context.addComment)
      .then(() => {
        content.value = ''
      })
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
