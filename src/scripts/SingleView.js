import React from 'react'
import ReactDOM from 'react-dom'

// REACT SINGLE VIEW

var SingleView = React.createClass ({

	// Render method calls buildTemplate method for painting all of view's HTML
	render: function(){
		console.log('single props >>>',this.props.itemModel)

		var model = this.props.itemModel
		
		return (
			<div className="articlesView">
				<h2>{model.get('title')}</h2>
				<p>{model.get('description')}</p>
				<img src={model.get('Images')[0].url_570xN} />

			</div>
		)
	},


})

export default SingleView