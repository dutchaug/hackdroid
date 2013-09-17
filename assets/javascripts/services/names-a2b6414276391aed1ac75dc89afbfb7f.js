'use strict';

angular.module('hackdroidApp')
  .factory('Name', function ($resource) {
      return $resource('/hackdroid/rest/names.json');
  });
