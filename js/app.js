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
  thhEl.textContent='location totals';
}
header();

function Salse (name,min,max,avg){
  this.name = name;
  this.min=min;
  this.max=max;
  this.avg=avg;
  this.avgCookieSale=[];
  this.totale=0;
}
Salse.prototype.getCookies= function (){
  for (let i=0 ; i <hours.length ; i++){
    this.avgCookieSale.push(Math.floor(getRandomNumber(this.min,this.max)*this.avg));
    this.totale+= this.avgCookieSale[i];
    totalePerHour[i]+=this.avgCookieSale[i];
  }

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
  // this.totale = 0;
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

const form= document.getElementById("form");
form.addEventListener('submit',function (event) {
  event.preventDefault();
  const name=event.target.name.value;
  const min=event.target.min.value;
  const max=event.target.max.value;
  const avg=event.target.avg.value;
  
  
  const userInput= new Salse(name,min,max,avg);
  const footerEl = document.getElementById('footer');
  footerEl.remove();
  userInput.getCookies();
  userInput.render();
  form.reset();
  footer();
  
});



function footer (){
  container.appendChild(tableEl);
  const trEl = document.createElement('tr');
  trEl.setAttribute('id','footer');
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








