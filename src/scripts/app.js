import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import MultiListView from './MultiListView'
import SingleView from './SingleView'


const app = function() {

	console.log('this is backbone')
	console.log(Backbone)
	

	// ETSY BACKBONE COLLECTION
	var EtsyCollection = Backbone.Collection.extend({
		// model: EtsyModel,

		url: 'https://openapi.etsy.com/v2/listings/active.js',

		_key: 'loicqk56ptajxpl0j4omq676',

		parse: function(rawJSON) {
			console.log(rawJSON)
			return rawJSON.results

		}

	})

	// ETSY BACKBONE MODEL
	var EtsyModel = Backbone.Model.extend({
		
		// el: '#app-wrapper',

		url: function() {
			return 'https://openapi.etsy.com/v2/listings/' + this.listingId + '.js'
		},

		_key: 'loicqk56ptajxpl0j4omq676',	

		parse: function(rawJSON) {
			console.log('etsy model rawJSON results...')
			console.log(rawJSON.results[0])
			return rawJSON.results[0]
		},

		initialize: function(id) {
			this.listingId = id
		}

	})

	// ETSY BACKBONE COLLECTION
	var EtsyCollection = Backbone.Collection.extend({
		// model: EtsyModel,

		url: 'https://openapi.etsy.com/v2/listings/active.js',

		_key: 'loicqk56ptajxpl0j4omq676',

		parse: function(rawJSON) {
			console.log(rawJSON)
			return rawJSON.results
		}
	})

	


	// = HEADER COMPONENT =
	var Header = React.createClass ({
		render: function(){
			return (
				<div className="header-wrapper">
					<hr />
					<p>This is the header wrapper!</p>
				</div>
			)
		}
	})

	// = HEADER COMPONENT =
	var Body = React.createClass ({
		render: function(){
			console.log('this is the props data on the body...')
			console.log(this.props)

			var modelsArray = this.props.itemsColl.models

			var emptyArr = []

			for (var i = 0; i < modelsArrayr.length; i++) {
				// emptyArr.push(<Item model={modelsAray[i]} /> )
				emptyArr.push(<p>cosimo # {i} </p> )

			}

			console.log('empty array...')
			console.log(emptyArr)

			return (
				<div className="content-wrapper">
					{emptyArr}
				</div>
			)
		}
	})



	// ETSY BACKBONE CONTROLLER
	var EtsyController = Backbone.Router.extend({
	
		routes: {
			'home':'handleHome',
			'search/:keyword':'handleSearch',
			'listing/:listingId':'handleSingleListing',
			'*default':'redirectHome'
		},

		handleHome: function(){

			console.log('This is the home view')
			
			// Creating new instance of EtsyCollection
			var homeCollection = new EtsyCollection()
		
			// Fetching API url from Constructor and then passing the promise to the Home view
			homeCollection.fetch({
				dataType: 'jsonp',
				data: {
					api_key: homeCollection._key,
		            includes: 'Images,Shop',
		            processData: true,
		            limit: 50,

				}
			}).then(function(){
				
				// Mounting React DOM to browser DOM
				ReactDOM.render(<MultiListView itemsColl={homeCollection} />, document.querySelector('.container'))
				
				// var homeView = new MultiListView(homeCollection)
				// homeView._render()


			})

		},

		handleSearch: function(keyword) {

			var searchColl = new EtsyCollection()

			searchColl.fetch({
				dataType: 'jsonp',
				data: {
					api_key: searchColl._key,
		            includes: 'Images,Shop',
		            processData: true,
		            limit: 24,
		            keywords: keyword,
				}
			}).then(function(apiResponse){
				console.log('api response from search:')
				console.log(apiResponse)

				ReactDOM.render(<MultiListView itemsColl={searchColl} />, document.querySelector('.container'))

				// var searchView = new MultiListView(searchColl)
				// searchView._render()
			})

			
		},

		handleSingleListing: function(listingId) {
			console.log('This is the listing view!')

			var singleItemModel = new EtsyModel(listingId)

			singleItemModel.fetch({
				dataType: 'jsonp',
				data: {
					api_key: singleItemModel._key,
		            includes: 'Images,Shop',
		            processData: true,

				}
			}).then(function(){
				
				// Mounting React DOM to browser DOM
				ReactDOM.render(<SingleView itemModel={singleItemModel} />, document.querySelector('.container'))
				// var singleView = new SingleView(singleItemColl)
				// singleView._render()
			})

		},

		redirectHome: function() {
			console.log('you typed in a hash that doesnt exist and will be sent back to home')
			location.hash = 'home'
		},

		initialize: function() {
			Backbone.history.start()
		}


	})

	// Calling Backbone router
	var rtr = new EtsyController()

}



app()