
angular.module('search', [])
.config(function($stateProvider){
	$stateProvider
	.state('search',{
		url:'/search',
		controller:'ctrl77',
		templateUrl:'app/view/home/search/search.html'
	})
})
.controller('ctrl77', function($scope){
	var searchArr = [];
	
		var k =0;
	$scope.search = function(){

		
			
		if($('#sousuo').val()){
			localStorage.setItem(k,$('#sousuo').val());
			k++;
			
		}
		searchArr.push($('#sousuo').val());
				
				
	
		$scope.searchArr = searchArr;
		console.log($scope.searchArr);
		if($scope.searchArr.length!=0){
			$('section').css('display','block');
		}

		$('#sousuo').val('');

     



		$scope.del = function(event){
		$(event.target).parent().remove();
		
		$scope.searchArr.splice($(event.target).prev().index(),1);
		

	}

	}

	

	$scope.qingkong = function(){
		$('section').css('display','none');
		localStorage.clear();
		searchArr = [];
	}
	
})