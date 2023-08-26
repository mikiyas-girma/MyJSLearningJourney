
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

http.post('https://jsonplaceholder.typicode.com/users', data)
.then(data => console.log(data))
.catch(err => console.log(err))