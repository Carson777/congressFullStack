import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import HomeView from './views/homeView'
import FavesView from './views/favesView'
import Models from './models.js'
import STORE from './store.js'


const app = function() {
	const CongressRouter = Backbone.Router.extend({
		routes: {
			home: 'showHome',
			faves: 'showFaves',
			"*default": 'redirect'
		},

		showFaves: function() {
			ReactDOM.render(<FavesView />, document.querySelector('.container'))
		},

		showHome: function() {
			
			ReactDOM.render(<HomeView />, document.querySelector(".container"))
		},

		redirect: function() {
			location.hash = "home"
		},

		initialize: function() {
			Backbone.history.start()
		}
	})

	new CongressRouter()
}

app()