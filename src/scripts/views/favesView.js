import React from 'react'
import Header from './Header'
import STORE from '../store'
import ACTIONS from '../actions'

const FavesView = React.createClass({
	componentWillMount: function() {
		ACTIONS.fetchFaves()
		STORE.on('Update!', ()=>{
			this.setState(
				STORE._getData()
			)
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
			<div className="faves-view">
				<Header />
				<List collection={this.state.faveCollection} />
			</div>
			)
	}
})
const List = React.createClass({
	 render: function() {
	 	var col = this.props.collection
	 	return (
	 		<ul className='list-view' >
	 			{col.map(cutieModel=> <Cutie model={cutieModel} />)}
	 		</ul>
	 	)
 	}
})
const Cutie = React.createClass({
	_deleteFave: function() {
		ACTIONS.deleteFave(this.props.model)
	},
	render: function() {
		var model = this.props.model,
			fullName = model.get('first_name') + " " + model.get('last_name')
		return (
			<li>
				<div className="profile">
					<div className="bio">
						<h3>{fullName}</h3>
						<button onClick={this._deleteFave}>Unfave</button>
						<p>title: {model.get('title')} </p>
						<p>state: {model.get('state_name')} </p>
						<p>party: {model.get('party')} </p>
					</div>
				</div>
			</li>
		)
	}
})


export default FavesView