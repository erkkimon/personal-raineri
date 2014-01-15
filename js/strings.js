
function checkLanguage() {
  alert("asdf");
  navigator.globalization.getPreferredLanguage(
    function (language) {alert('language: ' + language.value + '\n');},
    function () {alert('Error getting language\n');}
  );
}

$(document).ready(function() 
{
	// Apply translations
	var lang = "en";
	function AppViewModel() 
	{
		if (lang == "en")
		{
			this.personalTravis = "personal travis";
		}
		if (lang == "fi")
		{
			this.personalTravis = "personal raineri";
		}
	}
	// Activate knockout.js
	ko.applyBindings(new AppViewModel());
});
