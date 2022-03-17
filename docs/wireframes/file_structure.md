# DIRECTORY STRUCTURE PLANNING

## Description

Below is an outline of what this project's directory structure can and will look like. Please note that working with the file system is not the focus of this project, but rather the planning of its' directory structure.

Please feel free to add, edit and leave comments and/or notes in this file as you see fit. 

Please do not alter the general layout of this template, as markdown can be very sensitive and small spaces, characters, etc. can throw off the whole layout.


	 __/business-analysis-project
	|
	|____ app
		|___ __init__.py 
		|___ routes.py
		|____ app.py 
		|___ api_users.py
		|___ cluster_model.py
		|___ config.py
		|____ templates
			|___base.html
			|___index.html
		|____ functions
			|___ __init__.py
			|___ create_cat_from_nace.py
			|___ text_rank.py
		|____ users
			|___ __init__.py
			|___ models.py
			|___ routes.py
				|___templates
					|___login.html
					|___register.html		
					|___logout.html
					|___reset_password.html
					|___user_dashboard.html
		|____ admin
			|___ __init__.py
			|___ models.py
			|___ routes.py
				|___templates
					|___dashboard.html
					|___register.html		
					|___logout.html
					|___reset_password.html	
		|____ static
			|___ css
				|___ style.css
			|___ js
				|___ script.js
				|___ main.js
	|____ data
		|____ nace_codes.json	
	|____ requirements.txt
	|____ .gitignore
	|____ Procfile
	|____ README.md
	|____ run.py
	|__
