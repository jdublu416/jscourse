//create data --usually you get this from the API or external file but we are hardcoding for the example
const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Sally Smith',
    age: 28,
    gender: 'female',
    lookingfor: 'male',
    location: 'Fairfax VA',
    image: 'https://randomuser.me/api/portraits/women/62.jpg'
  },
  {
    name: 'Jeannie Jones',
    age: 30,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'Jack Stevens',
    age: 29,
    gender: 'male',
    lookingfor: 'female',
    location: 'Marshfield DE',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  }
];

const profiles = profileIterator(data);
// console.log(profiles.next().value);
// console.log(profiles.next().value);
// console.log(profiles.next().value);
// console.log(profiles.next().value);

// call first profile:
nextProfile(); // this will call the function once  and will load the profiles so there is a profile on load.

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next function

function nextProfile() {
  const currentProfile = profiles.next().value;
  
  if(currentProfile !== undefined){
    const { name, age, gender, lookingfor, location, image } = currentProfile;
    document.getElementById('profileDisplay').innerHTML = `
      <ul class ="list-group">
          <li class="list-group-item">Name: ${name}</li>
          <li class="list-group-item">Age: ${age}</li>
          <li class="list-group-item">Location: ${location}</li>
          <li class="list-group-item">Preference: ${gender} looking for ${lookingfor}</li>
      </ul>
      `;
  
      document.getElementById('imageDisplay').innerHTML = `
      <img src="${image}" alt = "profile picture">
      `;
    }else{

        window.location.reload();
    }
}

// Profile Iterator function

function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: () => {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    }
  };
}
