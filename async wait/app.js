

// async and await usage in modern js

function answer() {
  return new Promise(() => {
    setTimeout(() => {
      console.log('Hello');
    }, 3000);
  })
}

async function asyncCall() {
  console.log('calling')
  const response = await answer();
  console.log(response);
  }

  // asyncCall();



  // Another example 

  async function foo() {
    const p1 = new Promise((resolve) => setTimeout(() => resolve("1"), 1000));
    const p2 = new Promise((_, reject) => setTimeout(() => reject("2"), 500));
    
    // Do not do this! Use Promise.all or Promise.allSettled instead.
    // const results = [await p1, await p2];
      // Attempt to swallow all errors... not recommended practice 
  // foo().catch(() => {}); 
    try {
      const results = await Promise.all([p1, p2]);
      results.forEach((result) => console.log(result) );

    } catch (error) {
      console.error("An error occurred:", error); // this is expected result since its rejected in p2
    }
    
  }

  

  foo();