$( document ).ready(function() {
  //var $catArray = [$('.hotel-item'), $('.restaurant-item'), $('.activity-item')]
  var catArray = ['.hotel', '.restaurant', '.activity']

  var clickHandlers = {};

  for(var i = 0; i < catArray.length; i++) {
    var category = catArray[i]
    var $thisSelectorDiv = $(category + '-selector');
    //var $thisItemDiv = $(category + '-item');

    var $thisPlusButton = $thisSelectorDiv.children('.btn');
    var $thisSelect = $thisSelectorDiv.children('select');

    clickHandlers[category + "-plus-button"] = $thisPlusButton;

    clickHandlers[category + "-plus-button"].on('click', function() {
      var $innerSelect = $(this.parentNode).children('select')[0].value.toString();
      var itemClass = this.parentNode.className.toString() + '-item';
      var $innerItemDiv = $('.' + itemClass)
      console.dir($innerItemDiv)

      $innerItemDiv.append(makeItemHTML($innerSelect))

    })

  }

  function makeItemHTML(name) {
    return '<div class="itinerary-item">\n<span class="title">'+ name +'</span>' +
    '<button class="btn btn-xs btn-danger remove btn-circle">x</button>\n</div>'
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
