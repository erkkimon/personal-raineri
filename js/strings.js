$(document).ready(function() 
{
	// Apply translations
	var lang = "fi";
	function AppViewModel() 
	{
		if (lang == "en")
		{
			this.appName = "personal travis";
			this.lastName = "Bertington";
		}
		if (lang == "fi")
		{
			this.appName = "personal raineri";
			this.lastName = "Perttinen";
		}
	}
	// Activate knockout.js
	ko.applyBindings(new AppViewModel());
});