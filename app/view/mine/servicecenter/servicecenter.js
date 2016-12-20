 angular.module('serviceCenter',[])
.config(function($stateProvider){
	$stateProvider
	.state('servicecenter',{
		url:'/servicecenter',
		controller:'ctrl21',
		templateUrl:'app/view/mine/servicecenter/servicecenter.html'
	})
	
})
.controller('ctrl21',['$scope','$http',function($scope,$http){
    
//  $scope.change=function(){
//  	$("main>p:last").get(0).innerHTML="仅显示近一年外卖订单";
//  }
    
}])