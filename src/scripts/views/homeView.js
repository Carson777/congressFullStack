import React from 'react'
import STORE from '../store'
import ACTIONS from '../actions'
import Header from './Header'

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
	 			<Header />
	 			<List collection={this.state.legCollection}/>
	 		</div>
	 	)
 	}
})

const List = React.createClass({
	render: function() {
		console.log(this.props.collection)
		var col = this.props.collection
		return (
			<ul>
				{col.map(legModel=> <Cutie model={legModel} />)}
			</ul>
		)
	}
})

const Cutie = React.createClass({
	_addFave: function() {
		ACTIONS.addFave(this.props.model)
	},
	render: function() {
		var model = this.props.model
		var fullName = model.get('first_name') + " " + model.get('last_name')
		return (
			<li>
				<div className="profile">
					<div className="bio">
						<h3>{fullName}</h3>
						<button onClick={this._addFave}>fave!</button>
						<p>title: {model.get('title')} </p>
						<p>state: {model.get('state_name')} </p>
						<p>party: {model.get('party')} </p>
					</div>
				</div>
			</li>
		)
	}
})

export default HomeView
