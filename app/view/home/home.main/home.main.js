angular.module('homeMain',[])
.config(function($stateProvider){
	$stateProvider
	.state('shopping',{
		url:'/home.main',
		controller:'ctrlss',
		templateUrl:'app/view/home/home.main/home.main.html'
	})
	.state('back3',{
		url:'/home.main',
		
		templateUrl:'app/view/home/home.main/home.main.html'
	})
})
.controller('ctrlss',function($scope,$http){
	$http.get('http://localhost:8888/app/view/home/data/home.mainheader.json')
	.then(function(res){
		
		return res.data
	})
	.then(function(res){
		$scope.pro = res;
		
		return pro;
	})
	$http.get('http://localhost:8888/app/view/home/data/home.main.json')
	.then(function(res){
		
		return res.data
	})
	.then(function(res){
		$scope.pro1 = res;
		
		return pro1;
	})
	
	
		//获取总钱数
		$scope.getallmoney=function(){
			$scope.thing=JSON.parse(localStorage.getItem('data'))||[];
			$scope.allmoney=0;
			$.each($scope.thing, function(i ,v) {
				
				
			$scope.allmoney+=v.count*v.specfoods[0].price;
			});
			$('.money').html($scope.allmoney);
			if($('.money').html()!=0){
				$('footer>ul>li:first-of-type>span').removeClass('buyy');
				$('footer>div').addClass('pay');
			}else{
				$('footer>ul>li:first-of-type>span').addClass('buyy');
				$('footer>div').removeClass('pay');
			}
		}
		
		
		$scope.thingArr=JSON.parse(localStorage.getItem('data'))||[];
		$scope.getallmoney();
		//定义判断数量的属性
		$scope.count=null;
		//定义是否购买的属性
		$scope.buy=null;
		//定义Id
		$scope.Id=null;
		//定义总钱数
		$scope.allmoney=0;
		//店名
		$scope.storename=null;
		
		//购买物品
		$scope.add=function(event){
			
			//获取数量，减的标签
			$scope.spancount=$(event.target).parent().siblings()[4];
			$scope.spanmin=$(event.target).parent().siblings()[5];
			//判断得到的数据是否为空
			if($scope.thingArr.length==0){
				this.item.count=1;
				this.item.Id='ul'+this.item.$$hashKey;
				this.item.buy=true;
				this.item.storename=this.$parent.$parent.$$watchers[13].last;
				
				$scope.thingArr.push(this.item);
				$scope.spancount.innerHTML=this.item.count;
			}else{
				
					if(this.item.buy){
						this.item.count++;
						$scope.spancount.innerHTML=this.item.count;
					}else{
						this.item.count=1;
						this.item.buy=true;
						this.item.Id='ul'+this.item.$$hashKey;
						$scope.thingArr.push(this.item);
						$scope.spancount.innerHTML=this.item.count;
					}
			}
			
			//推送数据
			localStorage.setItem('data',JSON.stringify($scope.thingArr))
			//添加样式
			$($scope.spancount).css('display','block');
			$($scope.spanmin).css('display','block');
			$scope.getallmoney();
		}
		//减少物品数量
		$scope.min=function(event){
		

			$scope.spancount=$(event.target).parent().siblings()[5];
			$scope.spanmin=$(event.target).parent()
			
			for(var k of $scope.thingArr){
				if(this.item.$$hashKey==k.$$hashKey){
					k.count--;
					$scope.spancount.innerHTML=k.count;
					console.log(k.index)
					if(k.count==0){
						//移除数组中count为0的元素
						
						$scope.thingArr.splice(k.index,1)
						console.log($scope.thingArr);
						$($scope.spancount).css('display','none');
						$($scope.spanmin).css('display','none');
						$scope.spancount.innerHTML=k.count;
					}
				}
			}
			
			localStorage.setItem('data',JSON.stringify($scope.thingArr));
			$scope.getallmoney();
		}
		
		
		
	
})
