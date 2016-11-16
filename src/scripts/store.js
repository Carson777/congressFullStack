import Backbone from 'backbone'
import _ from 'underscore'

const STORE = _.extend(Backbone.Events,{

	_data: {
		year: 2016,
		color: 'blue'
	},

	_emitChange: function() {
		this.trigger('ahhh!')
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