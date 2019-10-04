import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Nav from '../Nav/Nav'
import PrivateRoute from '../Utils/PrivateRoute'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import CourseListPage from '../CourseListPage/CourseListPage'
import CoursePage from '../CoursePage/CoursePage'
import LoginPage from '../LoginPage/LoginPage'
import RegistrationPage from '../RegistrationPage/RegistrationPage'
import CreateCoursePage from '../CreateCoursePage/CreateCoursePage';
import Profile from '../Profile/Profile';
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import { CourseProvider } from '../../context/CourseContext'
import './App.css'

class App extends Component {
  state = { hasError: false }

  render() {
    return (
      <CourseProvider>
      <div className='App'>
        <nav className='App__nav'>
          <Nav />
        </nav>
        <main className='App__main'>
          {this.state.hasError && <p className='red'>There was an error. Reconsider everything.</p>}
          <Switch>
            <PrivateRoute
              exact
              path={'/'}
              component={CourseListPage}
            />
            <PublicOnlyRoute
              restrictied={false}
              exact
              path={'/login'}
              component={LoginPage}
            />
            <PublicOnlyRoute
              restrictied={true}
              path={'/register'}
              component={RegistrationPage}
            />
            <PrivateRoute
              path={'/course/:courseId'}
              component={CoursePage}
            />
            <PrivateRoute 
              path={'/create'} 
              component={CreateCoursePage} />
            <PrivateRoute
              path={'/profile'}
              component={Profile}
            />
            <Route
              component={NotFoundPage}
            />
          </Switch>
        </main>
      </div>
      </CourseProvider>
    )
  }
}

export default App
