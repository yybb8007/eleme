angular.module('adress',[])
.config(function($stateProvider){
	$stateProvider
	.state('adress',{
		url:'/adress',
		controller:'ctrlad',
		templateUrl:'app/view/shoppingcart/adress/adress.html'
	})
	.state('back2',{
		url:'/shoppingcart',
		
		templateUrl:'app/view/shoppingcart/shoppingcart.html'
	})
})
.controller('ctrlad',function($scope){
	$scope.change=function(event){
		$(event.target).toggleClass('addd');
	}
	$scope.show=function(){
		$('main>ul:eq(1)>li:last>div:last').toggleClass('jiaa')
	}
})
