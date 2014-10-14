//scripts.js
//init like this:
// var foo = new ratings(ratings-container)
function Ratings(opts){

    this.container =  document.getElementById("ratings-container") || this.opts.container;
    this.ratingAttr = "data-rating" || this.opts.ratingAttr,
    this.totalRatingElements = this.ratingElements.length,
    this.filled_star_graphic = "filled.png" || this.opts.filled_star_graphic,
    this.half_star_graphic = "half.png" || this.opts.half_star_graphic;
}

Ratings.prototype = {

   renderStars:function(){
    // retrieve the data-src-rating from the DOM el
    // this will be the child of the rating container
    // separate decimal portion by doing num%1 and checking against 0.5

    for(var i=0; i < totalRatingElements; i++){
        console.log(ratingElements[i])
    }

  },

  // get the DOM elements matching the data-rating attribute
  // the idea is that
  getRatingElements: function(attr){
    var matches =[],
        scope = this.container.getElementsByTagName('*'),
        totalNodes = scope.length;

    for(var i=0; i<totalNodes; i++){
        if(scope[i].getAttribute(attr)){
             matches.push(scope[i]);
        }
    }
    return matches;

  }
}
