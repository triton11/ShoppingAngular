var app = angular.module('plunker', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        
    })
    .when("/next", {
      controller : 'basic',
      templateUrl : "Route2.html"
    })
    .when("/check", {
      controller : 'checkout',
      templateUrl : "checkout.html"
    })
});
app.controller('MainCtrl', function($scope, simple) {
  $scope.names = simple.getNames();
  $scope.removeFlav = function () {
		  simple.removeFlavor($scope.names.findIndex(x => x.flavor==$scope.namer))
		};
	$scope.xx = function() {
	  $scope.xxx = simple.total($scope.names);
	};
});
app.controller('basic', function($scope, simple) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
		$scope.insertFlav = function () {
		  simple.insertFlavor($scope.nameadd, $scope.cals)
		};
	});
app.controller('checkout', function($scope, simple) {
  $scope.names = simple.getNames();
  $scope.xx = function() {
  	  $scope.xxx = simple.total($scope.names);
  	  $scope.tax = parseInt($scope.xxx)*0.07;
  	  $scope.tot = parseInt($scope.xxx)+parseInt($scope.tax);
  };
});
app.factory('simple', function() {
  var names = [
    			
    		];
  var factory = {};
  factory.getNames = function() {
    return names;
  }
  factory.insertFlavor = function (flav, cals) {
        names.push({
            flavor: flav,
            cal: cals
        });
    };
  factory.removeFlavor = function (id) {
        names.splice(id, 1);
  }
  factory.total = function(nae) {
        var t = parseInt(0);
        nae.forEach(function(i) {
          t += parseInt(i.cal);
        });
        return t;
  };
  return factory;
});
