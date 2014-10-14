// scripts.js
// Rishi Ghan
// init like this:
// var foo = new Ratings(opts)
function Ratings(opts){

    // config
    this.container =  document.getElementById("ratings-container") || this.opts.container;
    this.ratingAttr = "data-rating" || this.opts.ratingAttr,
    // this.totalRatingElements = this.ratingElements.length,
    this.filled_star_graphic = "filled.png" || this.opts.filled_star_graphic,
    this.half_star_graphic = "half.png" || this.opts.half_star_graphic,
    this.rating_dom_el = "<img/>";
}

Ratings.prototype = {

   renderStars:function(){
    // retrieve the data-src-rating from the DOM el
    // this will be the child of the rating container

    // get the elem array
    var elemArray = this.getRatingElements(this.ratingAttr);
    //console.log(elemArray)

    for(var i=0, n=elemArray.length; i < n; i++){

        //console.log(elemArray[i].getAttribute(this.ratingAttr));
        for( var k=0; k < Math.floor(elemArray[i].getAttribute(this.ratingAttr)); k++){
            //full stars
            this.rating_dom_el.attr('src') = this.filled_star_graphic;
            elemArray[i].appendChild(this.rating_dom_el);

        }

        // separate decimal portion by doing num%1 and checking against 0.5
        if(Number(elemArray[i].getAttribute(this.ratingAttr))%1===0.5){
            //half star
        }
    }

  },

  // get the DOM elements matching the data-rating attribute
  // return an array of positive matches
  getRatingElements: function(attr){
    var matches =[],
        scope = this.container.getElementsByTagName('*'),
        totalNodes = scope.length;

    for(var i=0; i<totalNodes; i++){
        if(scope[i].getAttribute(attr)){
             matches.push(scope[i]);
        }
    }
    // elements with data-rating attribute
    return matches;

  }
}





