'use strict';

angular.module('openshiftConsole')
  .controller('LandingPageController', function ($scope, Constants, DataService, Navigate) {

    $scope.saasOfferingsTitle = "What Do You Want to Build?";
    $scope.saasOfferings = Constants.SAAS_OFFERINGS;

    $scope.navToProject = function(project) {
      Navigate.toProjectOverview(project.metadata.name);
    };

    $scope.navToProjectList = function() {
      Navigate.toProjectList();
    };

    DataService.list({
      group: 'servicecatalog.k8s.io',
      resource: 'serviceclasses'
    }, $scope).then(function(serviceClasses) {
      $scope.serviceClasses = serviceClasses.by('metadata.name');
    });

    DataService.list('imagestreams', {namespace: 'openshift'}).then(function(resp) {
      $scope.imageStreams = resp.by('metadata.name');
    });
  });
