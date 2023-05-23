import { createHashHistory } from 'history';

const hashHistory = createHashHistory({
  hashType: 'slash' // Set the hash type to "slash" for consistency
});

// Add a listener to the hash change event
hashHistory.listen((location, action) => {
  if (location.hash === '') {
    // Redirect to the default route with "#" at the beginning
    hashHistory.replace('#/');
  }
});

export default hashHistory;
