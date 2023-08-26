

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





}
