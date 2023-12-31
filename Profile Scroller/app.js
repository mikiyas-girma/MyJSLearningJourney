// custom datas
const data = [
  {
    Name: 'mount',
    Age: 23,
    Country: 'England',
    Club: 'Manchester United'
  },
  {
    Name: 'Havertz',
    Age: 22,
    Country: 'Germany',
    Club: 'Arsenal'
  },
  {
    Name: 'Enzo',
    Age: 21,
    Country: 'Argentina',
    Club: 'Chelsea'
  },
  {
    Name: 'Caicedo',
    Age: 20,
    Country: 'Ecuador',
    Club: 'Chelsea'
  }
];

const profile = iterateProfile(data);


function iterateProfile(profile) {
 let nextIndex = 0;
  return {
    
    next: function() {
      return nextIndex < profile.length ? 
      {value: profile[nextIndex++], done: false } : 
      { done: true};
    },

    resetIndex: function () {
      document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
      <li class="list-group-item">${profile[0].Name}</li>
      <li class="list-group-item">${profile[0].Age}</li>
      <li class="list-group-item">${profile[0].Country}</li>
      <li class="list-group-item">${profile[0].Club}</li>
      </ul>
      `;
      
      nextIndex = 1;
    }

  };
}

// calling first profile at the beginning
displayProfile();

// next btn event

document.getElementById('next').addEventListener('click', displayProfile);


// display profile 

function displayProfile() {
  const currentProfile = profile.next().value;

  if (currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
  
      <ul class="list-group">
        <li class="list-group-item">${currentProfile.Name}</li>
        <li class="list-group-item">${currentProfile.Age}</li>
        <li class="list-group-item">${currentProfile.Country}</li>
        <li class="list-group-item">${currentProfile.Club}</li>
      </ul>
  
      `;
  } else {
    profile.resetIndex();
    }
  
}
