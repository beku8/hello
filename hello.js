angular.module('hello', [])

.directive('hello-world', function() {
	return {
		template: 'Hello world!'
	};
});
