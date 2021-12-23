const gameParks = [
  {
    name: 'Bwindi Impenetrable National Park',
    image: 'https://www.silverbackgorillatours.com/wp-content/uploads/2019/03/game-parks-of-uganda.jpg',
    summary: 'Gorilla trekking and the gorilla habituation',
    description: 'Bwindi Impenetrable National Park is UNESCO World heritage site because of the mountain gorillas and overall biodiversity',
  },
  {
    name: 'Kibale National Park',
    image: 'https://www.silverbackgorillatours.com/wp-content/uploads/2019/03/game-parks-in-uganda.jpg',
    summary: 'chimpanzee tracking',
    description: 'Kibale Forest is known as the primate capital of Uganda. There are more primates here than anywhere else in Uganda – over 13 species including chimpanzees.',
  },
  {
    name: 'Kidepo Valley National Park',
    image: 'https://www.silverbackgorillatours.com/wp-content/uploads/2019/03/national-park-uganda.jpg',
    summary: 'ostriches, cheetahs and wild dogs',
    description: 'Kidepo is one of Uganda’s true hidden gems. the only park in Uganda where ostriches, cheetahs and wild dogs still thrive',
  },
  {
    name: 'Lake Mburo National Park',
    image: 'https://www.silverbackgorillatours.com/wp-content/uploads/2019/03/uganda-national-parks.jpg',
    summary: 'The smallest savannah park in Uganda',
    description: 'It is the best place in Uganda to spot zebras, Leopards and Impala because of the high concentration in a small area.',
  },
  {
    name: 'Mgahinga Gorilla National Park',
    image: 'https://www.silverbackgorillatours.com/wp-content/uploads/2019/03/national-parks-of-uganda.jpg',
    summary: 'The smallest national park',
    description: 'Mgahinga is the smallest national park in Uganda. It is the second home to mountain gorillas in Uganda. ',
  },
  {
    name: 'Mount Elgon National Park',
    image: 'https://www.silverbackgorillatours.com/wp-content/uploads/2019/03/parks-in-uganda.jpg',
    summary: 'Climb a volcano',
    description: 'Climbing Mount Elgon is the main activity in the park but there are several animal species that can be spotted at the foot of the mountain and surrounding areas',
  },
];

const createParkContent = (park) => `
               <div class="image">
               <img src="${park.image}" alt="${park.name}">
               </div>
        
                   
                   <div class="card-content">

                       <h3 class="title">${park.name}</h3>
                       <h4 class="subtitle">${park.summary}</h4>
                       <hr>
                       <p class="decription">${park.description}</p>
                   </div>
               
    `;

const addPark = (park) => {
  const parks = document.querySelector('.parks ul');
  const li = document.createElement('li');
  li.innerHTML = createParkContent(park);
  parks.appendChild(li);
};
const createParks = () => {
  const isDesktop = window.matchMedia('screen and (min-width:768px)').matches;
  if (isDesktop) gameParks.forEach(addPark);
  else gameParks.slice(0, 2).forEach(addPark);
};
createParks();

const moreButton = document.querySelector('.more');
moreButton.addEventListener('click', () => {
  gameParks.slice(2).forEach(addPark);
  moreButton.classList.add('no-display');
});
