import Backbone from 'backbone'
import _ from 'underscore'

const STORE = _.extend(Backbone.Events,{

	_data: {
		
	},
	getInitialState: function() {
		var legislatorCollection = new MODELS.LegislatorCollection()
			var promise = legislatorCollection.fetch({
				data:{
					'api-key': legislatorCollection._key
				}
			})
			this._set(legislatorCollection)
			console.log(legislatorCollection)
			console.log(this._data)

	},

	_emitChange: function() {
		this.trigger('Update!')
	},

	_get: function(key) {
		return this._data[key]
	},

	_getData: function() {
		return this._data
	},

	_set: function(changeObj) {
		// actually modify _data
			// i need to take the union of my changeObj and my old _data.
		this._data = _.extend(this._data, changeObj)
		// emit change
		this._emitChange()
	}

})

export default STORE