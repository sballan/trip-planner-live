var Plan = function() {
  this.days = [];
}

Plan.prototype.getDay = function(dayNum) {
  return this.days[dayNum-1];
}

Plan.prototype.addDay = function() {
  this.days.push(new Day());
}

var Day = function() {
  this.hotel = null;
  this.restaurants = [];
  this.activities = [];
}

Day.prototype.addHotel = function(name) {
  this.hotel = name;
  return this;
}

Day.prototype.addRestaurant = function(name) {
  this.restaurants.push(name);
  return this;
}

Day.prototype.addActivity = function(name) {
  this.activities.push(name);
}

Day.prototype.removeHotel = function(name) {
  this.hotel = null;
  return this;
}

Day.prototype.removeRestaurant = function(name) {
  var index = this.restaurants.indexOf(name);
  this.restaurants.splice(index, 1);
  return this;
}

Day.prototype.removeActivity = function(name) {
  var index = this.activities.indexOf(name);
  this.activities.splice(index, 1);
  return this;
}






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

});

function makeItemHTML(name) {
  return '<div class="itinerary-item">\n<span class="title">'+ name +'</span>' +
  '<button class="btn btn-xs btn-danger remove btn-circle">x</button>\n</div>'
}
