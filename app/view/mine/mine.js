angular.module('minePage',[])
.config(function($stateProvider){
	$stateProvider
	.state('mine',{
		url:'/mine',
		controller:'ctrl20',
		templateUrl:'app/view/mine/mine.html'
	})
	.state('back1',{
		url:'/mine',
		
		templateUrl:'app/view/mine/mine.html'
	})
})
.controller('ctrl20',function($scope,$http){
	$http.get('http://localhost:8888/app/view/mine/data/mine.json')
	.then(function(res){
      return res.data
    })
    .then(function(res){
        console.log(res)
        $scope.pro = res;
    })
})
