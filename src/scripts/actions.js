import STORE from './store'

const ACTIONS = {
	changeColor: function() {
		STORE._set({
			color: STORE._get('color') === 'blue' ? 'lime' : 'blue'
		})
	},

	changeYear: function() {
		STORE._set({
			year: STORE._get('year') + 1,
		})
	}
}
export default ACTIONS