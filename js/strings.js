    // Language detection code is based on Michael Herger's solution. Check
    // details: https://groups.google.com/forum/#!topic/phonegap/EkCyEBO8Dj4
    // PhoneGap on Android would always return EN in navigator.*language, so
    // let's parse userAgent instead.
    
    var lang;
    
    if (navigator && navigator.userAgent && (lang = navigator.userAgent.match(/android.*\W(\w\w)-(\w\w)\W/i))) 
    {
      lang = lang[1];
    }

    if (!lang && navigator) 
    {
      if (navigator.language) 
      {
        lang = navigator.language;
      } 
      else if (navigator.browserLanguage) 
      {
        lang = navigator.browserLanguage;
      } 
      else if (navigator.systemLanguage) 
      {
        lang = navigator.systemLanguage;
      } 
      else if (navigator.userLanguage) 
      {
        lang = navigator.userLanguage;
      }
      lang = lang.substr(0, 2);
    }
    
    function AppViewModel()
    {
      if (lang == "fi") /* FINNISH */
      {
	      /* training 1 */
	      this.benchpress = "penkkipunnerrus";
	      this.inclinepress = "vinopenkkipunnerrus";
	      this.lyingtricepsextension = "ranskalainen punnerrus";
	      
	      /* training 2 */
	      this.cablepulldown = "ylätalja";
	      this.cableseatedrow = "alatalja";
	      this.bicepscurl = "hauiskääntö";
	      
	      /* training 3 */
	      this.deadlift = "maastaveto";
	      this.legextension = "jalanojennus";
	      this.legcurl = "jalankoukistus";
	      
	      /* training 4 */
	      this.uprightrow = "pystysoutu";
	      this.shoulderpress = "pystypunnerrus";
	      this.shrugs = "olankohautus";
	      
	      /* training 5 */
	      this.bentoverrow = "kulmasoutu";
	      this.pecdeck = "rintarutistus";
	      this.hammerbicepscurl = "vasarakääntö";
	      
	      /* training 6 */
	      this.legpress = "jalkaprässi";
	      this.lunge = "askelkyykky";
	      this.powerclean = "rinnalleveto";
	      
	      /* general UI-related strings */
	      this.personalTravis = "personal raineri";
        this.nextTraining = "seuraava treeni";
        this.goals = "haasteet";
        this.reps = "toistot";
        this.weight = "paino";
        this.achieved = "saavutettu";
      }
      else /* ENGLISH */
      {
	      /* training 1 */
	      this.benchpress = "benchpress";
	      this.inclinepress = "incline press";
	      this.lyingtricepsextension = "lying triceps extension";
	      
	      /* training 2 */
	      this.cablepulldown = "cable pulldown";
	      this.cableseatedrow = "cable seated row";
	      this.bicepscurl = "biceps curl";
	      
	      /* training 3 */
	      this.deadlift = "deadlift";
	      this.legextension = "leg extension";
	      this.legcurl = "leg curl";
	      
	      /* training 4 */
	      this.uprightrow = "upright row";
	      this.shoulderpress = "shoulder press";
	      this.shrugs = "shrugs";
	      
	      /* training 5 */
	      this.bentoverrow = "bent-over row";
	      this.pecdeck = "pec deck";
	      this.hammerbicepscurl = "hammer biceps curl";
	      
	      /* training 6 */
	      this.legpress = "leg press";
	      this.lunge = "lunge";
	      this.powerclean = "power clean";
	      
	      /* general UI-related strings */
	      this.personalTravis = "personal travis";
        this.nextTraining = "next training";
        this.goals = "goals";
        this.reps = "reps";
        this.weight = "weight";
        this.achieved = "achieved";
      }
    }
    
    ko.applyBindings(new AppViewModel());