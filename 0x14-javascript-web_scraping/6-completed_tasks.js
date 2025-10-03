#!/usr/bin/node
const request = require('request');
const counterMap = new Map();
const URL = process.argv[2];

function incrementCounter(userId) {
  if (counterMap.has(userId)) {
    counterMap.set(userId, counterMap.get(userId) + 1);
  } else {
    counterMap.set(userId, 1);
  }
}

request({ url: URL, json: true }, (err, res, data) => {
  if (err) return console.error(err);
  for (const task of data) {
    if (task.completed) {
      incrementCounter(task.userId);
    }
  }
  const obj = Object.fromEntries(counterMap);
  console.log(obj);
});
