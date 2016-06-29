import React from 'react'
import ReactDOM from 'react-dom'

// REACT MULTILIST VIEW
var MultiListView = React.createClass ({

	render: function(){
		
		return (
			<ItemsContainer itemsColl={this.props.itemsColl} />
		)
	}
})


var ItemsContainer = React.createClass ({
		
	_getJsxArray: function(modelsArray){
		console.log('here comes the models array', modelsArray)
		var jsxArray = []

		modelsArray.forEach(function(model){
			jsxArray.push(<Item itemModel={model} />)
		})

		return jsxArray

	},

	render: function(){
		return (
			<div className="items-container">
				{this._getJsxArray(this.props.itemsColl.models)}
			</div>
		)
		
	}
})

var Item = React.createClass ({

	render: function(){
		console.log('itemColl data...')
		
		var model = this.props.itemModel
		
		return (
			<div class="single-item-container">
				<h2>{model.get('title')}</h2>
				<img src={model.get('Images')[0].url_75x75} />
				<a href={"#listing/" + model.get('listing_id')}>View more</a>
			</div>
		)
	}
})


export default MultiListView