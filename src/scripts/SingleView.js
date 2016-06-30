import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'


// REACT SINGLE VIEW


var SingleView = React.createClass ({

	// Render method calls buildTemplate method for painting all of view's HTML
	render: function(){
		console.log('rendering singleview...')
		
		return (
			<div className="view single">
				<Header />
				<SingleContent itemModel={this.props.itemModel} />
			</div>
		)	
		
	},

})

var SingleContent = React.createClass ({
	

	_getPars: function(descr) {
		var ps = [],
			line = ''
		for (var i = 0; i < descr.length; i ++) {
			line += descr[i]
			if (descr[i] === '\n') {
				ps.push(<p>{line}</p>)
				line = ''
			}
		}
		return ps
	},

	render: function() {
		var model = this.props.itemModel

		console.log(model)
		
		return (
			<div className="inner-wrapper single-content">
				<div className="single-item">
					<div className="left-col">
						<img src={model.get('Images')[0].url_570xN} />

					</div>

					<div className="right-col">
						<h1>{model.get('title')}</h1>
						{this._getPars(model.get('description'))}
						<a href={model.get('url')} className="button">Buy it on Etsy.com</a>
					</div>
					
					
				</div>
			</div>
		)
	}

	
})

export default SingleView