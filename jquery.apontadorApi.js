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
			}
		};
		
		return methods;
		
	};
})(jQuery);