function print(what){
	document.getElementById("row_areas").innerHTML += what.toString() + "<br/>";
}
function error(what){
	alert(what);
}
window.onload = function() {
    document.onkeydown = function(e) {
        doClick('btn', e);
    };
	global_border = document.getElementById('row').style.border;
};
function doClick(buttonName,e)
{
    var key = e.keyCode ? e.keyCode : e.which;
    if (key == 13)
    {
        generate_12_tone_matrix(true);
        e.preventDefault();
    }
}
function load_dicts(){
	PCintegers = {
        "C":0,
        "B#":0,
        "Dbb":0,
        "C#":1,
        "Db":1,
        "D":2,
        "Cx":2,
        "Ebb":2,
        "D#":3,
        "Eb":3,
        "E":4,
        "Dx":4,
        "Fb":4,
        "F":5,
        "E#":5,
        "Gbb":5,
        "F#":6,
        "Gb":6,
        "G":7,
        "Fx":7,
        "Abb":7,
        "G#":8,
        "Ab":8,
        "A":9,
        "Gx":9,
        "Bbb":9,
        "A#":10,
        "Bb":10,
        "B":11,
        "Ax":11,
        "Cb":11
	};
    
	PCs_flats = {
        0:"C",
        1:"Db",
        2:"D",
        3:"Eb",
        4:"E",
        5:"F",
        6:"Gb",
        7:"G",
        8:"Ab",
        9:"A",
        10:"Bb",
        11:"B ",
	};
    
	PCs_sharps = {
        0:"C",
        1:"C#",
        2:"D",
        3:"D#",
        4:"E",
        5:"F",
        6:"F#",
        7:"G",
        8:"G#",
        9:"A",
        10:"A#",
        11:"B",
	};
}

function createTable(data, colors){
	var table = document.createElement('table');
	table.setAttribute('border','1');
	table.cellPadding = 5;
	table.style.borderCollapse = "collapse";
	var tbody = document.createElement('tbody');
	var n = []; for (var i = 0; i < data.length; ++i) n.push(0);
	for (var i = 0; i < data.length; ++i){
		var tr = document.createElement('tr');
		for (var j = 0; j < data.length; ++j){	
			var td = document.createElement('td');
			td.innerHTML = data[i][j];
			if ((i>0) && (i<13) && (j>0) && (j<13)){
				if (colors[i-1][j-1] == 'red') td.style.backgroundColor = 'red';
			}
			if ((i == 0) || (i == 13) || (j == 0) || (j == 13)) td.style.border = "none";
			if ((i == 0) || (i == 13)) td.align = "center";
			else if (j == 0) td.align = "right";
			else if (j == 13) td.align = "left";
			else td.align = "center";
			tr.appendChild(td);
		}
		tbody.appendChild(tr);
	}
	table.appendChild(tbody);
	table.style.border = "none";
	print("");
	document.getElementById("matrix").innerHTML = "";
	document.getElementById("matrix").appendChild(table);
}

