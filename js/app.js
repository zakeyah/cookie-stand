'use strict';
/*
const Seattle = {
  name: 'seattle',
  cookis:0,
  hours:['6am','7am','8am','9am','10am','11am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  getcookies: function (min,max) {
    this.cookies(min,max);
  },
  render: function () {
    const container= document.getElementById('placeSeattle');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.name;
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i=0 ; i<this.hours.length; i++){
      const liEl = document.createElement('li');
      liEl.textContent = this.hours[i];
      ulEl.appendChild(liEl);
    }
    //articleEl.appendChild(ulEl);
  },
};

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
Seattle.render();
console.log(getRandomNumber(23,65));

