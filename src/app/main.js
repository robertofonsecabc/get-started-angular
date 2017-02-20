angular
	// defining module
	.module('firstApp',[])
	
	// defining controller
	.controller('firstController',['$scope',function($scope){
		
		console.log('started firstController');
		
		
		$scope.urlList = [
			'https://medium.com/@TK_CodeBear/getting-started-with-angular-part-1-bd448458566e#.8lrxyib5n'
			, 'https://medium.com/@TK_CodeBear/getting-started-with-angular-part-2-routing-9170fcc5c3fc#.ip61f2h6j'
			, 'https://medium.com/@TK_CodeBear/getting-started-with-angular-part-3-building-a-to-do-list-ecf31068ac07#.xg8f811hj'
		];
		 
			
		
		
		
	}]);
