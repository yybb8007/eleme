angular.module('fastfood',[])
.config(function($stateProvider){
	$stateProvider
	.state('fastfood',{
		url:'/fastfood',
		controller:'ctrl100',
		templateUrl:'app/view/home/easy/easy.html'
	})
})
.controller('ctrl100',function($scope,$http){
	$http.get('http://localhost:8888/app/view/home/data/easy.json')
	.then(function(res){
		return res.data
	})
	.then(function(res){
		$scope.pro=res;
		console.log(res)	
	})
	$http.get('http://localhost:8888/app/view/home/data/home.fresh.json')
	.then(function(res){
		return res.data
	})
	.then(function(res){
		$scope.pro1=res;
	})
	$scope.left=function(){
		$('.big').slideToggle(100);
		$('.img1').toggleClass("sanjiao");
		$('.f1').toggleClass('f2');
		$('.menu1').css('display','none')
		$('.big').css('display','block')
		$('.menu2').css('display','none')
		$('.img3').removeClass('imgs')
		$('.img2').removeClass('imgs2')
		$('.f5').removeClass('f6');
		$('.f3').removeClass('f4');
		
	}
	$scope.choose=function(){
		$(".menu2").fadeToggle() 
		$('.img3').toggleClass('imgs')
		$('.f5').toggleClass('f6');
		$('.menu1').css('display','none')
		$('.only1').css('display','block')
		$('.big').css('display','none')
		$('.img1').removeClass('sanjiao')
		$('.img2').removeClass('imgs2')
		$('.f1').removeClass('f2');
		$('.f3').removeClass('f4');
		
		
		
	}
	$scope.rank=function(){
		$('.menu1').fadeToggle()
		$('.img2').toggleClass('imgs2')
		$('.f3').toggleClass('f4');
		$('.menu2').css('display','none')
		$('.only1').css('display','block')
		$('.big').css('display','none')
		$('.img3').removeClass('imgs')
		$('.img1').removeClass('sanjiao')
		$('.f5').removeClass('f6');
		$('.f1').removeClass('f2');
		
	}
})
