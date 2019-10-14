import CommentCard from './CommentCard'
import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'


configure({ adapter: new Adapter() });

describe('<CommentCard />', () => {
  it('Renders without crashing', () => {
    shallow(<CommentCard/>)
  })
})