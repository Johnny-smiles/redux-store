// import redux and create global store. 
import { createStore } from 'redux';
import reducers from './reducers';
// make visiable to rest of app
export default createStore(reducers);