var express 			= require('express');
var app						= express();

app.use(express.static(__dirname + '/public'));
app.get('/catList', function(req,res){
	console.log('i received a GET request')

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

	cat2 = {
		catCode: '2',
		DOB: 'January',
		intakeName: 'Green2',
		intakeAge: '1 Month',
		intakeDate: 'December',
		intakePerson: 'Steve',
		intakePhoto: 'tbd',
		intakeLocation: 'Chilliwack',
		intakeStory: 'Cat was found',
		intakePhone: '444-444-4444',
		intakeEmail: 'steve@chilliwack.com',
		catDescription: 'Black, Silky',
		catGender: 'Male',
		catHair: 'Long',
		catApproachability: 'friendly',
		Ears: 'clean',
		Teeth: 'clean',
		Fleas: 'none',
		Eyes: 'yellow',
		Food: 'firstmate',
		Litter: 'pellets',
		Deflea: 'Pill',
		defleaDate: 'yesterday',
		defleaedBy: 'me',
		onedeWorming: 'pill',
		onedeWormingBy: 'me',
		onedeWormingDate: 'yesterday',
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
		spayNeuterTattoo: '2',
		spayNeuterMicrochip: 'no',
		fosteredDate: 'December',
		fosterPerson: 'me',
		fosterEmail: 'me@me.com',
		fosterPhone: '111-111-1111'
	};

	var catList = [cat1, cat2];
	res.json(catList);

});


app.listen(3000);
console.log('server running on port 3000');