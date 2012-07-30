// make an http request
// get response and print it


function makeHttpObject() {
  try {return new XMLHttpRequest();}
  catch (error) {}
  try {return new ActiveXObject("Msxml2.XMLHTTP");}
  catch (error) {}
  try {return new ActiveXObject("Microsoft.XMLHTTP");}
  catch (error) {}

  throw new Error("Could not create HTTP request object.");
}


var request = makeHttpObject();
request.open("GET", "http://google.com", false);
request.send(null);
print(request.responseText);
