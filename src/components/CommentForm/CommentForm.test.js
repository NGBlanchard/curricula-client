import CommentForm from './CommentForm'
import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });


describe('<CommentForm />', () => {
  it('Renders without crashing', () => {
    const comment = {
      id: 1,
      user_id: 2.
    }

    const context = {
      clearError(){
        this.setState({ error: null })
      } 
    }

    mount(<CommentForm
      key={comment.id}
      comment={comment}
      user={comment.user_id}
    />, context)
  })
})
