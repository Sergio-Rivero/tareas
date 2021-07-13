import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// Este root viene del html, si se cambia ahí debe cambiarse en el html también.
// App hace referencia al archivo App.js 

registerServiceWorker();
