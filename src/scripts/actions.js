import STORE from './store'
import {LegislatorCollection,FaveModel,FaveCollection} from "./models"

const ACTIONS = {
	addFave: function(cutieMod) { 
		var faveMod = new FaveModel(cutieMod.attributes)
		faveMod.save()
			.done(()=>alert(cutieMod.get('first_name') + ' saved'))
			.fail(()=>alert(cutieMod.get('first_name') + ' save failed'))
	},
	fetchFaves: function() {
		var f = new FaveCollection()
		f.fetch().then(
			function(){
				STORE._set({
					faveCollection: f
				})
			},
			function(err) {
				alert('error fetching')
				console.log(err)
			}
		)
	},
	deleteFave: function(model) {
		model.destroy()
			.done(()=>alert(model.get('first_name') + 'deleted!'))
			.fail(()=>alert(model.get('first_name') + 'delete failed'))
		STORE._emitChange()
	},
	fetchData: function(){
		var l = new LegislatorCollection()
		l.fetch({
			data: {
				apikey: l._key
			}
		}).then(function(){
			STORE._set({
				legCollection: l
			})
		})
	}
}
export default ACTIONS