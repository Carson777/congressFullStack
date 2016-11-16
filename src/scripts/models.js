import Backbone from 'backbone'

export const LegislatorCollection = Backbone.Collection.extend({
	url: 'https://congress.api.sunlightfoundation.com/legislators',
	_key: '0e85724a8f924c6aba8bd576df364eb7'
})