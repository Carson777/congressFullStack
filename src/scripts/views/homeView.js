import React from 'react'
import STORE from '../store'
import ACTIONS from '../actions'

const HomeView = React.createClass({

	componentWillMount: function() {
		// when we hear the store announce that it has changed its data,
		// we should update the component's state so that the app will re-render.
		ACTIONS.fetchData()
		STORE.on('Update!', ()=> {
			this.setState(STORE._getData())
		})
	},

	componentWillUnmount: function() {
		STORE.off('Update!')
	},

	getInitialState: function() {
		return STORE._getData()
	},

	render: function() {
	 	
	 	return (
	 		<div className={'home-view'} >
	 			<h3>{this.state.collection}</h3>
	 		</div>
	 	)
 	}
})

export default HomeView
