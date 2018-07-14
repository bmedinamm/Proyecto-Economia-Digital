import { createStore } from 'redux';
import reducer from './reducers/navigation'

const store = createStore(reducer, {
	mostrarBarra: null
})

export default store;