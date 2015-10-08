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
  this.hotels = [];
  this.restaurants = [];
  this.activities = [];
}

Day.prototype.addItem = function(viewObj) {
  var dayCategory = this[viewObj.category];

  if(viewObj.category === 'hotels') dayCategory[0] = viewObj.name
  else dayCategory.push(viewObj.name)

  return this;
}

Day.prototype.removeItem = function(title) {
  var self = this;
  for(var cat in self) {
    if(self[cat].indexOf(title) > -1)  {
      var index = self[cat].indexOf(title)
      self[cat].splice(index, 1);
    }
  }
  return this;
}

Day.prototype.getItemsHTML = function(category) {
  var catArr = this[category];
  var htmlStr = "";
  for (var i=0; i<catArr.length; i++) {
    htmlStr += makeItemHTML(catArr[i]);
  }
  return htmlStr;
}




function makeObj(self) {
  var obj = {};
  obj.name = $(self.parentNode).children('select')[0].value.toString()
  obj.itemClass = self.parentNode.className.toString() + '-item';
  obj.itemDiv = $('.' + obj.itemClass)
  obj.category = obj.itemClass.split('-')[0]
  return obj;
}

function makeItemHTML(name) {
  return '<div class="itinerary-item">\n<span class="title">'+ name +'</span>' +
  '<button class="btn btn-xs btn-danger remove btn-circle x-button">x</button>\n</div>'
}

$( document ).ready(function() {
  var plan = new Plan();
  plan.days.push(new Day());

  var catArray = ['.hotels', '.restaurants', '.activities']
  var clickHandlers = {};
  var xButtonHandlers = {};

  for(var i = 0; i < catArray.length; i++) {
    var category = catArray[i]
    var $thisSelectorDiv = $(category + '-selector');
    var $thisPlusButton = $thisSelectorDiv.children('.btn');
    clickHandlers[category + "-plus-button"] = $thisPlusButton;

    //Plus Button Click Handler
    clickHandlers[category + "-plus-button"].on('click', function() {
      //Get Index of Current Day
      var currentDay = $('.current-day')[0].textContent;
      //Get Midel instance of current Day
      currentDay = plan.getDay(currentDay);
      //Make obj with html data
      var viewObj = makeObj(this)
      //Add item to html list
      viewObj.itemDiv.append(makeItemHTML(viewObj.name))

      xButtonHandlers = $(".x-button");
      xButtonHandlers.on('click', function() {
        var theSpanTitle = $(this).siblings('.title')[0].textContent;
        console.dir(this.parentNode)
        this.parentNode.remove();


        var theDay = $('.current-day')[0].textContent;
        //currentDay.removeItem(theSpanTitle);

      })



      //add item to model
      currentDay.addItem(viewObj);
    })
  }

  //Day Button Click Handler
  $('.day-btn').on('click', function() {
    var newDay = $(this)[0].textContent;
    $('.current-day').removeClass('current-day');
    $(this).addClass('current-day');
    //clear existing html lists
    $('.current-items').empty();
    //print newdays lists
    var $newDayObj = plan.getDay(newDay);

    if ($newDayObj) {
      $('.hotels-selector-item').append($newDayObj.getItemsHTML('hotels'));
      $('.restaurants-selector-item').append($newDayObj.getItemsHTML('restaurants'));
      $('.activities-selector-item').append($newDayObj.getItemsHTML('activities'));
    } else {
      plan.days.push(new Day());
    }
  })


});
