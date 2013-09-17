'use strict';

angular.module('hackdroidApp')
  .controller('MainCtrl', function ($scope, Category, Name, Post, Page) {
      $scope.pages = Page.query(function(){
          delete $scope.pages[$scope.pages.length - 1];
      });
      $scope.categories = Category.query(function(){
          delete $scope.categories[$scope.categories.length - 1];
      });
      $scope.names = Name.query(function(){
          delete $scope.names[$scope.names.length - 1];
      });
      $scope.posts = Post.query(function(){
          delete $scope.posts[$scope.posts.length - 1];
      });
  });
