import { async } from 'regenerator-runtime';
import { TIME_OUT_SEC } from './config';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(
        new Error(`Request took too long! Timeout after ${TIME_OUT_SEC} second`)
      );
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const res = await Promise.race([fetch(url), timeout(10)]);
    const data = await res.json();

    if (!res.ok) {
      throw new Error(`${res.statusText} (${res.status}) ${data.message}`);
    }
    return data;
  } catch (error) {
    throw error;
  }
};
