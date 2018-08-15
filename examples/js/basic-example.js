(function () {
  'use strict';

  angular.module('demoApp')
    .controller('BasicExampleCtrl', ['$scope', '$timeout', function ($scope, $timeout) {

      $scope.removeStep = function (scope, title) {
        if (window.confirm('Remove ' + title + '?')) {
          scope.remove();
        }
      };

      $scope.init = function() {
          $timeout(function() {
            document.getElementById('flow-view').scrollIntoView({ inline: 'center' });
          });
      }

      $scope.hasChildNodes = function(list) {

          var $list = jQuery(list.$element[0]);
          $list.find('.not-first').removeClass('not-first');
          $list.find(".angular-ui-tree-placeholder, .angular-ui-tree-node").eq(0).addClass('not-first');
          var hasChildNodes = $list.find(".angular-ui-tree-placeholder, .angular-ui-tree-node").length > 1;

          delete list.$element[0].style.padding;

          if (hasChildNodes) {
            list.$element[0].style.padding = '13px 0';
          }

          return hasChildNodes;
      };

      $scope.dataStore = [{
        'id': 1,
        'title': 'Add Repository'
      }, {
        'id': 2,
        'title': 'Build Image'
      }, {
        'id': 3,
        'title': 'Run Unit Test'
      }, {
        'id': 4,
        'title': 'Parallel Step',
        'nodes': []
      }, {
        id: 6,
        title: 'Deploy to Kubernetes',
        'nodrop': true
      }, {
        'id': 8,
        'title': 'Free Step'
      }, {
        'id': 9,
        'title': 'One More Step'
      }, {
        'id': 10,
        'title': 'Hello World Step'
      }, {
        'id': 11,
        'title': 'Send Mail Step'
      }, {
        'id': 12,
        'title': 'Good Step'
      }];

      $scope.data = [];

      // $scope.data = [{
      //   'id': 1,
      //   'title': 'Add Repository'
      // }, {
      //   'id': 2,
      //   'title': 'Build Image'
      // }, {
      //   'id': 3,
      //   'title': 'Run Unit Test'
      // }, {
      //   'id': 4,
      //   'title': 'Parallel Step',
      //   'nodes': [{
      //     id: 5,
      //     title: 'Push To Repo',
      //     'nodrop': true
      //   },
      //   {
      //     id: 7,
      //     title: 'Send Message to Slack'
      //   }]
      // }, {
      //   id: 6,
      //   title: 'Deploy to Kubernetes',
      //   'nodrop': true
      // }];

    }]);

}());
