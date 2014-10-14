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
    this.container =  document.getElementById("ratings-container") || this.opts.container;
    this.ratingAttr = "data-rating" || this.opts.ratingAttr,
    this.filled_star_graphic = "filled.png" || this.opts.filled_star_graphic,
    this.half_star_graphic = "half.png" || this.opts.half_star_graphic;
}

Ratings.prototype = {

   renderStars:function(){
    // retrieve the data-rating attribute from the DOM element
    // get the elem array
    var elemArray = this.getElementsByAttr(this.ratingAttr);
    //console.log(elemArray)

    for(var i=0, n=elemArray.length; i < n; i++){

        //console.log(elemArray[i].getAttribute(this.ratingAttr));
        for( var k=0; k < Math.floor(elemArray[i].getAttribute(this.ratingAttr)); k++){
            //filled stars
            var imgEl = this.createEl('img', this.filled_star_graphic)
            elemArray[i].appendChild(imgEl);

        }

        // separate decimal portion by doing num%1 and checking against 0.5
        if(Number(elemArray[i].getAttribute(this.ratingAttr))%1===0.5){
            //half star
        }
        else{
            //empty star
        }
    }

  },

  // Get the DOM elements matching the specified attribute
  // return an array of positive matches
  // Currently the search area is narrowed to the container
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

  calculateAverage: function(){

  }


}


var foo = new Ratings(opts);
foo.renderStars();

});




