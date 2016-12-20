angular.module('mlt',[])
.config(function($stateProvider){
	$stateProvider
	.state('mlt',{
		url:'/mlt',
		controller:'ctrlaa',
		templateUrl:'app/view/home/mlt/mlt.html'
	})
})
.controller('ctrlaa',['$scope','$http',function($scope,$http){

    $http.get('http://localhost:8888/app/view/home/data/11.json')
    .then(function(res){
      return res.data;
        
    })
    .then(function(res){
      
      $scope.shoplist=res;
     
        
    })
    $http.get('http://localhost:8888/app/view/home/data/1_fenlei.json')
    .then(function(res){
        return res.data;

    })
    .then(function(res){
        $scope.shopcount=res;
    })


    


    $scope.show1 = function(){
        $('#fenlei_g').slideToggle(100);
        $('#gary').toggleClass('show');
        
        $('#title_g').toggleClass('show');
        $('#paixu').css('display','none');
        $('#shaixuan').css('display','none');
        
        if($('#btn_fenlei').text()!='分类'){
            $('#btn_fenlei').text('分类');
        }else{
            $('#btn_fenlei').text('麻辣烫');
        }
        $('#btn_fenlei').toggleClass('changeBlue');
        $('#fs>#svg>path').toggleClass('changeSvgColor');
        $('#fs>#svg').toggleClass('changeRotate');
        $('body').toggleClass('hi');

        $('#btn_paixu').removeClass('changeBlue');
        $('#btn_paixu>#svg>path').removeClass('changeSvgColor');
        $('#btn_paixu>#svg').removeClass('changeRotate');
        $('#btn_shaixuan').removeClass('changeBlue');
        $('#btn_shaixuan>#svg>path').removeClass('changeSvgColor');
        $('#btn_shaixuan>#svg').removeClass('changeRotate');
    }
    $scope.show2 = function(){
        $('#gary').toggleClass('show');
        $('#paixu').slideToggle(100);
        $('#title_g').toggleClass('show');
        $('#fenlei_g').css('display','none');
        $('#shaixuan').css('display','none');
        $('#btn_paixu').toggleClass('changeBlue');
        $('#btn_paixu>#svg>path').toggleClass('changeSvgColor');
        $('#btn_paixu>#svg').toggleClass('changeRotate');
        $('body').toggleClass('hi');


        $('#btn_shaixuan').removeClass('changeBlue');
        $('#btn_shaixuan>#svg>path').removeClass('changeSvgColor');
        $('#btn_shaixuan>#svg').removeClass('changeRotate');
        $('#btn_fenlei').removeClass('changeBlue');
        $('#fs>#svg>path').removeClass('changeSvgColor');
        $('#fs>#svg').removeClass('changeRotate');
    }

    $scope.show3 = function(){
        $('#gary').toggleClass('show');
        $('#shaixuan').slideToggle(100);
        $('#title_g').toggleClass('show');
        $('#fenlei_g').css('display','none');
        $('#paixu').css('display','none');
        $('#btn_shaixuan').toggleClass('changeBlue');
        $('#btn_shaixuan>#svg>path').toggleClass('changeSvgColor');
        $('#btn_shaixuan>#svg').toggleClass('changeRotate');
        $('body').toggleClass('hi');

        $('#btn_paixu').removeClass('changeBlue');
        $('#btn_paixu>#svg>path').removeClass('changeSvgColor');
        $('#btn_paixu>#svg').removeClass('changeRotate');
        
    }
    
   $scope.show4 = function(event){
    $(event.target).parent().css('background','white');
    $(event.target).parent().siblings().css('background','#f2f2f2');
   
    
   
    $('.fenlei_right').css('display','none');
    $('.fenlei_right:eq('+$(event.target).parent().index()+')').css('display','block');

    
   
   }
   
    
}])

