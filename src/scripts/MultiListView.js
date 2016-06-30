import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'

// REACT MULTILIST VIEW
var MultiListView = React.createClass ({

	render: function(){
		
		return (
			<div className="view multi">
				<Hero />
				<ItemsContainer itemsColl={this.props.itemsColl} />
			</div>
		)
	}
})

var Hero = React.createClass({

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
	                	<div id="hero">

	                		<div id="text">
	                			<h1 className="jumbo">Make Etsy great again.</h1>
	                			<p>Buy hand-made American goods and show your support for the future President of the United States (and secret alien hiding inside an ill-fitting human suit), Mr. Donald J. Trump.</p>

	                			<p>Why? Because ‘merica. That’s f*cking why.</p>
	                		</div>

	                		<div id="card">
	                			<img src="/images/trump-card.png" />
	                		</div>

	                	</div>
                	</div>
                </div>
			)		
	}

})



var ItemsContainer = React.createClass ({
		
	_getJsxArray: function(modelsArray){
		var jsxArray = []

		modelsArray.forEach(function(model){
			jsxArray.push(<Item itemModel={model} />)
		})

		return jsxArray

	},

	render: function(){
		return (
			<div className="inner-wrapper multi-content">
				{this._getJsxArray(this.props.itemsColl.models)}
			</div>
		)
		
	}
})

var Item = React.createClass ({

	render: function(){
		
		var model = this.props.itemModel

		var title = model.get('title')
		
		return (
			<div className="item-container">
				<div className="img-container">
					<a href={"#listing/" + model.get('listing_id')}>
						<img src={model.get('Images')[0].url_570xN} />
					</a>

				</div>
				
				<h2>{title.substr(0, 70)}...</h2>
			</div>
		)
	}
})


export default MultiListView