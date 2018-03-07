var game = {
	init: function () {
		game.canvas = document.getElementById("gamecanvas");
		game.context = document.getElementById("2d");

		levels.init();

		game.hideScreens();
		game.showScreen("gamestartscreen");

	},

	hideScreens: function () {
		var screens = document.getElementsByClassName("gameplayer");
		for (let i = screens.length - 1; i >= 0; i--) {
			var screen = screens[i];
			screen.style.display = "none";

		}
	},

	hideScreen: function (id) {
		var screen = document.getElementById(id);
		screen.style.display = "none";
	},

	showScreen: function (id) {
		var screen = document.getElementById(id);
		screen.style.display = "block";
	},

	showLevelScreen: function () {
		game.hideScreens();
		game.showScreen("levelselectscreen");

	}

};

var levels = {
	data: [{
		foreground: "desert-foreground",
		background: "clouds-background",
		entities: [],
	},
	{
		foreground: "desert-foreground",
		background: "clouds-background",
		entities: [],
	},
	{
		foreground: "desert-foreground",
		background: "clouds-background",
		entities: [],
	}],

	init: function () {
		var levleSelectScreen = document.getElementById("levelselectscreen");

		var buttonClickHandler = function () {
			game.hideScreen("levelselectscreen");
			levels.load(this.value - 1);
		};

		for (var i = 0; i < levels.data.length; i++) {
			var button = document.createElement("input");
			button.type = "button";
			button.value = (i + 1);
			button.addEventListener("click", buttonClickHandler());

			levleSelectScreen.appendChild(button);
		}
	},

	load: function (number) {

	}


};

window.addEventListener("load", function () {
	game.init();
});