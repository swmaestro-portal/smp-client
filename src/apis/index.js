const ROOT = 'http://172.16.101.55:8888/'

function checkStatus(response) {
  return response.text()
}

function parseJSON(data) {
  if (!data) {
    return data
  } else {
    return JSON.parse(data)
  }
}

function getCustomHeader(contentType = 'application/json') {
  const header = {
    'Accept': 'application/json',
  }
  if (contentType) {
    header['Content-Type'] = contentType
  }
  return header
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
    .then(parseJSON)
}

export function post(url, data) {
  url = ROOT + url
  return fetch(url, {
    method: 'post',
    headers: getCustomHeader(),
    body: JSON.stringify(data),
    credentials: 'include'
  })
    .then(checkStatus)
    .then(parseJSON)
}


// credentials: 'include'
// 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5zd21hZXN0cm8ubmV0IiwiZXhwIjoxNDgxNDU4NzMzLCJ1c2VyX2lkIjo0LCJpYXQiOjE0NzYyNzQ3MzN9.95sFi_ICx57Jh2tHeycmxusZg_-luWkQf5AF2Y8p9qY'
