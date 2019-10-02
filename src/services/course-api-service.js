import TokenService from '../services/token-service'
import config from '../config'

const CourseApiService = {
  getCourses() {
    return fetch(`${config.API_ENDPOINT}/courses`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  
  getCourse(courseId) {
    return fetch(`${config.API_ENDPOINT}/courses/${courseId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  getCommentsForCourse(courseId) {
    return fetch(`${config.API_ENDPOINT}/comments`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .then(comments => (!courseId)
      ? comments
      : comments.filter(comment => comment.course_id == courseId)
      )
  },
  
  getComments() {
    return fetch(`${config.API_ENDPOINT}/comments`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  
  postComment(comment) {
    return fetch(`${config.API_ENDPOINT}/comments`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(comment),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postCourse(content) {
    return fetch(`${config.API_ENDPOINT}/courses`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(content),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postLogin({ user_name, password }) {
    return fetch(`${config.API_ENDPOINT}/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        
      },
      body: JSON.stringify({ user_name, password }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
}

export default CourseApiService
