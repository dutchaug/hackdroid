'use strict';

angular.module('hackdroidApp')
  .factory('Category', function ($resource) {
      return $resource('/hackdroid/rest/categories.json');
  });
