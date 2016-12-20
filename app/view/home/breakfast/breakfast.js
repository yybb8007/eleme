 angular.module('homeBreakfast',[])
.config(function($stateProvider){
	$stateProvider
	.state('breakfast',{
		url:'/breakfast',
		controller:'ctrl5',
		templateUrl:'app/view/home/breakfast/breakfast.html'
	})
})
.controller('ctrl5',['$scope','$http',function($scope,$http){
    $http.get('http://localhost:8888/app/view/home/data/home.breakfastaddress.json')
    .then(function(res){
      return res.data
    })
    .then(function(res){
        console.log(res)
        $scope.pro = res;
    });
    $scope.change=function(){
    	$(".address").toggleClass('address1');
    	$(".div1").toggleClass("div11");
    	$(".div2").toggleClass("div22");
    	$("nav .span1").toggleClass("span11");
    };
    $scope.change1=function(){
    	$(".div").css("display","none");
    	$(".divv").css("display","block");
    };
    $scope.change2=function(){
    	$(".divv").css("display","none");
    	$(".div").css("display","block");
    };
    $scope.change3=function(){
    	$scope.name=$(this).get(0).$$watchers[0].last;
    	$("nav>div:first>span:first").get(0).innerHTML=$scope.name;
    	$(".address").toggleClass('address1');
    	$(".div1").toggleClass("div11");
    	$(".div2").toggleClass("div22");
    	$("nav .span1").toggleClass("span11");
    }
    
}])