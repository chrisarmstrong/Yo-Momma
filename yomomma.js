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
          /*
$('.actions').append('<a href="https://twitter.com/share" class="twitter-share-button" data-text="Yo’ momma so '+cat+', '+insults[categories[i]+'" data-via="Armstrong">Tweet This</a>
	<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>')
*/
      }
    }
  } else {
    var i = Math.floor(Math.random()*categories.length);
    $('.category').text(categories[i]);
    $('.punchline').text(insults[categories[i]][Math.floor(Math.random()*insults[categories[i]].length)]);
    $('.actions').html('<a href="" class="new-joke">Gimme Another</a><a href="https://twitter.com/share" class="twitter-share-button" data-text="Yo’ momma so '+categories[i]+', '+$('.punchline').text()+'" data-via="Armstrong">Tweet This</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>')
  }
}

newInsult();

$('.new-joke').click(function(){
   newInsult();
   return false;
})
