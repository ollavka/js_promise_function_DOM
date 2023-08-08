'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      // eslint-disable-next-line max-len
      resolve(`It was ${eventName} on the element: ${element.nodeName}, id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
  const notification = document.createElement('div');

  notification.className = 'message';
  notification.textContent = message;

  document.body.appendChild(notification);
};

module.exports = {
  waitFor,
  printMessage,
};