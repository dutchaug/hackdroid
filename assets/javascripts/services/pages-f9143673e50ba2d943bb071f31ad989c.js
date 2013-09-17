'use strict';

angular.module('hackdroidApp')
  .factory('Page', function ($resource) {
      return $resource('/hackdroid/rest/pages.json');
  });
