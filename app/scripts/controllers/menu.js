'use strict';

/**
 * @ngdoc function
 * @name udaciMealsApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the udaciMealsApp
 */
angular.module('udaciMealsApp')
  .controller("MenuCtrl", function(){
  	this.items = [
  	{
  		id: "indian-bf",
  		name: "gobhi-paratha",
  		img: "images/yeoman.png",
  		calories:440,
  		rating: 3.5,
  	},
  	{
  		id: "indian-dinner",
  		name: " pudi-sabji-halwa",
  		img: "images/yeoman.png",
  		calories: 220,
  		rating: 4.4,
  	},
  	{
  		id: " indian-launch",
  		name: "BHAT DAL SABJI",
  		img:"images/yeoman.png",
  		calories: 200,
  		rating: 5
  	}];

  	this.increament = function(item){
  		item.rating = ((item.rating*10) + 1)/10;
  	}

  	this.decreament = function(item) {
  		item.rating = ( (item.rating*10) - 1)/10;
  	}
  });
