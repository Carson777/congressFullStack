import STORE from './store'
import {LegislatorCollection} from "./models"

const ACTIONS = {
	fetchData: function(){
		console.log('yo')
		var l = new LegislatorCollection()
		l.fetch({
			data: {
				apikey: l._key
			}
		}).then(function(){
			STORE._set({
				_data: l
			})
		})
	}
}
export default ACTIONS