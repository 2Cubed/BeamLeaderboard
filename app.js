angular.module("BeamApp", ["ngMaterial", "ngMessages"])
  .controller("BeamController", ["$scope", "$http", function($scope, $http) {

    $scope.channels = []

    $scope.getChannels = function() {
      $http({
          method: "GET",
          url: "https://beam.pro/api/v1/channels?order=numFollowers:desc"
        })
        .success(function(data, status) {
          $scope.channels = data
        })
    }

  }]);
