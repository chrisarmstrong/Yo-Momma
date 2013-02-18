var jokes = {
		    "fat":[
		      "she expresses her weight in scientific notation",
		      "when she walked by my window I didn't see the sun for three days",
		      "she has her own postcode",
		      "she jumped up in the air and got stuck",
		      "when she stands up she has to sit down for a break",
		      "Obi Wan Kenobi said “Yep, that’s a moon”"
		    ],
		  "ugly":[
		      "she had to tie a steak to her neck so the dog wanted to play with her",
		    "even the tide won't take her out",
		    "she went into a haunted house and came out with an application",
		    "her dentist treats her by mail-order"
		   ],
		  "stupid":[
		      "she bought tickets to Xbox Live",
		      "she studied for a drug test",
		      "she bought a solar-powered flashlight",
		      "she got stabbed in a shoot out"
		  ]
		};

var categories = Object.keys(jokes);

function newJoke(cat) {
  if(cat) {
    $('.category').text(cat);
    var catLength = categories.length;
    for(var i = 0; i < catLength; i++) {
      if(categories[i] == cat) {
          $('.punchline').text(jokes[categories[i]][Math.floor(Math.random()*jokes[categories[i]].length)]);
      }
    }
  } else {
    var i = Math.floor(Math.random()*categories.length);

    $('.category').text(categories[i]);
    $('.punchline').text(jokes[categories[i]][Math.floor(Math.random()*jokes[categories[i]].length)]);
  }

}

newJoke();

$('.new-joke').click(function(){
   newJoke();
   return false;
})