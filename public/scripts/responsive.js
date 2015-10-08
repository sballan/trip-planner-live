console.log("IM BEING LOADEDDD")

$( document ).ready(function() {
  //var $catArray = [$('.hotel-item'), $('.restaurant-item'), $('.activity-item')]
  var catArray = ['.hotel', '.restaurant', '.activity']

  var clickHandlers = {};

  for(var i = 0; i < catArray.length; i++) {
    var category = catArray[i]
    var $thisDiv = $(category + '-selector');
    var $thisPlusButton = $thisDiv.children('.btn');
    var $thisSelect = $thisDiv.children('select');

    clickHandlers[category + "-plus-button"] = $thisPlusButton;

    clickHandlers[category + "-plus-button"].on('click', function() {
      var $innerSelect = $(this.parentNode).children('select')[0].value.toString();

      console.log($innerSelect);


    })



  }






  // $hotelDiv.children(".btn").on('click', function() {
  //
  // })
  //
  // $restaurantDiv.children(".btn").on('click', function() {
  //
  // })
  //
  // $activityDiv.children(".btn").on('click', function() {
  //
  // })

















});
