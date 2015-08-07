angular.module('pcApp')
  .directive('slideable', function() {
  	return {
  		restrict:'A',
  		link:function(scope,element,attribute) {
  			attribute.$observe('slideable', function(value) {
  				if (value == 'true') {
  					element.slideDown('fast');
  				} else {
  					element.slideUp('fast');
  				}
  			});
  		}
  	};
  });