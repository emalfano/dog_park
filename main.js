var game=null;
function dog_controller(name, parent){
	//master controller for an INDIVIDUAL dog
	var self = this;
	this.name = name;
	this.dom_element=null;
	this.parent = parent;

	this.create_dom_element = function(){
		//create dom element
		this.dom_element = $("<div>",{
			class: 'dog-element',
			text: this.name
		});
		//apend to page
		// $("#game-area").append(this.dom_element);
		return this.dom_element;
	}
	this.initialize = function(){
		this.create_dom_element();
		this.dom_element.click(this.click_handler);
		return this.dom_element;
	}
	this.bark = function(){
		console.log(this.name + ' says: bark');
	}
	this.click_handler = function(){
		self.bark();
	}
}


function game_controller(game_area_dom_element){
	//master controller for the game
	this.dogs = []; //reference to all dogs in the game
	this.dog_names = ['Fido','Fluffy','Snoopy','Cedric','Pumpkin','Ginger','Spare Kitty']
	this.max_dogs = 1;
	this.game_area_dom_element = game_area_dom_element;

	//create all initial dogs
	this.create_dogs = function(){
		for(var i=0; i<this.max_dogs; i++){
			var this_dog = new dog_controller(this.dog_names[i],this);
			this.dogs.push(this_dog);
			var this_dog_dom_element = this_dog.initialize();
			this.game_area_dom_element.append(this_dog_dom_element);
		}
	}
	this.keypress_handler = function(e){
		var keypress_code = e.which;
		var key_letter = String.fromCharCode(keypress_code);
		switch(key_letter){
			case 'w':
				//move up
				break;
			case 's':
				//move down
				break;
			case 'a':
				//move left
				break;
			case 'd':
				//move right
				break;
		}
	}
	//initialize game functionality
	this.initialize = function(){
		this.create_dogs();
		$('body').on('keypress',this.keypress_handler);
	}


}

$(document).ready(function(){
	game = new game_controller($("#game-area"));
	game.initialize();
})






