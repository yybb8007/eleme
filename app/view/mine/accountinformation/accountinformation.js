 angular.module('accountInformation',[])
.config(function($stateProvider){
	$stateProvider
	.state('accountinformation',{
		url:'/accountinformation',
		controller:'ctrl29',
		templateUrl:'app/view/mine/accountinformation/accountinformation.html'
	})
	
})
.controller('ctrl29',['$scope','$http',function($scope,$http){
    $http.get('http://localhost:8888/app/view/mine/data/mine.json')
	.then(function(res){
      return res.data
    })
    .then(function(res){
        console.log(res)
        $scope.pro = res;
    })
    
}])