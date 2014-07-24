angular.module('hello.bye', [])

.directive('byeWorld', function() {
	return {
		template: 'Bye world!'
	};
});
