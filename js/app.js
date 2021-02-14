'use strict';

const hours=['6am','7am','8am','9am','10am','11am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

const Seattle = {
  name: 'seattle',
  min:23,
  max:65,
  avgCookie:6.3,
  avgCookieSale:[],
  castemerInHour:[],
  totale:0,
  getCookies: function () {
    this.totale=0;
    for(let i=0 ; i<this.castemerInHour.length ; i++){
      this.avgCookieSale.push(Math.floor(this.avgCookie*this.castemerInHour[i]));
      this.totale=this.totale+this.avgCookieSale[i];
    }
  },
  getCastmer:function (){
    for (let i=0 ; i<hours.length; i++){ 
      this.castemerInHour.push(getRandomNumber(this.min,this.max));
    }
  },
  render: function () {
    const container= document.getElementById('place');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for(let i=0 ; i<hours.length; i++){
      const liEl = document.createElement('li');
      articleEl.appendChild(liEl);
      liEl.textContent = hours[i]+' : '+this.avgCookieSale[i]+' cookies';
    }
    const liEl = document.createElement('li');
    articleEl.appendChild(liEl);
    liEl.textContent='Totel : '+this.totale+' cookies';
  },
};

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
getRandomNumber();
Seattle.getCastmer();
Seattle.getCookies();
Seattle.render();

const Tokyo = {
  name: 'Tokyo',
  min:3,
  max:24,
  avgCookie:1.2,
  avgCookieSale:[],
  castemerInHour:[],
  totale:0,
  getCookies: function () {
    this.totale=0;
    for(let i=0 ; i<this.castemerInHour.length ; i++){
      this.avgCookieSale.push(Math.floor(this.avgCookie*this.castemerInHour[i]));
      this.totale=this.totale+this.avgCookieSale[i];
    }
  },
  getCastmer:function (){
    for (let i=0 ; i<hours.length; i++){ 
      this.castemerInHour.push(getRandomNumber(this.min,this.max));
    }
  },
  render: function () {
    const container= document.getElementById('place');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for(let i=0 ; i<hours.length; i++){
      const liEl = document.createElement('li');
      articleEl.appendChild(liEl);
      liEl.textContent = hours[i]+' : '+this.avgCookieSale[i]+' cookies';
    }
    const liEl = document.createElement('li');
    articleEl.appendChild(liEl);
    liEl.textContent='Totel : '+this.totale+' cookies';
  },
};

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
getRandomNumber();
Tokyo.getCastmer();
Tokyo.getCookies();
Tokyo.render();


const Dubai = {
  name: 'Dubai',
  min:11,
  max:38,
  avgCookie:3.7,
  avgCookieSale:[],
  castemerInHour:[],
  totale:0,
  getCookies: function () {
    this.totale=0;
    for(let i=0 ; i<this.castemerInHour.length ; i++){
      this.avgCookieSale.push(Math.floor(this.avgCookie*this.castemerInHour[i]));
      this.totale=this.totale+this.avgCookieSale[i];
    }
  },
  getCastmer:function (){
    for (let i=0 ; i<hours.length; i++){ 
      this.castemerInHour.push(getRandomNumber(this.min,this.max));
    }
  },
  render: function () {
    const container= document.getElementById('place');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for(let i=0 ; i<hours.length; i++){
      const liEl = document.createElement('li');
      articleEl.appendChild(liEl);
      liEl.textContent = hours[i]+' : '+this.avgCookieSale[i]+' cookies';
    }
    const liEl = document.createElement('li');
    articleEl.appendChild(liEl);
    liEl.textContent='Totel : '+this.totale+' cookies';
  },
};

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
getRandomNumber();
Dubai.getCastmer();
Dubai.getCookies();
Dubai.render();

const Paris = {
  name: 'Paris',
  min:20,
  max:38,
  avgCookie:2.3,
  avgCookieSale:[],
  castemerInHour:[],
  totale:0,
  getCookies: function () {
    this.totale=0;
    for(let i=0 ; i<this.castemerInHour.length ; i++){
      this.avgCookieSale.push(Math.floor(this.avgCookie*this.castemerInHour[i]));
      this.totale=this.totale+this.avgCookieSale[i];
    }
  },
  getCastmer:function (){
    for (let i=0 ; i<hours.length; i++){ 
      this.castemerInHour.push(getRandomNumber(this.min,this.max));
    }
  },
  render: function () {
    const container= document.getElementById('place');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for(let i=0 ; i<hours.length; i++){
      const liEl = document.createElement('li');
      articleEl.appendChild(liEl);
      liEl.textContent = hours[i]+' : '+this.avgCookieSale[i]+' cookies';
    }
    const liEl = document.createElement('li');
    articleEl.appendChild(liEl);
    liEl.textContent='Totel : '+this.totale+' cookies';
  },
};

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
getRandomNumber();
Paris.getCastmer();
Paris.getCookies();
Paris.render();

const Lima = {
  name: 'Lima',
  min:2,
  max:16,
  avgCookie:4.6,
  avgCookieSale:[],
  castemerInHour:[],
  totale:0,
  getCookies: function () {
    this.totale=0;
    for(let i=0 ; i<this.castemerInHour.length ; i++){
      this.avgCookieSale.push(Math.floor(this.avgCookie*this.castemerInHour[i]));
      this.totale=this.totale+this.avgCookieSale[i];
    }
  },
  getCastmer:function (){
    for (let i=0 ; i<hours.length; i++){ 
      this.castemerInHour.push(getRandomNumber(this.min,this.max));
    }
  },
  render: function () {
    const container= document.getElementById('place');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for(let i=0 ; i<hours.length; i++){
      const liEl = document.createElement('li');
      articleEl.appendChild(liEl);
      liEl.textContent = hours[i]+' : '+this.avgCookieSale[i]+' cookies';
    }
    const liEl = document.createElement('li');
    articleEl.appendChild(liEl);
    liEl.textContent='Totel : '+this.totale+' cookies';
  },
};

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
getRandomNumber();
Lima.getCastmer();
Lima.getCookies();
Lima.render();