

class easyHttp {
  // make get request
  get(url) {
    return new Promise((resolve, reject) => {
     fetch(url)
    .then(res => res.json())
    .then(data => resolve(data)) 
    .catch(err => reject(err))
    
  });
}

// make post request 
post(url, data) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST', 
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => resolve(data))
    .catch(err => reject(err))
  });
}

// make put(update) request to change existing data
put(url, data) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => resolve(data))
    .catch(err => reject(err))
  });
}

// make delete request 

delete(url) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(() => resolve('Resource Deleted...'))
    .catch(err => reject(err));
  });
}


}
