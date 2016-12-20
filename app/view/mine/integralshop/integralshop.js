 angular.module('integralShop',[])
.config(function($stateProvider){
	$stateProvider
	.state('integralshop',{
		url:'/myointegralshoprder',
		controller:'ctrl21',
		templateUrl:'app/view/mine/integralshop/integralshop.html'
	})
	
})
.controller('ctrl21',['$scope','$http',function($scope,$http){
    $scope.mySwiper = new Swiper ('.swiper-container', {
	autoplay: 2000,
	loop: true,
    // 如果需要分页器
    pagination: '.swiper-pagination'
    
 
  })
    
}])