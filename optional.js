angular.module('hello.optional', [])

.directive('optionalWorld', function() {
	return {
		template: 'Optional world!'
	};
});
