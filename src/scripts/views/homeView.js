import React from 'react'
import STORE from '../store'
import ACTIONS from '../actions'

const HomeView = React.createClass({

	_changeColor: function() {
		ACTIONS.changeColor()
	},

	_changeYear: function(){
		ACTIONS.changeYear()
	},

	componentWillMount: function() {
		// when we hear the store announce that it has changed its data,
		// we should update the component's state so that the app will re-render.
		STORE.on('ahhh!', ()=> {
			this.setState(STORE._data)
		})
	},

	componentWillUnmount: function() {
		STORE.off('ahhh!')
	},

	getInitialState: function() {
		return STORE._data
	},

	render: function() {
	 	var styleObj = {color: this.state.color}
	 	
	 	return (
	 		<div style={styleObj} className={'home-view'} >
	 			<h3>HomeView in the year {this.state.year}</h3>
	 			<button onClick={this._changeColor} >change color</button>
	 			<button onClick={this._changeYear}>next year</button>
	 		</div>
	 	)
 	}
})

export default HomeView
