import STORE from './store'

const ACTIONS = {
	changeColor: function() {
		STORE._set({
			color: STORE._data.color === 'blue' ? 'lime' : 'blue'
		})
	},

	changeYear: function() {
		STORE._set({
			year: STORE._data.year + 1,
		})
	}
}
export default ACTIONS