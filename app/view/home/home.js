angular.module('homePage',[])
.config(function($stateProvider){
	$stateProvider
	.state('home',{
		url:'/home',
		controller:'ctrl',
		templateUrl:'app/view/home/home.html'
	})
	.state('back',{
		url:'/home',
		
		templateUrl:'app/view/home/home.html'
	})
	
}).controller('ctrl',function($scope,$http){
	$scope.mySwiper = new Swiper ('.swiper-container', {
   
    // 如果需要分页器
    pagination: '.swiper-pagination',
 
  })  
	  $http.get('http://localhost:8888/app/view/home/data/home.json')
	  .then(function(res){
	  	return res.data;
	  })
	  .then(function(res){
	  	$scope.pro=res;
	  	
	  	return pro;
	  })
	
	
 
})
