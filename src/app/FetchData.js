import Mock from '../utils/Mock';
import API from './API';

let fetchData = function() {
  return fetch(API.url());
};

let fetchDataIfNeeded = function() {
  if (localStorage.getItem('TS_API')) {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        let data = JSON.parse(localStorage.getItem('TS_API'));
        return resolve(data);
      }, 100);
    });
  } else {
    return fetchData.call(this);
  }
};

let fetchMockData = function() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      if (Mock.base) {
        return resolve(Mock);
      } else {
        return reject();
      }
    }, 0);
  });
};

export { fetchData, fetchDataIfNeeded, fetchMockData };
