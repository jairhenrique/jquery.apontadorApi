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
				
				$.getJSON( url, params, function ( data ) {
					if( typeof callback === 'function' ) {
						callback(data);
			        }
				});
				
			},
			
			hasCallback : function ( callback ) {
				if( typeof callback === 'function' ) {
					return true;
		        }
				return false;
			}
			
		};
		
		var methods = {
			getSugestions : function( params, callback ) {
				
				if ( typeof params !== 'object' ) { return false; }

				var p = $.extend({}, params, _confBase);
				
				if ( _methods.hasCallback( callback ) ) {
					_methods.doRequest("https://api.apontador.com.br/v1/suggestions?callback=?", p, callback );
				} else {
					return false;
				}
				
				return true;
			},
			getPlaces : function( params, callback ) {
				
				if ( typeof params !== 'object' ) { return false; }
				
				var p = $.extend({}, params, _confBase);
				
				if ( _methods.hasCallback( callback ) ) {
					_methods.doRequest("https://api.apontador.com.br/v1/search/places?callback=?", p, callback );
				} else {
					return false;
				}
				
				return true;
			}
			
			
		};
		
		return methods;
		
	};
})(jQuery);