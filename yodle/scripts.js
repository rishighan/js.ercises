//scripts.js
//init like this:
// var foo = new ratings(ratings-container)
var ratings =  function(options){

    var container =  container || options.container,
        rating_number = rating_number || options.rating_number,
        filled_star_graphic = "filled.png" || options.filled_star_graphic,
        half_star_graphic = "half.png" || options.half_star_graphic;

  renderStars: function(){
    //logic
    // retrieve the data-src-rating from the DOM el
    // this will be the child of the rating container
    //separate decimal portion by doing num%1 and checking against 0.5
  }
}