import Mock from '../utils/Mock';
import API from './API';

const fetchData = function () {
  return fetch(API.url());
};

const fetchDataIfNeeded = function () {
  const sessionStorageData = sessionStorage.getItem('TS_API');

  if (sessionStorageData) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = JSON.parse(sessionStorageData);
        return resolve(data);
      }, 100);
    });
  }
  return fetchData.call(this);
};

const fetchMockData = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Mock.base) {
        return resolve(Mock);
      }
      return reject();
    }, 0);
  });
};

export { fetchData, fetchDataIfNeeded, fetchMockData };
