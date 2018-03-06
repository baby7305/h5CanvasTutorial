var game = {
	init: function () {
		game.canvas = document.getElementById("gamecanvas");
		game.context = document.getElementById("2d");
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

}

window.addEventListener("load", function () {
	game.init();
});