(function($) {
	apontadorApi = function ( _consumerKey ) {
	
		if ( !_consumerKey ) { return false; }

		var _confBase = {
			'jsconsumerkey' : _consumerKey,
			'type' : 'jsonp'
		};

		var _errors = {
		};
		
		var _methods = {
			doRequest : function ( url, params, callback ) {
				
				if( typeof callback === 'function' ) {
					var jqxhr = $.getJSON( url, params, function ( data ) {
						callback(data);
					});
				} else {
					return false;
				}	
				
				return jqxhr;
			}
		};
		
		var methods = {
			/* SEARCH */
			getPlacesByPois : function( params, callback ) {
				if ( typeof params !== 'object' ) { return false; }
				var p = $.extend({}, params, _confBase);
				return _methods.doRequest("https://api.apontador.com.br/v1/search/places/bypoint?callback=?", p, callback );
			},
			getPlacesByAddress : function( params, callback ) {
				if ( typeof params !== 'object' ) { return false; }
				var p = $.extend({}, params, _confBase);
				return _methods.doRequest("https://api.apontador.com.br/v1/search/places/byaddress?callback=?", p, callback );
			},
			getPlacesByZipCode : function( params, callback ) {
				if ( typeof params !== 'object' ) { return false; }
				var p = $.extend({}, params, _confBase);
				return _methods.doRequest("https://api.apontador.com.br/v1/search/places/byzipcode?callback=?", p, callback );
			},
			getPlacesByBox : function( params, callback ) {
				if ( typeof params !== 'object' ) { return false; }
				var p = $.extend({}, params, _confBase);
				return _methods.doRequest("https://api.apontador.com.br/v1/search/places/bybox?callback=?", p, callback );
			},
			getPlaces : function( params, callback ) {
				if ( typeof params !== 'object' ) { return false; }
				var p = $.extend({}, params, _confBase);
				return _methods.doRequest("https://api.apontador.com.br/v1/search/places?callback=?", p, callback );
			},
			getSugestions : function( params, callback ) {
				if ( typeof params !== 'object' ) { return false; }
				var p = $.extend({}, params, _confBase);
				return _methods.doRequest("https://api.apontador.com.br/v1/suggestions?callback=?", p, callback );
			},
			
			/* POIS */
			getPlace : function( placeId, callback ) {
				if( typeof placeId !== 'string' ) { return false; }
				var p = $.extend({}, _confBase);
				return _methods.doRequest("https://api.apontador.com.br/v1/places/"+placeId+"?callback=?", p, callback );
			},
			getPlacePhotos : function ( placeId, callback ) {
				if( typeof placeId !== 'string' ) { return false; }
				var p = $.extend({}, _confBase);
				return _methods.doRequest("https://api.apontador.com.br/v1/places/"+placeId+"/photos?callback=?", p, callback );
			},
			getPlaceReviews : function( placeId, callback ) {
				if( typeof placeId !== 'string' ) { return false; }
				var p = $.extend({}, _confBase);
				return _methods.doRequest("https://api.apontador.com.br/v1/places/"+placeId+"/reviews?callback=?", p, callback );
			},
			
			/* Categorias */
			getCategories : function ( params, callback ) {
				if ( typeof params !== 'object' ) { params = {}; }
				var p = $.extend({}, params, _confBase);
				return _methods.doRequest("https://api.apontador.com.br/v1/categories/?callback=?", p, callback );
			},
			getSubCategoreis : function ( categoryId, params, callback ) {
				if( typeof categoryId !== 'string' ) { return false; }
				if( typeof params !== 'object' ) { params = {}; }
				var p = $.extend({}, params, _confBase);
				return _methods.doRequest("https://api.apontador.com.br/v1/categories/"+categoryId+"/subcategories?callback=?", p, callback );
			},
			getTopCategories : function( callback ) {
				var p = {};
				return _methods.doRequest("https://api.apontador.com.br/v1/categories/top?callback=?", p, callback );
			}
			
		};
		
		return methods;
		
	};
})(jQuery);
