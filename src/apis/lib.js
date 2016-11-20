const ROOT = 'https://smp-dev.heek.kr/'

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response))
  }
}

function toJSON(response) {
  if (!response) {
    return response
  } else {
    return response.json()
  }
}

export function getToken(username, password) {
  let headers = new Headers({
    'Authorization': `Basic ${btoa(username + ":" + password)}`
  })
  const url = ROOT + 'auth/token'
  return fetch(url, {
    headers: headers
  })
    .then(checkStatus)
    .then(toJSON)
}

export function get(url) {
  let headers = new Headers({
    'Authorization': `Bearer ${window.sessionStorage.getItem('smp-token')}`
  })

  url = ROOT + url
  return fetch(url, {
    headers: headers
  })
    .then(checkStatus)
    .then(toJSON)
}

export function post(url, data) {
  url = ROOT + url
  return fetch(url, {
    method: 'post',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${window.sessionStorage.getItem('smp-token')}`
    }),
    body: JSON.stringify(data)
  })
    .then(checkStatus)
    .then(toJSON)
}

export function put(url, data) {
  url = ROOT + url
  return fetch(url, {
    method: 'put',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${window.sessionStorage.getItem('smp-token')}`
    }),
    body: JSON.stringify(data)
  })
    .then(checkStatus)
    .then(toJSON)

}

// credentials: 'include'
// 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5zd21hZXN0cm8ubmV0IiwiZXhwIjoxNDgxNDU4NzMzLCJ1c2VyX2lkIjo0LCJpYXQiOjE0NzYyNzQ3MzN9.95sFi_ICx57Jh2tHeycmxusZg_-luWkQf5AF2Y8p9qY'
