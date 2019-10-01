import { API_ENDPOINT } from '../config'
import { normalizeResponseErrors } from './utils'

export const registerUser = user =>  {
  return fetch(`${API_ENDPOINT}/users`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
}
