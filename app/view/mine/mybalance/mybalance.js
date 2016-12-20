 angular.module('myBalance',[])
.config(function($stateProvider){
	$stateProvider
	.state('mybalance',{
		url:'/mybalance',
		controller:'ctrlsl',
		templateUrl:'app/view/mine/mybalance/mybalance.html'
	})
	
})
.controller('ctrlsl',['$scope','$http',function($scope,$http){
    
    
}])