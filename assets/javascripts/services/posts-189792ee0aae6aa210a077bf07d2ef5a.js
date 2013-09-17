'use strict';

angular.module('hackdroidApp')
  .factory('Post', function ($resource) {
      return $resource('/hackdroid/rest/posts.json');
  });
