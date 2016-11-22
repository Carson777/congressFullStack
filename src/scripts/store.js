import Backbone from 'backbone'
import _ from 'underscore'
import {LegislatorCollection,FaveCollection} from "./models"

const STORE = _.extend(Backbone.Events,{

	_data: {
		legCollection: new LegislatorCollection(),
		faveCollection: new FaveCollection()
	},
	_emitChange: function() {
		console.log('RELOADING')
		console.log(this)
		console.log(this._data)
		this.trigger('Update!')
	},

	_get: function(key) {
		return this._data[key]
	},

	_getData: function() {
		return this._data
	},

	_set: function(changeObj) {
		// modifying/ updating data in STORE
		this._data = _.extend(this._data, changeObj)
		this._emitChange()
	}

})

export default STORE