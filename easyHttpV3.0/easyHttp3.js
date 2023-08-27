

class easyHttp {
  // make get request
 async get(url) {
   const response = await fetch(url);
   const resData = await response.json()
   return resData;
    
 
}

// make post request 
 async post(url, data) {
  const response = await fetch(url, {
    method: 'POST', 
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  const resData = await response.json();
  return resData;  

 
}

// make put(update) request to change existing data
async put(url, data) {
  const response = await fetch(url, {
                                    method: 'PUT',
                                    headers: {
                                      'content-type': 'application/json',
                                    },
                                    body: JSON.stringify(data)
                                  })
 
    const resData = await response.json();
    return resData;
}

// make delete request 

async delete(url) {
  const response = await fetch(url, {
                                    method: 'DELETE',
                                    headers: {
                                      'Content-type': 'application/json'
                                    }
                                  })

    const resData = await 'Resource deleted...';
    return resData;
}


}