function capitalizeFirstLetter(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function mod12add(pc, interval){
	pc = (pc + interval + 12) % 12;
	return pc;
}

function transposeSet(PCset, n){
	var PCset_transposed = [];
	for (var i = 0; i < PCset.length; ++i){
		PCset_transposed.push(mod12add(PCset[i], n));
	}
	return PCset_transposed;
}

function invert(PCset){
	var PCset_inverted = [0] * PCset.length;
	for (var i = 0; i < PCset.length; ++i){
		PCset_inverted[i] = mod12add(PCset[PCset.length-1-i]*-1,0);
	}
	return PCset_inverted;
}

function removeElement(array, index){
	var new_array = [];
	for (var i = 0; i < array.length; ++i){
		if (i != index){
			new_array.push(array[i]);
		}
	}
	return new_array;
}

function validate_input(){
	load_dicts();
	var txtbox = document.getElementById('row');
	var arr_temp = txtbox.value.split(",");
	var arr = [];
	for (var i = 0; i < arr_temp.length; ++i){
		if (arr_temp[i].replace(/ /g,"") != ""){
			arr.push(arr_temp[i]);
		}
	}
	if (txtbox.value.replace(/ /g,"").replace(/,/g,"") == ""){
		txtbox.style.border = global_border;
		return;
	}
	if (arr.length != 12){
		txtbox.style.borderColor = "#ff0000";
		document.getElementById('matrix').innerHTML = '';
		document.getElementById('row_areas').innerHTML = '';
		return;
	}
	for (var i = 0; i < 12; ++i){
		arr[i] = arr[i].replace(/ /g,"");
		if (PCintegers[capitalizeFirstLetter(arr[i].toString())] != undefined){
			for (var j = 0; j < i; ++j){
				if ((PCintegers[capitalizeFirstLetter(arr[i].toString())] == PCintegers[capitalizeFirstLetter(arr[j].toString())]) || (PCintegers[capitalizeFirstLetter(arr[i].toString())].toString() == arr[j].toString())){
					txtbox.style.borderColor = "#ff0000";
					document.getElementById('matrix').innerHTML = '';
					document.getElementById('row_areas').innerHTML = '';
					return;
				}
			}
			continue;
		}
		if ((parseInt(arr[i]) >= 0) && (parseInt(arr[i]) <= 11) && (parseInt(arr[i]).toString() == arr[i])){
			for (var j = 0; j < i; ++j){
				if ((arr[i].toString() == PCintegers[capitalizeFirstLetter(arr[j].toString())]) || (arr[i].toString() == arr[j].toString())){
					txtbox.style.borderColor = "#ff0000";
					document.getElementById('matrix').innerHTML = '';
					document.getElementById('row_areas').innerHTML = '';
					return;
				}
			}
			continue;
		}
		txtbox.style.borderColor = "#ff0000";
		document.getElementById('matrix').innerHTML = '';
		document.getElementById('row_areas').innerHTML = '';
		return;
	}
	txtbox.style.borderColor = "#009900";
	document.getElementById('matrix').innerHTML='';
	generate_12_tone_matrix(false);
}

function validate_subset(){
	load_dicts();
	var txtbox = document.getElementById('subset');
	var arr_temp = txtbox.value.split(",");
	var arr = [];
	for (var i = 0; i < arr_temp.length; ++i){
		if (arr_temp[i].replace(/ /g,"") != ""){
			arr.push(arr_temp[i]);
		}
	}
	if (txtbox.value.replace(/ /g,"").replace(/,/g,"") == ""){
		txtbox.style.border = global_border;
		return;
	}
	if (arr.length > 12){
		txtbox.style.borderColor = "#ff0000";
		return;
	}
	for (var i = 0; i < arr.length; ++i){
		arr[i] = arr[i].replace(/ /g,"");
		if (PCintegers[capitalizeFirstLetter(arr[i].toString())] != undefined){
			for (var j = 0; j < i; ++j){
				if ((PCintegers[capitalizeFirstLetter(arr[i].toString())] == PCintegers[capitalizeFirstLetter(arr[j].toString())]) || (PCintegers[capitalizeFirstLetter(arr[i].toString())].toString() == arr[j].toString())){
					txtbox.style.borderColor = "#ff0000";
					return;
				}
			}
			continue;
		}
		if ((parseInt(arr[i]) >= 0) && (parseInt(arr[i]) <= 11) && (parseInt(arr[i]).toString() == arr[i])){
			for (var j = 0; j < i; ++j){
				if ((arr[i].toString() == PCintegers[capitalizeFirstLetter(arr[j].toString())]) || (arr[i].toString() == arr[j].toString())){
					txtbox.style.borderColor = "#ff0000";
					return;
				}
			}
			continue;
		}
		txtbox.style.borderColor = "#ff0000";
		return;
	}
	txtbox.style.borderColor = "#009900";
	if(document.getElementById('row').style.borderColor == '#009900'){
		if(document.getElementById('matrix').innerHTML == ''){
			generate_12_tone_matrix(false);
		}
		else{
			updateMatrix();
		}
	}
}

function getRow(userInput, checkForErrors){
	userInput = userInput.replace(/ /g,"");
	if (userInput == ""){
		error("Enter something!");
		return "error";
	}
	row = [];
	userInput = userInput.split(",");
	for (var i = userInput.length; i >= 0; --i){
		if (userInput[i] == "") { userInput = removeElement(userInput, i); }
	}
	for (var i = 0; i < userInput.length; ++i){
		note = userInput[i];
		if (parseInt(note).toString() == note){
			if ((parseInt(note) < 0) || (parseInt(note) > 11)){
				if (checkForErrors == true){
					error("Invalid entry: " + note);
				}
				return "error";
			}
			else{
				row.push(parseInt(note) + 0);
			}
		}
		else{
			if(PCintegers[capitalizeFirstLetter(note)] != undefined){
				row.push(PCintegers[capitalizeFirstLetter(note)]);
			}
			else{
				if (checkForErrors == true){
					error("Invalid entry: " + note);
				}
				return "error";
			}
		}
	}
	if (userInput.length != 12){
		if (checkForErrors == true){
			error("Row must have 12 elements, but found " + userInput.length);
		}
		return "error";
	}
	for (var i = 0; i < 12; ++i){
		for (var j = i + 1; j < 12; ++j){
			if (row[i] == row[j]) { 
				if (checkForErrors == true){
					error("Duplicate pitch class: " + row[i]); 
				}
				return "error";
			}
		}
	}
	for (var i = 0; i < 12; ++i){
		if (row.indexOf(i) == -1) { 
			if (checkForErrors == true){
				error("Missing pitch class: " + i); 
			}
			return "error";
		}	
	}
	return row;
}

function getSubset(userInput, checkForErrors){
	userInput = userInput.replace(/ /g,"");
	if (userInput == ""){
		return;
	}
	subset = [];
	userInput = userInput.split(",");
	userInput_temp = [];
	for (var i = 0; i < userInput.length; ++i){
		if(userInput[i].replace(/ /g,"") != ""){
			userInput_temp.push(userInput[i]);
		}
	}
	userInput = userInput_temp;
	for (var i = 0; i < userInput.length; ++i){
		note = userInput[i];
		if (parseInt(note).toString() == note){
			if ((parseInt(note) < 0) || (parseInt(note) > 11)){
				if (checkForErrors == true){
					error("Invalid entry: " + note);
				}
				return undefined;
			}
			else{
				subset.push(parseInt(note) + 0);
			}
		}
		else{
			if(PCintegers[capitalizeFirstLetter(note)] != undefined){
				subset.push(PCintegers[capitalizeFirstLetter(note)]);
			}
			else{
				if (checkForErrors == true){
					error("Invalid entry: " + note);
				}
				return undefined;
			}
		}
	}
	if (userInput.length > 12){
		if (checkForErrors == true){
			error("Subset must have 12 or fewer elements, but found " + userInput.length);
		}
		return undefined;
	}
	for (var i = 0; i < subset.length - 1; ++i){
		for (var j = i + 1; j < subset.length; ++j){
			if (subset[i] == subset[j]){
				if (checkForErrors == true){
					error("Subset cannot have duplicate elements");
				}
				return undefined;
			}
		}
	}
	return subset;
}

function getMatrix(row){
	var matrix = [];
	for (var i = 0; i < 12; ++i){
		matrix.push([]);
		for (var j = 0; j < 12; ++j){
			matrix[i].push((row[j] + row[0] - row[i] + 12) % 12);
		}
	}
	return matrix;
}

function findSubset(subset, matrix){
	fontColors = [];
	for (var i = 0; i < 12; ++i){
		fontColors.push([]);
		for (var j = 0; j < 12; ++j){
			fontColors[i].push('black');
		}
	}
	if (subset == undefined){
		return fontColors;
	}
	var matches = [];
	for (var i = 0; i < 12; ++i){
		for (var j = 0; j < 12; ++j){
			if (document.getElementById("orderMattersCheckbox").checked == true){
				var pMatches = [];
				var rMatches = [];
				var iMatches = [];
				var riMatches = [];
				for (var k = 0; k < subset.length; ++k){
					if (j+k > 11) { pMatches = []; break; }
					if (subset[k] == matrix[i][j+k]){
						pMatches.push([i,j+k]);
					}
					else{
						pMatches = [];
						break;
					}
				}
				for (var k = 0; k < subset.length; ++k){
					if (j-k < 0) { rMatches = []; break; }
					if (subset[k] == matrix[i][j-k]){
						rMatches.push([i,j-k]);
					}
					else{
						rMatches = [];
						break;
					}
				}
				for (var k = 0; k < subset.length; ++k){
					if (i+k > 11) { iMatches = []; break; }
					if (subset[k] == matrix[i+k][j]){
						iMatches.push([i+k,j]);
					}
					else{
						iMatches = [];
						break;
					}
				}
				for (var k = 0; k < subset.length; ++k){
					if (i-k < 0) { riMatches = []; break; }
					if (subset[k] == matrix[i-k][j]){
						riMatches.push([i-k,j]);
					}
					else{
						riMatches = [];
						break;
					}
				}
				matches.push([pMatches,rMatches,iMatches,riMatches]);
			}
			else{
				var pMatches = [];
				var rMatches = [];
				var iMatches = [];
				var riMatches = [];
				for (var k = 0; k < subset.length; ++k){
					if (j+k > 11) { pMatches = []; break; }
					for (var l = 0; l < subset.length; ++l){
						if (subset[l] == matrix[i][j+k]){
							pMatches.push([i,j+k]);
							break;
						}
					}
				}
				for (var k = 0; k < subset.length; ++k){
					if (j-k < 0) { rMatches = []; break; }
					for (var l = 0; l < subset.length; ++l){
						if (subset[l] == matrix[i][j-k]){
							rMatches.push([i,j-k]);
							break;
						}
					}
				}
				for (var k = 0; k < subset.length; ++k){
					if (i+k > 11) { iMatches = []; break; }
					for (var l = 0; l < subset.length; ++l){
						if (subset[l] == matrix[i+k][j]){
							iMatches.push([i+k,j]);
							break;
						}
					}
				}
				for (var k = 0; k < subset.length; ++k){
					if (i-k < 0) { riMatches = []; break; }
					for (var l = 0; l < subset.length; ++l){
						if (subset[l] == matrix[i-k][j]){
							riMatches.push([i-k,j]);
							break;
						}
					}
				}
				if (pMatches.length != subset.length){ pMatches = [];}
				if (rMatches.length != subset.length){ rMatches = [];}
				if (iMatches.length != subset.length){ iMatches = [];}
				if (riMatches.length != subset.length){ riMatches = [];}
				matches.push([pMatches,rMatches,iMatches,riMatches]);
			}
            
		}
	}
	for (var i = 0; i < matches.length; ++i){
		for (var j = 0; j < 4; ++j){
			if (matches[i][j] != []){
				for (var k = 0; k < matches[i][j].length; ++k){
					fontColors[matches[i][j][k][0]][matches[i][j][k][1]] = 'red';
				}
			}
		}
	}
	return fontColors;
}

function getRowAreas(matrix){
	var alreadyUsedP = [false,false,false,false,false,false,false,false,false,false,false,false];
	var alreadyUsedI = [false,false,false,false,false,false,false,false,false,false,false,false];
	var rowAreas = [];
	var I_included = false;
	for (var i = 0; i < 12; ++i){
		if (alreadyUsedP[i] == true){ continue; }
		rowAreas.push([]);
		rowAreas[rowAreas.length-1].push("P"+matrix[i][0].toString().sub());
		rowAreas[rowAreas.length-1].push("R"+matrix[i][0].toString().sub());
		var firstHexachord0 = matrix[i].slice(0,6).sort(function(a,b){return a - b; });
		for (var j = i+1; j < 12; ++j){
			if (alreadyUsedP[j] == true){ continue; }
			//prime form
			var firstHexachord1 = matrix[j].slice(0,6).sort(function(a,b){return a - b; });
			var secondHexachord1 = matrix[j].slice(6,12).sort(function(a,b){return a - b; });
			if ((firstHexachord0.toString() == firstHexachord1.toString()) || (firstHexachord0.toString() == secondHexachord1.toString())){
				rowAreas[rowAreas.length-1].push("P" + matrix[j][0].toString().sub());
				rowAreas[rowAreas.length-1].push("R" + matrix[j][0].toString().sub());
				alreadyUsedP[j] = true;
			}
		}
		for (var k = 0; k < 12; ++k){
			if (alreadyUsedI[k] == true){ continue; }
			//inversions
			var firstHexachord1 = [matrix[0][k],matrix[1][k],matrix[2][k],matrix[3][k],matrix[4][k],matrix[5][k]].sort(function(a,b){return a - b; });
			var secondHexachord1 = [matrix[6][k],matrix[7][k],matrix[8][k],matrix[9][k],matrix[10][k],matrix[11][k]].sort(function(a,b){return a - b; });
			if ((firstHexachord0.toString() == firstHexachord1.toString()) || (firstHexachord0.toString() == secondHexachord1.toString())){
				I_included = true;
				rowAreas[rowAreas.length-1].push("I" + matrix[0][k].toString().sub());
				rowAreas[rowAreas.length-1].push("RI" + matrix[0][k].toString().sub());
				alreadyUsedI[k] = true;
			}
		}
	}
	if (I_included == false){
		for (var i = 0; i < 12; ++i){
			if (alreadyUsedI[i] == true){ continue; }
			rowAreas.push([]);
			rowAreas[rowAreas.length-1].push("I"+matrix[0][i].toString().sub());
			rowAreas[rowAreas.length-1].push("RI"+matrix[0][i].toString().sub());
			var firstHexachord0 = [matrix[0][i],matrix[1][i],matrix[2][i],matrix[3][i],matrix[4][i],matrix[5][i]].sort(function(a,b){return a - b; });
			for (var k = i+1; k < 12; ++k){
				if (alreadyUsedI[k] == true){ continue; }
				//inversions
				var firstHexachord1 = [matrix[0][k],matrix[1][k],matrix[2][k],matrix[3][k],matrix[4][k],matrix[5][k]].sort(function(a,b){return a - b; });
				var secondHexachord1 = [matrix[6][k],matrix[7][k],matrix[8][k],matrix[9][k],matrix[10][k],matrix[11][k]].sort(function(a,b){return a - b; });
				if ((firstHexachord0.toString() == firstHexachord1.toString()) || (firstHexachord0.toString() == secondHexachord1.toString())){
					rowAreas[rowAreas.length-1].push("I" + matrix[0][k].toString().sub());
					rowAreas[rowAreas.length-1].push("RI" + matrix[0][k].toString().sub());
					alreadyUsedI[k] = true;
				}
			}
		}
	}
	print("Row Areas".bold());
	for (var i = 0; i < rowAreas.length; ++i){
		print(rowAreas[i].toString().replace(/,/g,", "));
	}
}

function printMatrix(matrix, colors){
	var pHeader = [];
	var iHeader = [];
	var rHeader = [];
	var riHeader = [];
	for (var i = 0; i < 12; ++i){
		if (i == 0){
			var subscript = matrix[0][i];
		}
		else{
			var subscript = (matrix[0][0] - ((matrix[0][i] - matrix[0][0] + 12) % 12) + 12) % 12
		}
		subscript = subscript.toString();
		pHeader.push("P" + subscript.sub());
		rHeader.push("R" + subscript.sub());
	}
	for (var i = 0; i < 12; ++i){
		var subscript = matrix[0][i];
		subscript = subscript.toString();
		iHeader.push("I" + subscript.sub());
		riHeader.push("RI" + subscript.sub());
	}
	if (document.getElementById("menu_display").selectedIndex == 1){
		var displayType = "sharps";
	}
	else if(document.getElementById("menu_display").selectedIndex == 2){
		var displayType = "flats";
	}
	else{
		var displayType = "pcs";
	}
	for (var i = 0; i < 12; ++i){
		for (var j = 0; j < 12; ++j){
			if (displayType == "flats"){
				matrix[i][j] = PCs_flats[matrix[i][j]];
			}
			else if (displayType == "sharps"){
				matrix[i][j] = PCs_sharps[matrix[i][j]];
			}
			matrix[i][j] = matrix[i][j].toString();
			if (colors[i][j] == 'red'){
				matrix[i][j] = matrix[i][j].fontcolor('white').bold();
			}
		}
	}
	try{
		if (isnan(matrix[0][0])){
			error("Enter something!");
			return;
		}
	}
	catch(err){};
	var display = [];
	for (var i = 0; i < 14; ++i){
		display.push([]);
		for (var j = 0; j < 14; ++j){
			if (((i==0) && ((j==0) || (j==13))) || ((i==13) && ((j==0) || (j==13)))){
				display[i].push("");
			}
			else if (i==0){
				display[i].push(iHeader[j-1].bold());	
			}
			else if (i==13){
				display[i].push(riHeader[j-1].bold());
			}
			else if (j==0){
				display[i].push(pHeader[i-1].bold());
			}
			else if (j==13){
				display[i].push(rHeader[i-1].bold());
			}
			else{
				display[i].push(matrix[i-1][j-1]);
			}
		}
	}
	createTable(display, colors);
}

function updateMatrix()
{
	if (document.getElementById("matrix").innerHTML != ""){
		generate_12_tone_matrix(false);
	}
}

function generate_12_tone_matrix(checkForErrors)
{
	document.getElementById("row_areas").innerHTML = "";
	if (checkForErrors == true){
		document.getElementById("matrix").innerHTML = "";
		document.getElementById("matrix").style.color = 'black';
	}
	load_dicts();
	var row = getRow(document.getElementById("row").value, checkForErrors);
	if (row == "error") { return };
	var subset = getSubset(document.getElementById("subset").value,checkForErrors);
	var matrix = getMatrix(row);
	if (document.getElementById("rowAreasCheckbox").checked != false){
		getRowAreas(matrix);
	}		
	var colors = findSubset(subset, matrix);
	printMatrix(matrix, colors);
}