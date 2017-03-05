import React from 'react';

const initialState = {};

function counter(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state;
      break;
    default:
      return state;
  }
}

export default function ComicReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return counter(state, action);
      break;
    default:
      return state;
  }
}
