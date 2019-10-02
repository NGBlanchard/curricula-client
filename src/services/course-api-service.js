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
  postLogin(credentials) {
    return fetch(`${config.API_ENDPOINT}/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'bearer token': `${config.TOKEN_KEY}`
      },
      body: JSON.stringify(credentials),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject("didn't fly"))
          : res.json()
      .then(console.log(res))
      )
  },
}

export default CourseApiService
