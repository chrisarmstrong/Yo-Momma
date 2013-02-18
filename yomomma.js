var insults = {
	"fat":[
		"she expresses her weight in scientific notation",
		"when she walked by my window I didn't see the sun for three days",
		"she has her own postcode",
		"she jumped up in the air and got stuck",
		"when she stands up she has to sit down for a break",
		"Obi Wan Kenobi said “Yep, that’s a moon”",
		"she shows up on Google Maps. Without zoom."
	],
	"ugly":[
		"she had to tie a steak to her neck so the dog wanted to play with her",
		"even the tide won't take her out",
		"she went into a haunted house and came out with an application",
		"her dentist treats her by mail-order",
		"she looked out the window and got arrested for mooning",
		"she makes blind children cry",
		"she made an onion cry",
		"she threw a boomerang and it wouldn't come back",
		"her pillow cries at night",
		"her mirror says “viewer discretion is advised.”"
	],
	"stupid":[
		"she bought tickets to Xbox Live",
		"she studied for a drug test",
		"she bought a solar-powered flashlight",
		"she got stabbed in a shoot out",
		"she tripped over a wireless phone",
		"she got fired from the M&M factory for throwing out all the W’s",
		"she got ran over by a parked car",
		"she missed the #44 bus, and took the #22 twice instead",
		"she sold the car for gas money",
		"she thinks a quarterback is a refund"
	]
};

var categories = Object.keys(insults);

function newInsult(cat) {
  if(cat) {
    $('.category').text(cat);
    var catLength = categories.length;
    for(var i = 0; i < catLength; i++) {
      if(categories[i] == cat) {
          $('.punchline').text(insults[categories[i]][Math.floor(Math.random()*insults[categories[i]].length)]);
      }
    }
  } else {
    var i = Math.floor(Math.random()*categories.length);

    $('.category').text(categories[i]);
    $('.punchline').text(insults[categories[i]][Math.floor(Math.random()*insults[categories[i]].length)]);
  }
}

newInsult();

$('.new-joke').click(function(){
   newInsult();
   return false;
})
