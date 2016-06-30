import React from 'react'
import ReactDOM from 'react-dom'

var Header = React.createClass({

	_handleSearch: function(event) {
		if(event.keyCode === 13) {
			var value = event.target.value
           	console.log('here is the value>>>', value)
           	location.hash = 'search/' + value
		}
	},

	render: function() {
	
		return (
                <div className="header">
                	<div className="inner-wrapper">
	                	<a className="logo" href="#home">Drumpfsy</a>
	                	<input type="text" placeholder="Search all products" onKeyDown={this._handleSearch} id="search" />
                	</div>
                </div>
			)		
	}

})

export default Header