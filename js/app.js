'use strict';

const hours=['6am','7am','8am','9am','10am','11am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let totalePerHour=[];
let finelTotale=0;
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const container= document.getElementById('place');
const tableEl = document.createElement('table');

function header (){
  container.appendChild(tableEl);
  const headerRow = document.createElement('tr');
  tableEl.appendChild(headerRow);
  const thEl = document.createElement('th');
  headerRow.appendChild(thEl);
  thEl.textContent='location';
  for(let i=0 ; i<hours.length; i++){
    const thEl = document.createElement('th');
    headerRow.appendChild(thEl);
    thEl.textContent=hours[i];
    totalePerHour.push(0);
  }
  const thhEl = document.createElement('th');
  headerRow.appendChild(thhEl);
  thhEl.textContent='location tools';

}



function Salse (name,min,max,avgCookie){
  this.name = name;
  this.min=min;
  this.max=max;
  this.avgCookie=avgCookie;
  this.avgCookieSale=[];
  this.totale=0;
}
Salse.prototype.getCookies= function (){
  for (let i=0 ; i <hours.length ; i++){
    this.avgCookieSale.push(Math.floor(getRandomNumber(this.min,this.max)*this.avgCookie));
    this.totale+= this.avgCookieSale[i];
    totalePerHour[i]+=this.avgCookieSale[i];
  }
  // console.log(this.avgCookieSale);
};
Salse.prototype.render= function(){
  container.appendChild(tableEl);
  const trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  const tdEl = document.createElement('td');
  trEl.appendChild(tdEl);
  tdEl.textContent=this.name;
  for(let i=0 ; i<hours.length; i++){
    const tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent=this.avgCookieSale[i];
  }
  const tddEl = document.createElement('td');
  trEl.appendChild(tddEl);
  tddEl.textContent=Math.floor(this.totale);
  finelTotale+=this.totale;

  
};
const seattle = new Salse (
  'Seattle',
  23,
  65,
  6.3
);


const tokyo = new Salse(
  'Tokyo',
  3,
  24,
  1.2
);

const dubai = new Salse (
  'Dubai',
  11,
  38,
  3.7
);

const paris = new Salse (
  'Paris',
  20,
  38,
  2.3
);

const lima = new Salse (
  'Lima',
  2,
  16,
  4.6
);
header();
seattle.getCookies();
seattle.render();
tokyo.getCookies();
tokyo.render();
dubai.getCookies();
dubai.render();
paris.getCookies();
paris.render();
lima.getCookies();
lima.render();



function footer (){
  container.appendChild(tableEl);
  const trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  const tdEl = document.createElement('td');
  trEl.appendChild(tdEl);
  tdEl.textContent='Hourly Totales for All Location';
  for (let i=0 ; i<hours.length; i++){
    const tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent=totalePerHour[i];
  }
  const tddEl = document.createElement('td');
  trEl.appendChild(tddEl);
  tddEl.textContent=finelTotale;
}
footer();
// const Seattle = {
//   name: 'seattle',
//   min:23,
//   max:65,
//   avgCookie:6.3,
//   avgCookieSale:[],
//   castemerInHour:[],
//   totale:0,
//   getCookies: function () {
//     this.totale=0;
//     for(let i=0 ; i<this.castemerInHour.length ; i++){
//       this.avgCookieSale.push(Math.floor(this.avgCookie*this.castemerInHour[i]));
//       this.totale=this.totale+this.avgCookieSale[i];
//     }
//   },
//   getCastmer:function (){
//     for (let i=0 ; i<hours.length; i++){ 
//       this.castemerInHour.push(getRandomNumber(this.min,this.max));
//     }
//   },
//   render: function () {
//     const container= document.getElementById('place');
//     const articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     const h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.name;
//     const ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for(let i=0 ; i<hours.length; i++){
//       const liEl = document.createElement('li');
//       articleEl.appendChild(liEl);
//       liEl.textContent = hours[i]+' : '+this.avgCookieSale[i]+' cookies';
//     }
//     const liEl = document.createElement('li');
//     articleEl.appendChild(liEl);
//     liEl.textContent='Totel : '+this.totale+' cookies';
//   },
// };

// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// getRandomNumber();
// Seattle.getCastmer();
// Seattle.getCookies();
// Seattle.render();

// const Tokyo = {
//   name: 'Tokyo',
//   min:3,
//   max:24,
//   avgCookie:1.2,
//   avgCookieSale:[],
//   castemerInHour:[],
//   totale:0,
//   getCookies: function () {
//     this.totale=0;
//     for(let i=0 ; i<this.castemerInHour.length ; i++){
//       this.avgCookieSale.push(Math.floor(this.avgCookie*this.castemerInHour[i]));
//       this.totale=this.totale+this.avgCookieSale[i];
//     }
//   },
//   getCastmer:function (){
//     for (let i=0 ; i<hours.length; i++){ 
//       this.castemerInHour.push(getRandomNumber(this.min,this.max));
//     }
//   },
//   render: function () {
//     const container= document.getElementById('place');
//     const articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     const h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.name;
//     const ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for(let i=0 ; i<hours.length; i++){
//       const liEl = document.createElement('li');
//       articleEl.appendChild(liEl);
//       liEl.textContent = hours[i]+' : '+this.avgCookieSale[i]+' cookies';
//     }
//     const liEl = document.createElement('li');
//     articleEl.appendChild(liEl);
//     liEl.textContent='Totel : '+this.totale+' cookies';
//   },
// };

// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// getRandomNumber();
// Tokyo.getCastmer();
// Tokyo.getCookies();
// Tokyo.render();


// const Dubai = {
//   name: 'Dubai',
//   min:11,
//   max:38,
//   avgCookie:3.7,
//   avgCookieSale:[],
//   castemerInHour:[],
//   totale:0,
//   getCookies: function () {
//     this.totale=0;
//     for(let i=0 ; i<this.castemerInHour.length ; i++){
//       this.avgCookieSale.push(Math.floor(this.avgCookie*this.castemerInHour[i]));
//       this.totale=this.totale+this.avgCookieSale[i];
//     }
//   },
//   getCastmer:function (){
//     for (let i=0 ; i<hours.length; i++){ 
//       this.castemerInHour.push(getRandomNumber(this.min,this.max));
//     }
//   },
//   render: function () {
//     const container= document.getElementById('place');
//     const articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     const h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.name;
//     const ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for(let i=0 ; i<hours.length; i++){
//       const liEl = document.createElement('li');
//       articleEl.appendChild(liEl);
//       liEl.textContent = hours[i]+' : '+this.avgCookieSale[i]+' cookies';
//     }
//     const liEl = document.createElement('li');
//     articleEl.appendChild(liEl);
//     liEl.textContent='Totel : '+this.totale+' cookies';
//   },
// };

// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// getRandomNumber();
// Dubai.getCastmer();
// Dubai.getCookies();
// Dubai.render();

// const Paris = {
//   name: 'Paris',
//   min:20,
//   max:38,
//   avgCookie:2.3,
//   avgCookieSale:[],
//   castemerInHour:[],
//   totale:0,
//   getCookies: function () {
//     this.totale=0;
//     for(let i=0 ; i<this.castemerInHour.length ; i++){
//       this.avgCookieSale.push(Math.floor(this.avgCookie*this.castemerInHour[i]));
//       this.totale=this.totale+this.avgCookieSale[i];
//     }
//   },
//   getCastmer:function (){
//     for (let i=0 ; i<hours.length; i++){ 
//       this.castemerInHour.push(getRandomNumber(this.min,this.max));
//     }
//   },
//   render: function () {
//     const container= document.getElementById('place');
//     const articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     const h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.name;
//     const ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for(let i=0 ; i<hours.length; i++){
//       const liEl = document.createElement('li');
//       articleEl.appendChild(liEl);
//       liEl.textContent = hours[i]+' : '+this.avgCookieSale[i]+' cookies';
//     }
//     const liEl = document.createElement('li');
//     articleEl.appendChild(liEl);
//     liEl.textContent='Totel : '+this.totale+' cookies';
//   },
// };

// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// getRandomNumber();
// Paris.getCastmer();
// Paris.getCookies();
// Paris.render();

// const Lima = {
//   name: 'Lima',
//   min:2,
//   max:16,
//   avgCookie:4.6,
//   avgCookieSale:[],
//   castemerInHour:[],
//   totale:0,
//   getCookies: function () {
//     this.totale=0;
//     for(let i=0 ; i<this.castemerInHour.length ; i++){
//       this.avgCookieSale.push(Math.floor(this.avgCookie*this.castemerInHour[i]));
//       this.totale=this.totale+this.avgCookieSale[i];
//     }
//   },
//   getCastmer:function (){
//     for (let i=0 ; i<hours.length; i++){ 
//       this.castemerInHour.push(getRandomNumber(this.min,this.max));
//     }
//   },
//   render: function () {
//     const container= document.getElementById('place');
//     const articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     const h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.name;
//     const ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for(let i=0 ; i<hours.length; i++){
//       const liEl = document.createElement('li');
//       articleEl.appendChild(liEl);
//       liEl.textContent = hours[i]+' : '+this.avgCookieSale[i]+' cookies';
//     }
//     const liEl = document.createElement('li');
//     articleEl.appendChild(liEl);
//     liEl.textContent='Totel : '+this.totale+' cookies';
//   },
// };


// getRandomNumber();
// Lima.getCastmer();
// Lima.getCookies();
// Lima.render();
