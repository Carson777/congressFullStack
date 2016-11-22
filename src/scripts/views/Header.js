import React from 'react'
import STORE from '../store'

const Header = React.createClass({
	render: function() {
		return (
			<header>
				<h1 className='title'>Legislators</h1>
					<a className='link' href="#home">Home</a>
					<a className='link' href="#faves">Faves</a>
			</header>
			)
	}
})

export default Header