'use strict';

const displayFoundHandler = () => {
// debugger;

  console.log('-- action: display found --');
  console.log('found', typeof found, '\n', found);

  if (isItThere === false) {
    alert('no found value');
  } else {
    alert('found: \n' + found);
  }
};
