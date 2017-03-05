function counter(action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        type: 'INCREMENT'
      };
    case 'DECREMENT':
      return {
        type: 'DECREMENT'
      };

  }
}

export default function ComicAction(id, action) {
  switch (id) {
    case '':
      break;
    default:
      return counter(action);
  }
}
