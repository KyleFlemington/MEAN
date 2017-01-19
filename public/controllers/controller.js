var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
	console.log("controller Connected")

	cat1 = {
		catCode: '1',
		DOB: 'January',
		intakeName: 'Green1',
		intakeAge: '1 Month',
		intakeDate: 'December',
		intakePerson: 'Steve',
		intakePhoto: 'tbd',
		intakeLocation: 'Chilliwack',
		intakeStory: 'Cat was found',
		intakePhone: '444-444-4444',
		intakeEmail: 'steve@chilliwack.com',
		catDescription: 'Black, floofy',
		catGender: 'Male',
		catHair: 'Long',
		catApproachability: 'scared',
		Ears: 'clean',
		Teeth: 'clean',
		Fleas: 'none',
		Eyes: 'blue',
		Food: 'firstmate',
		Litter: 'pellets',
		Deflea: 'Pill',
		defleaDate: 'yesterday',
		defleaedBy: 'me',
		onedeWorming: 'pill',
		onedeormingBy: 'me',
		onedeormingDate: 'yesterday',
		twoDeWorming: 'pill',
		twoDeWormingBy: 'me',
		twoDeWormingDate: 'yesterday',
		oneVaccination: 'injection',
		oneVaccinationBy: 'me',
		oneVaccinationDate: 'yesterday',
		twoVaccination: 'injection',
		twoVaccinationBy: 'me',
		twoVaccinationDate: 'yesterday',
		spayNeuter: 'Neuter',
		spayNeuterBy: 'me',
		spayNeuterDate: 'yesterday',
		spayNeuterTattoo: '1',
		spayNeuterMicrochip: 'no',
		fosteredDate: 'December',
		fosterPerson: 'me',
		fosterEmail: 'me@me.com',
		fosterPhone: '111-111-1111'
	};

	var catList = [cat1];
	$scope.catList = catList

});

