// namespace
var movieApp = movieApp || {};

window.onload = function(){

	movieApp.controller = {
		init:function(){
			movieApp.router.init();
			movieApp.sections.init();
		}
	};

	movieApp.config = {
		location: "http://dennistel.nl/movies"
	};

	movieApp.router = {
		init : function(){
			routie({
			    about : function() {
			    	movieApp.sections.about();
	    			movieApp.sections.toggle("about", "movies");
			    },
			    movies : function() {
			    	movieApp.sections.movies();
	    			movieApp.sections.toggle("movies", "about");
			    }
			});
		}
	};


	// sections object
	movieApp.sections = {
		init : function(){
			this.about();
			this.movies();
		},
		about : function(){
			Transparency.render(document.querySelector(".about"), movieApp.content.about, movieApp.aboutDirectives);
		},
		movies : function(){
			Transparency.render(document.querySelector(".movies"), movieApp.content.movies, movieApp.movieDirectives);
		},
		toggle: function (show, hide) {
			var show = queryUtils.getOne("." + show);
			var hide = queryUtils.getOne("." + hide);
			show.classList.add('active');
			hide.classList.remove('active');			
		} 
	};



	var queryUtils = {
		getOne: function(el){
			return document.querySelector(el);
		},
		getMultiple: function (el){
			return document.querySelectorAll(el);
		}		
	};



	movieApp.content = {
		about: {
				title:"About", 
				description:"Cities fall but they are rebuilt. heroes die but they are remembered. the man likes to play chess; let's get him some rocks. circumstances have taught me that a man's ethics are the only possessions he will take beyond the grave. multiply your anger by about a hundred, kate, that's how much he thinks he loves you. bruce... i'm god. multiply your anger by about a hundred, kate, that's how much he thinks he loves you. no, this is mount everest. you should flip on the discovery channel from time to time. but i guess you can't now, being dead and all. rehabilitated? well, now let me see. you know, i don't have any idea what that means. mister wayne, if you don't want to tell me exactly what you're doing, when i'm asked, i don't have to lie. but don't think of me as an idiot. rehabilitated? well, now let me see. you know, i don't have any idea what that means. cities fall but they are rebuilt. heroes die but they are remembered. no, this is mount everest. you should flip on the discovery channel from time to time. but i guess you can't now, being dead and all.</p><p>I did the same thing to gandhi, he didn't eat for three weeks. bruce... i'm god. cities fall but they are rebuilt. heroes die but they are remembered. i once heard a wise man say there are no perfect men. only perfect intentions. cities fall but they are rebuilt. heroes die but they are remembered. boxing is about respect. getting it for yourself, and taking it away from the other guy. well, what is it today? more spelunking? let me tell you something my friend. hope is a dangerous thing. hope can drive a man insane. bruce... i'm god. well, what is it today? more spelunking? it only took me six days. same time it took the lord to make the world. i did the same thing to gandhi, he didn't eat for three weeks.</p><p>Let me tell you something my friend. hope is a dangerous thing. hope can drive a man insane. boxing is about respect. getting it for yourself, and taking it away from the other guy. mister wayne, if you don't want to tell me exactly what you're doing, when i'm asked, i don't have to lie. but don't think of me as an idiot. you measure yourself by the people who measure themselves by you. circumstances have taught me that a man's ethics are the only possessions he will take beyond the grave. circumstances have taught me that a man's ethics are the only possessions he will take beyond the grave. you measure yourself by the people who measure themselves by you. you measure yourself by the people who measure themselves by you. that tall drink of water with the silver spoon up his ass. i once heard a wise man say there are no perfect men. only perfect intentions. mister wayne, if you don't want to tell me exactly what you're doing, when i'm asked, i don't have to lie. but don't think of me as an idiot. boxing is about respect. getting it for yourself, and taking it away from the other guy.</p><p>That tall drink of water with the silver spoon up his ass. well, what is it today? more spelunking? i now issue a new commandment: thou shalt do the dance. let me tell you something my friend. hope is a dangerous thing. hope can drive a man insane. i did the same thing to gandhi, he didn't eat for three weeks. the man likes to play chess; let's get him some rocks. i now issue a new commandment: thou shalt do the dance. i now issue a new commandment: thou shalt do the dance. multiply your anger by about a hundred, kate, that's how much he thinks he loves you. i don't think they tried to market it to the billionaire, spelunking, base-jumping crowd. that tall drink of water with the silver spoon up his ass. it only took me six days. same time it took the lord to make the world."
				},
		movies: [
			{title:"Shawshank Redemption", releaseDate:"Release date: <time>14 October 1994</time>", description:"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency", cover:"images/shawshank-redemption.jpg"},
			{title:"The Godfather", releaseDate:"Release date: <time>24 March 1972</time>", description:"The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.", cover:"images/the-godfather.jpg"},
			{title:"Pulp Fiction", releaseDate:"Release date: <time>14 October 1994</time>", description:"The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.", cover:"images/pulp-fiction.jpg"},
			{title:"The Dark Knight", releaseDate:"Release date: <time>18 July 2008</time>", description:"When Batman, Gordon and Harvey Dent launch an assault on the mob, they let the clown out of the box, the Joker, bent on turning Gotham on itself and bringing any heroes down to his level.", cover:"images/the-dark-knight.jpg"}
		]

	};

	movieApp.movieDirectives = {
	    myImg: { 
	        src: function() { return this.cover; }
	     },
	    myHtml: {
	    	html: function () { return this.releaseDate; }
	    }
  	};
  	movieApp.aboutDirectives = {
	    myHtml: {
	    	html: function () { return this.description; }
	    }
  	};

  	if (!localStorage.getItem("movies")) {
		console.log("Data ophalen en in localstorage plaatsen");
		xhr.trigger("get", movieApp.config.location, function (e) {
			localStorage.setItem("movies", e);	
		}, null);
	};

	movieApp.content.movies = JSON.parse(localStorage.getItem("movies"));
	movieApp.controller.init();

};

// self invoking..
(function(){
	
	




})();

// Render in de 'about'-methode en 'movies'-methode met Transparency de corresponderende data uit oefening 12.1 in de juiste sectie van de pagina.
// Roep in de 'init'-methode van het 'sections'-object de 'about'-methode en 'movies'-methode aan
// Roep in de 'init'-methode van het 'controller'-object, de 'init'-methode van het 'sections'-object aan


