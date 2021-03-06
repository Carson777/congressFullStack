import Backbone from 'backbone'

export const FaveModel = Backbone.Model.extend({
	urlRoot: '/api/faves',
	idAttribute: '_id'
})

export const FaveCollection = Backbone.Collection.extend({
	url: '/api/faves',
	model: FaveModel
})

export const LegislatorCollection = Backbone.Collection.extend({
	url: 'https://congress.api.sunlightfoundation.com/legislators',
	parse: function(rawApiResponse) {
		return rawApiResponse.results
	},
	_key: '0e85724a8f924c6aba8bd576df364eb7'
})