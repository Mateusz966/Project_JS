'use strict';
import './sass/main.scss';
const gallery = document.querySelector('.gallery');
const KEY = '9hIF6NBjrDSVNrQQJmrbBXzEzwkr0S4m';
const paginationList = document.querySelector('.pagination');

let page = 1;
let country = 'pl';


async function galleryRender(country, page) {
  let data = await fetchEvents(country, page);
  let pages = data.page;
  let events = data._embedded.events;
  let totalPages = pages.totalPages;
  let links = data._links;

  events.forEach(elm => {
    gallery.insertAdjacentHTML(
      'beforeend',
      `<div class="gallery__event">
    <img class="event__image" src=${elm.images[0].url} alt =""/>
    <div class="event__info">
    <p class="event__tittle">${elm.name}</p>
    <p class="event__date">${elm.dates.start.localDate}</p>
    <p class="event__place"> ${elm._embedded.venues[0].name}</p></div>
  </div>`,
    );
  });

  pagination(page);
}

async function fetchEvents(country, page) {
  const response = await fetch(
    `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${country}&sort=date,asc&page=${page}&apikey=${KEY}`,
  )
    .then(data => {
      // console.log(data.json())
      const response = data.json();
      return response;
    })
    .catch(error => {
      console.log(error);
    });

  return response;

}

const range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

const pagination = async (currentPage = 1) => {
  const elementsToShow = 6;
  const data = await fetchEvents(country, page);
  let pages = data.page;
  let totalPages = 5
  let links = data._links;

  if ( totalPages <= elementsToShow) {
    const paginationRange = range(1, totalPages);
    renderPagination(paginationRange, currentPage)
  }

}

const isActive = (index, currentPage) => currentPage === index + 1;

const renderPagination = (pagination, currentPage) => {
  console.log(currentPage);
  paginationList.innerHTML = pagination.map((num, index) => (
     paginationTemplate(num, isActive(index, currentPage))
  ))
}


const paginationTemplate = (num, isActive) => `
  <li class='pagination__link${isActive ? '--active' : ''}'>
    <button>${num}</button>
  </li>
`;

const handlePaginationOnClick = async (e) => {
  e.preventDefault();
  paginationList.innerHTML = '';
  gallery.innerHTML = '';

  document
    .querySelectorAll('.pagination__link')
    .forEach((pagination) => pagination.classList.remove('pagination__link--active'));

  e.target
    .closest('li')
    ?.classList
    .add('pagination__link--active');

  page = e.target.textContent;
  await galleryRender(country, +page);
}

paginationList.addEventListener('click', handlePaginationOnClick)

galleryRender(country, page);



export { KEY } ;
















// // pierwsza wersja
// import './sass/main.scss';
// 'use strict'
// const gallery = document.querySelector(".gallery");
// const key = "9hIF6NBjrDSVNrQQJmrbBXzEzwkr0S4m";
// const paginationList=document.querySelector(".pagination")
// let page = 21;
// let country = 'pl';
// let keyword

//  async function fetchEvents() {
//     fetch(`https://app.ticketmaster.com/discovery/v2/events?countryCode=${country}&sort=date,asc&page=${page}&apikey=${key}`)
//         .then(data => {
//             // console.log(data.json())
//             const response = data.json();
//             return response

//         })
//         .then(response => {
//             console.log(response);
//             let pages = response.page;
//             let events = response._embedded.events;
//             let totalPages = pages.totalPages;
//             let links = response._links;
//             let fLink = links.first.href;
//             let lLink = links.last.href;
//             console.log(lLink)
//             console.log(fLink)
//             console.log(links)
//             console.log(totalPages)
//             console.log(events)
//             console.log(pages)
//             events.forEach(elm => {
//              gallery.insertAdjacentHTML("beforeend",`<div class="gallery__event">
//   <img class="event__image" src=${elm.images[0].url} alt =""/>
//   <div class="event__info">
//   <p class="event__tittle">${elm.name}</p>
//   <p class="event__date">${elm.dates.start.localDate}</p>
//   <p class="event__place"> ${elm._embedded.venues[0].name}</p></div>
// </div>`  );
//             })
//             let numPages = []
//             for (let i = 1; i <= totalPages; i += 1){
//                 numPages.push(i)
//             }
//             console.log(numPages)
//             numPages.forEach(elm => {
//                 paginationList.insertAdjacentHTML("beforeend",`<li class="pagination__link"><a href="">${elm}</a></li>`)
//             })
//             const firstLink = paginationList.children[0];

//             console.log(numPages.length)
//             const lastElementIndex = paginationList.children.length - 1;
//             const lastLink = paginationList.children[lastElementIndex];
//             console.log(lastLink)
//             console.log(lastElementIndex);
//         //     lastLink.addEventListener("click", (event) => {
//         //         event.preventDefault()
//         //         gallery.innerHTML = "";
//         //         fetch(`https://app.ticketmaster.com${fLink}page=${page}&apikey=${key}`)
//         // .then(data => {
//         //     // console.log(data.json())
//         //     const response = data.json();
//         //     return response

//         // })



//         //     })
//             // firstLink.childNodes[0].setAttribute("href", `${fLink}`);
//             // console.log(firstLink.childNodes[0])
//             // console.log(firstLink)
//             // lastLink.childNodes[0].setAttribute("href",`${lLink}`)

//         })
//         .catch(error => {
//         console.log(error)
//     })
// }





// fetchEvents()
// // pierwsza wersja koniec

