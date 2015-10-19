function openOrSenior(data){

	var result = data.map(function(elem) {

	if (elem[0] > 54 && elem[1] > 7) {

			return "Senior";

	} else {

		return "Open";

	}

});

return result;

}

openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]);
