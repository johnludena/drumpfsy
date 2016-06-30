import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'

// REACT MULTILIST VIEW
var MultiListView = React.createClass ({

	render: function(){
		
		return (
			<div className="view multi">
				<Header />
				<ItemsContainer itemsColl={this.props.itemsColl} />
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