 angular.module('myOrder',[])
.config(function($stateProvider){
	$stateProvider
	.state('myorder',{
		url:'/myorder',
		controller:'ctrlnki',
		templateUrl:'app/view/mine/myorder/myorder.html'
	})
	
})
.controller('ctrlnki',['$scope','$http',function($scope,$http){
    $scope.change=function(){
    	$("main>p:last").get(0).innerHTML="仅显示近一年外卖订单";
    }
    
}])