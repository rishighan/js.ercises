// scripts.js
// Rishi Ghan

// init like this:
// var foo = new Ratings(opts)


// Function to attach our function to the DOM, upon load
function addEvent(to, type, fn){
    if(document.addEventListener){
        to.addEventListener(type, fn, false);
    } else if(document.attachEvent){
        to.attachEvent('on'+type, fn);
    } else {
        to['on'+type] = fn;
    }
};


addEvent(window, 'load', function(){

function Ratings(opts){
    // config
    this.container              =  document.body || this.opts.container;
    this.ratingAttr             = "data-rating" || this.opts.ratingAttr,
    this.ratingMax              = 5 || this.opts.ratingMax,
    this.filled_star_graphic    = "img/filled-star.jpg" || this.opts.filled_star_graphic,
    this.half_star_graphic      = "img/half.jpg" || this.opts.half_star_graphic,
    this.empty_star_graphic     = "img/empty.jpg" || this.opts.empty_star_graphic;
}

Ratings.prototype = {

   renderStars:function(){

    // To test: Adjust the "data-rating" attribute in the HTML to see the results

    // Retrieve the elements with data-rating attribute from the DOM
    var elemArray = this.getElementsByAttr(this.ratingAttr);

    // Loop over them, checking for integer and decimal
    // components and drawing solid, half or empty stars accordingly.
    for(var i=0, n=elemArray.length; i < n; i++){
        var rating = Number(elemArray[i].getAttribute(this.ratingAttr)),
            ratingDecimal = rating%1,
            ratingInteger = Math.floor(rating),
            balance = this.ratingMax-(Math.floor(rating)+1);

        for( var k=0; k < ratingInteger; k++){
            //filled stars
            var imgEl = this.createEl('img', this.filled_star_graphic)
            elemArray[i].appendChild(imgEl);
        }

        // if rating has a decimal component
        if(ratingInteger < this.ratingMax && ratingDecimal === 0.5 ){

            // display a half star first
            var imgEl = this.createEl('img', this.half_star_graphic)
            elemArray[i].appendChild(imgEl);

            // then loop 5-(rating +1) times and display empty stars
            // to compensate for the half star
            for(var j=0; j< balance; j++){
                var imgEl = this.createEl('img', this.empty_star_graphic)
                elemArray[i].appendChild(imgEl);
            }
        }
        // for integer ratings
        else if(ratingInteger < this.ratingMax && ratingDecimal === 0 ){
            // Loop 5- rating times and display empty stars
            for(var j=0; j< (this.ratingMax - ratingInteger); j++){
                var imgEl = this.createEl('img', this.empty_star_graphic)
                elemArray[i].appendChild(imgEl);
            }
        }

    }

  },

  // Get the DOM elements matching the specified attribute
  // return an array of positive matches
  // Currently the search area is the body, but can be narrowed down in the config object
  // that is passed to the constructor, like so: var opts = {container: "container-el"}
  getElementsByAttr: function(attr){
    var matches =[],
        scope = this.container.getElementsByTagName('*'),
        totalNodes = scope.length;

    for(var i=0; i<totalNodes; i++){
        if(scope[i].getAttribute(attr)){
             matches.push(scope[i]);
        }
    }
    // elements with matching attribute
    return matches;

  },

  // creates nodes and sets attributes
  // TODO: make general purpose
  createEl: function(el, attr){

    var element = document.createElement(el);
    element.setAttribute('src', attr);
    return element;

  },

  // for the average rating bars
  // Determines the max number of ratings for a particular star
  // and then calculates the width of the bar for each star
  // To test: change the "data-rating-total" attribute in the HTML
  calculateAvgWidth: function(attr){

    var max =0, width =0, values = [],
        bars = this.getElementsByAttr(attr),
        totalBars = bars.length;

    // gather the number of ratings from the bar elements from the DOM
    for(var i =0; i<totalBars; i++){
        values.push(Number(bars[i].getAttribute(attr)));
    }

    // find the max number
    max = this.findMax(values);

    // calculate the width
    for(var j =0; j< totalBars; j++){
        width = (bars[j].getAttribute(attr) * 150) / max;
        bars[j].style.width = width+"px";
    }
  },

  findMax: function(arr){
   return Math.max.apply(null, arr);
  }


}

// init and call methods to render stars and the rating bars.
var foo = new Ratings(opts);
foo.renderStars();
foo.calculateAvgWidth('data-rating-total');

});




