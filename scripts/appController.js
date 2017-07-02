var app = angular.module('AWSapp');
app.controller('appController', ['$scope', '$rootScope', '$location', '$timeout' , function($scope, $rootScope, $location, $timeout) {
	$scope.menuItems=[
		{
			"itemId":"dashboard",
			"icon":"fa-tachometer",
			"label":"Dashboard",
		},
		{
		  "itemId":"subMenu",
		  "icon":"fa-table",
		  "label":"Sub Menu",
		  "subMenu":[{
				"itemId":"file",
				"icon":"fa-file",
				"label":"File",
			},
			{
				"itemId":"edit",
				"icon":"fa-pencil",
				"label":"Edit",
			}]
		}
	];
	$scope.currentParent='dashboard';
	function setWidth(){
		var offsetWidth=$scope.isOpen?15:4;
		var offsetHeight=$('.header').outerHeight()+$('.footer').outerHeight();
		$scope.navStyle={'top':($('.header').outerHeight())+'px','bottom':($('.footer').outerHeight())+'px'};
		$scope.bodyStyle={'width':(100-offsetWidth)+'%',height:($(window).height()-offsetHeight)+'px'};
	};
	setWidth();
	$scope.toggleSideMenu = function(){
		$scope.isOpen = !$scope.isOpen;
		setWidth();
	};
	$scope.gotoLocation = function(item,child,evt){
		if(child){
			evt.stopPropagation();
			$scope.currentChild=item.itemId;
			$location.path('/'+item.itemId);
		}else{
			$scope.currentParent=item.itemId;
			$scope.currentChild='';
			if(item.subMenu){
				$.each($scope.menuItems,function(i,val){
					if(val.subMenu){
						val.subMenu[0]['isExpand']=undefined;
					}
				});
				if(item.subMenu[0]['isExpand'])
					$scope.expandParent=undefined;
				else
					$scope.expandParent=item.itemId;
				item.subMenu[0]['isExpand']=!item.subMenu[0]['isExpand'];
			}
			else{
				$.each($scope.menuItems,function(i,val){
					if(val.subMenu){
						val.subMenu[0]['isExpand']=undefined;
					}
				});
				$scope.expandParent=undefined;
				$location.path('/'+item.itemId);	
			}
		}
	}  
}]);