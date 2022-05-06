#============================SCHEDULE COINCIDENCES SOFWARE=============================
#======================================================================================

#================================OVERVIEW==============================================
This project has been developed for get the schedule employes coincidences based on a txt file.
With a simple UI, users have to load the schedule of employes inside a file with .txt extension following the format established.
Example:
RENE=MO10:15-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00
ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00
ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00

Automatically, the app will show the schedule coincidences between employes.
#======================================Sofware Structure=============================
The software uses 4 functions, wich are:
	- Load txt function.- Based on an event, this function load and read the txt schedule file.
	- Schedule epmloyes function.- This function generates an array of the emplyes schedules using the break line as the element to define elements of array
	- Employes Matrix.- With previus function we cant compare all schedule employes directly due the format of times schedule. With this function we prepare
	   			  the employes matrix to be compare and get the coincidences. The function separates the employes and his schedules as elements of matrix,then
				  all the schedules will be compare ti find all the coincidences.
	- getCoincidences.- This function needs two paramteres wich are two arrays (one for employe) provided by the previus function, then we show the coincidences.

#======================================Runnig app================================
To run properly the app, the following steps has to be done:
	1. Download the file project at github link: --------------------
	2. In the project directory, you have to run:	
		- npm install
		- npm start
	3.- Open [http://localhost:3000]
	4.- Click on choose file button.
	5.- Select txt schedule file.(you can use the imput1 and input2 txt files provided inside the project folder)


