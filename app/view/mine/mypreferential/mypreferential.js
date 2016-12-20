 angular.module('myPreferential',[])
.config(function($stateProvider){
	$stateProvider
	.state('mypreferential',{
		url:'/mypreferential',
		controller:'ctrlgh',
		templateUrl:'app/view/mine/mypreferential/mypreferential.html'
	})
	
})
.controller('ctrlgh',['$scope','$http',function($scope,$http){
    $scope.change1=function(){
    	$("nav section:first>a").addClass("nav");
    	$("nav section:eq(1)>a").removeClass("nav");
    	$(".div1").css("display","block");
    	$(".div2").css("display","none");
    }
    $scope.change2=function(){
    	$("nav section:first>a").removeClass("nav");
    	$("nav section:eq(1)>a").addClass("nav");
    	$(".div1").css("display","none");
    	$(".div2").css("display","block");
    }
}])