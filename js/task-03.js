const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

  const galleryEl = document.querySelector('.gallery');
  console.log(galleryEl);
  const imgGallery = event => {
    return `<li><img src='${event.url}' alt='${event.alt}'  width = 130px height = 130px></li>`;
  }
 
  const listGallery = images.map(imgGallery).join('');
  console.log(listGallery);

  galleryEl.insertAdjacentHTML('beforeend', listGallery);
  




