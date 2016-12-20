 angular.module('homeShop',[])
.config(function($stateProvider){
	$stateProvider
	.state('shop',{
		url:'/shop',
		controller:'ctrl4',
		templateUrl:'app/view/home/shop/shop.html'
	})
})
.controller('ctrl4',['$scope','$http',function($scope,$http){
    $http.get('http://localhost:8888/app/view/home/data/home.shop.json')
    .then(function(res){
      return res.data
    })
    .then(function(res){
//      console.log(res)
        $scope.pro = res;
        
    })
    
    $http.get('http://localhost:8888/app/view/home/data/home.shopnav.json')
    .then(function(res){
      return res.data
    })
    .then(function(res){
        console.log(res)
        $scope.pro1 = res;
    })
    
    $scope.change1=function(){
    	$("nav>section:first").toggleClass("nav1");
    	$("nav>section:first>div").toggleClass("div1");
    	$("nav>section:first>span:eq(1)").toggleClass("span1");
    	if($('nav>section:first>span:first').text()!='分类'){
            $('nav>section:first>span:first').text('分类');
        }else{
            $('nav>section:first>span:first').text('商品超市');
        }
    	$("body").toggleClass("body");
    }
    $scope.change2=function(){
    	$("nav>section:eq(1)").toggleClass("nav2");
    	$("nav>section:eq(1)>div").toggleClass("div2");
    	$("nav>section:eq(1)>span:eq(1)").toggleClass("span2");
    	$("body").toggleClass("body");
    }
    $scope.change3=function(){
    	$("nav>section:eq(2)").toggleClass("nav3");
    	$("nav>section:eq(2)>div").toggleClass("div3");
    	$("nav>section:eq(2)>span:eq(1)").toggleClass("span3");
    	$("body").toggleClass("body");
    }
    $scope.show=function(event){
		console.log($(event.target));
		$(event.target).parent().siblings().css('background','#f2f2f2');
		$(event.target).parent().css('background','white');
		$(event.target).parent().siblings().children().children('div').css('display','none');
		$(event.target).parent().children().children('div').css('display','block');
	}
}])