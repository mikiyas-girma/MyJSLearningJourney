
const http = new easyHttp;

//GET users
// http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err))

// create user data and call post method

const data = {
  'name': 'mikiyas girma',
  'username': 'mikiyas-girma',
  'email': 'mikiyasgirmaet@gmail.com'
}

// http.post('https://jsonplaceholder.typicode.com/users', data)
// .then(data => console.log(data))
// .catch(err => console.log(err))


// make put request and change user with id 5
// http.put('https://jsonplaceholder.typicode.com/users/5', data)
// .then(data => console.log(data))
// .catch(err => console.log(err))


// make delete request
http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err => console.log(err));
