angular.module('TemplateProject',['ui.router','homePage','homeMain','homeNicefood','friut','muchmoney','shoppingCart','time','new','fastfood','liaoli','hamburger','flowerCake','homeSweetfood','homeShop','homeBreakfast','bzzd','cxc','mlt','psym','adress','search','integralShop','membersCard','myBalance','myIntegral','myOrder','myPreferential','serviceCenter','minePage'])
.config(function($stateProvider,$urlRouterProvider){
	
	$urlRouterProvider.otherwise('/home')
	
	
})


