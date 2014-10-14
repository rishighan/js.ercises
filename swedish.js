var lexicon = {
	"merry":"god",
	"christmas":"jul",
	"and":"och", 
	"happy":"gott", 
	"new":"nytt", 
	"year":"år"
	},

    english ="merry christmas and a happy new year",
    splitted = english.split(" "),
    temp = [];

for(t in lexicon)
{
	if(splitted.indexOf(t,0)!== -1)
	{
	  temp.push(lexicon[t]);
	}
}

console.log(temp);