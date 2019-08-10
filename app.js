Parse.initialize(
  app_id, // This is your Application ID
  js_key // This is your Javascript key
);
Parse.serverURL = 'https://parseapi.back4app.com/'


const MyCustomClass = Parse.Object.extend("video");

// Creates a new Query object to help us fetch MyCustomClass objects
const query = new Parse.Query(MyCustomClass);
var arr;
// Executes the query, which returns an array of MyCustomClass
query.find().then(results => {
  arr = JSON.parse(JSON.stringify(results));
  console.log(results);
  
	for (var i = arr.length - 1; i >= 0; i--) {
		$('body').append('<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fstandnewshk%2Fvideos%2F'+
			arr[i].vid_id+
			'%2F&show_text=0&width=560" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>')



		
	}
});
