angular
	// defining module
	.module('firstApp',['ui.router'])
	
	// defining controller
	.controller('firstController',['$scope','$state',function($scope,$state){
		
		// console.log('started firstController');
		
		$scope.menu = {
			Home : 'home'
			, Contact : 'contact' 
		}
		
		$scope.urlList = [
			'https://medium.com/@TK_CodeBear/getting-started-with-angular-part-1-bd448458566e#.8lrxyib5n'
			, 'https://medium.com/@TK_CodeBear/getting-started-with-angular-part-2-routing-9170fcc5c3fc#.ip61f2h6j'
			, 'https://medium.com/@TK_CodeBear/getting-started-with-angular-part-3-building-a-to-do-list-ecf31068ac07#.xg8f811hj'
			, 'https://school.scotch.io/getting-started-with-angularjs-1x'
			, 'http://gabrielfeitosa.com/angularjs-route/'
		];
		
		// Creating function to change router
		$scope.changeState = function(stateName) {
			// console.log( stateName );
			$state.go(stateName);
			$scope.state = stateName; 
		};
		
	}])
	
	
	.controller('homeController',['$scope','$state',function($scope,$state){
		// console.log('accessing home controller');
		
		
	}])
	
	.controller('contactController',['$scope','$state',function($scope,$state){
		// console.log('accessing contact controller');
		
	}])
	
	
	.config(['$stateProvider', '$urlRouterProvider', function( $stateProvider , $urlRouterProvider) {
		
		$urlRouterProvider.otherwise('/');
		
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'app/home/home.html',
				controller: 'homeController'
			})
			.state('contact', {
				url: '/contact',
				templateUrl: 'app/contact/contact.html',
				controller: 'contactController'
			})
			;
	}])
	
	;
