 angular.module('membersCard',[])
.config(function($stateProvider){
	$stateProvider
	.state('memberscard',{
		url:'/memberscard',
		controller:'ctrlzx',
		templateUrl:'app/view/mine/memberscard/memberscard.html'
	})
	
})
.controller('ctrlzx',['$scope','$http',function($scope,$http){
    $http.get('http://localhost:8888/app/view/mine/data/mine.json')
	.then(function(res){
      return res.data
    })
    .then(function(res){
        console.log(res)
        $scope.pro = res;
    })
    
}])