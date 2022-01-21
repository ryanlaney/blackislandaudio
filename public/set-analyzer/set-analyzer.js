window.onload = function () {
  document.onkeydown = function (e) {
    doit(e);
  };
  global_border = document.getElementsByName("set_txt")[0].style.border;
};

PCintegers = {
  C: 0,
  "B#": 0,
  Dbb: 0,
  "C#": 1,
  Db: 1,
  D: 2,
  Cx: 2,
  Ebb: 2,
  "D#": 3,
  Eb: 3,
  E: 4,
  Dx: 4,
  Fb: 4,
  F: 5,
  "E#": 5,
  Gbb: 5,
  "F#": 6,
  Gb: 6,
  G: 7,
  Fx: 7,
  Abb: 7,
  "G#": 8,
  Ab: 8,
  A: 9,
  Gx: 9,
  Bbb: 9,
  "A#": 10,
  Bb: 10,
  B: 11,
  Ax: 11,
  Cb: 11,
};

PCs_flats = {
  0: "C",
  1: "Db",
  2: "D",
  3: "Eb",
  4: "E",
  5: "F",
  6: "Gb",
  7: "G",
  8: "Ab",
  9: "A",
  10: "Bb",
  11: "B",
};

PCs_sharps = {
  0: "C",
  1: "C#",
  2: "D",
  3: "D#",
  4: "E",
  5: "F",
  6: "F#",
  7: "G",
  8: "G#",
  9: "A",
  10: "A#",
  11: "B",
};

forte_sets = {
  0: "1-1",
  "0,1": "2-1",
  "0,2": "2-2",
  "0,3": "2-3",
  "0,4": "2-4",
  "0,5": "2-5",
  "0,6": "2-6",
  "0,1,2": "3-1",
  "0,1,3": "3-2",
  "0,1,4": "3-3",
  "0,1,5": "3-4",
  "0,1,6": "3-5",
  "0,2,4": "3-6",
  "0,2,5": "3-7",
  "0,2,6": "3-8",
  "0,2,7": "3-9",
  "0,3,6": "3-10",
  "0,3,7": "3-11",
  "0,4,8": "3-12",
  "0,1,2,3": "4-1",
  "0,1,2,4": "4-2",
  "0,1,3,4": "4-3",
  "0,1,2,5": "4-4",
  "0,1,2,6": "4-5",
  "0,1,2,7": "4-6",
  "0,1,4,5": "4-7",
  "0,1,5,6": "4-8",
  "0,1,6,7": "4-9",
  "0,2,3,5": "4-10",
  "0,1,3,5": "4-11",
  "0,2,3,6": "4-12",
  "0,1,3,6": "4-13",
  "0,2,3,7": "4-14",
  "0,1,4,6": "4-z15",
  "0,1,5,7": "4-16",
  "0,3,4,7": "4-17",
  "0,1,4,7": "4-18",
  "0,1,4,8": "4-19",
  "0,1,5,8": "4-20",
  "0,2,4,6": "4-21",
  "0,2,4,7": "4-22",
  "0,2,5,7": "4-23",
  "0,2,4,8": "4-24",
  "0,2,6,8": "4-25",
  "0,3,5,8": "4-26",
  "0,2,5,8": "4-27",
  "0,3,6,9": "4-28",
  "0,1,3,7": "4-z29",
  "0,1,2,3,4": "5-1",
  "0,1,2,3,5": "5-2",
  "0,1,2,4,5": "5-3",
  "0,1,2,3,6": "5-4",
  "0,1,2,3,7": "5-5",
  "0,1,2,5,6": "5-6",
  "0,1,2,6,7": "5-7",
  "0,2,3,4,6": "5-8",
  "0,1,2,4,6": "5-9",
  "0,1,3,4,6": "5-10",
  "0,2,3,4,7": "5-11",
  "0,1,3,5,6": "5-z12",
  "0,1,2,4,8": "5-13",
  "0,1,2,5,7": "5-14",
  "0,1,2,6,8": "5-15",
  "0,1,3,4,7": "5-16",
  "0,1,3,4,8": "5-z17",
  "0,1,4,5,7": "5-z18",
  "0,1,3,6,7": "5-19",
  "0,1,5,6,8": "5-20",
  "0,1,4,5,8": "5-21",
  "0,1,4,7,8": "5-22",
  "0,2,3,5,7": "5-23",
  "0,1,3,5,7": "5-24",
  "0,2,3,5,8": "5-25",
  "0,2,4,5,8": "5-26",
  "0,1,3,5,8": "5-27",
  "0,2,3,6,8": "5-28",
  "0,1,3,6,8": "5-29",
  "0,1,4,6,8": "5-30",
  "0,1,3,6,9": "5-31",
  "0,1,4,6,9": "5-32",
  "0,2,4,6,8": "5-33",
  "0,2,4,6,9": "5-34",
  "0,2,4,7,9": "5-35",
  "0,1,2,4,7": "5-z36",
  "0,3,4,5,8": "5-z37",
  "0,1,2,5,8": "5-z38",
  "0,1,2,3,4,5": "6-1",
  "0,1,2,3,4,6": "6-2",
  "0,1,2,3,5,6": "6-z3",
  "0,1,2,4,5,6": "6-z4",
  "0,1,2,3,6,7": "6-5",
  "0,1,2,5,6,7": "6-z6",
  "0,1,2,6,7,8": "6-7",
  "0,2,3,4,5,7": "6-8",
  "0,1,2,3,5,7": "6-9",
  "0,1,3,4,5,7": "6-z10",
  "0,1,2,4,5,7": "6-z11",
  "0,1,2,4,6,7": "6-z12",
  "0,1,3,4,6,7": "6-z13",
  "0,1,3,4,5,8": "6-14",
  "0,1,2,4,5,8": "6-15",
  "0,1,4,5,6,8": "6-16",
  "0,1,2,4,7,8": "6-z17",
  "0,1,2,5,7,8": "6-18",
  "0,1,3,4,7,8": "6-z19",
  "0,1,4,5,8,9": "6-20",
  "0,2,3,4,6,8": "6-21",
  "0,1,2,4,6,8": "6-22",
  "0,2,3,5,6,8": "6-z23",
  "0,1,3,4,6,8": "6-z24",
  "0,1,3,5,6,8": "6-z25",
  "0,1,3,5,7,8": "6-z26",
  "0,1,3,4,6,9": "6-27",
  "0,1,3,5,6,9": "6-z28",
  "0,2,3,6,7,9": "6-z29",
  "0,1,3,6,7,9": "6-30",
  "0,1,4,5,7,9": "6-31",
  "0,2,4,5,7,9": "6-32",
  "0,2,3,5,7,9": "6-33",
  "0,1,3,5,7,9": "6-34",
  "0,2,4,6,8,10": "6-35",
  "0,1,2,3,4,7": "6-z36",
  "0,1,2,3,4,8": "6-z37",
  "0,1,2,3,7,8": "6-z38",
  "0,2,3,4,5,8": "6-z39",
  "0,1,2,3,5,8": "6-z40",
  "0,1,2,3,6,8": "6-z41",
  "0,1,2,3,6,9": "6-z42",
  "0,1,2,5,6,8": "6-z43",
  "0,1,2,5,6,9": "6-z44",
  "0,2,3,4,6,9": "6-z45",
  "0,1,2,4,6,9": "6-z46",
  "0,1,2,4,7,9": "6-z47",
  "0,1,2,5,7,9": "6-z48",
  "0,1,3,4,7,9": "6-z49",
  "0,1,4,6,7,9": "6-z50",
};

help = {
  "Normal Form": `${"Normal Form: ".bold()}The order of pitch classes which minimizes the interval between the first and last note.  If two permutations have the same interval between the first and last note, the one which minimizes the interval between the first and second-to-last note is favored, etc.`,
  "Interval Vector": `${"Interval Vector: ".bold()}Shows how many instances of each interval class occurs in the pitch class set`,
  "Invariance Vector": `${"Invariance Vector: ".bold()}Shows the number of n-values for which a set maps onto itself or it's complement under T${"n".sub()}, T${"n".sub()}I, T${"n".sub()}M, and T${"n".sub()}MI`,
  "Prime Form": `${"Prime Form: ".bold()}The normal order, transposed such that the first note is 0`,
  "Forte Number": `${"Forte Number: ".bold()}Allen Forte's label; the first number is the cardinality of the set.`,
  "Transpositional Symmetry": `${"T".bold() + "n".sub().bold() + "I Symmetry: ".bold()}A set has T${"n".sub()}I symmetry if it can map onto itself under some transposition and/or inversion.`,
  "Self-Complementary": `${"Self-complementary: ".bold()}A set is self-complementary if it, in conjunction with some transposition and/or inversion of itself, form an aggregate (all 12 pitches).`,
  "Show Complement": `${"Complementary set: ".bold()}Shows the complement of this set.  Two sets are complementary if they form an aggregate (constituting all 12 pitch classes) under some transposition and/or inversion of one of the sets.`,
  "Show Z": `${"Z-related set: ".bold()}Shows the Z-related set, if it exists.  Z-related sets have the same interval vector but are not related by transposition or inversion.`,
  R: `${"R-relation: ".bold()}Two sets are R${"p".sub()}-related if their prime forms are the same except for one pitch class (maximum similarity with respect to prime form).  Two sets are R${"0".sub()}-related if their interval vectors have no corresponding digits (minimum similarity).  Two sets are R${"1".sub()}-related if at least four of the six interval vector digits are the same, and the other two are switched (first order maximum similarity with respect to interval vector).  Two sets are R${"2".sub()}-related if at least four of the six interval vector digits are the same and the others are different (second order maximum similarity with respect to interval vector).  The R-relation (without a subscript) is a stricter measure of maximum similarity, with respect to both the prime forms and interval vectors of the sets in question.`,
  "K/Kh": `${"K/Kh-relation: ".bold()}Two sets are K-related if one is a subset or superset of the other, or one is a subset or superset of the other's complement.  Two sets are Kh related if both conditions are met.  The K-relation is also called the Set Complex, and the Kh-relation is also called the Set Subcomplex.`,
  TnI: `${"T".bold() + "n".sub().bold() + " / T".bold() + "n".sub().bold() + "I: ".bold()}Shows whether this set would map onto another under some transposition and/or inversion`,
  Z: `${"Z-relationship: ".bold()}Z-related sets have the same interval vector but are not related by transposition or inversion.`,
  M: `${"M-relationship: ".bold()}One set is M-related to another if the prime form maps onto the others when each element is multiplied by some value (in MOD-12 space).`,
  Complementary: `${"Complementary relationship: ".bold()}Two sets are complementary if they form an aggregate (constituting all 12 pitch classes) under some transposition and/or inversion of one of the sets.`,
  "Subset/Superset": `${"Subset/superset relationship: ".bold()}One set is a subset of another if it can be formed by removing pitches from the other (and transposing or inverting as necessary).`,
  SIM: `${"SIM: ".bold()}An integer measure of how similar (or dissimilar) two sets are.  A value of 0 indicates that the two sets are equivalent, and higher values indicate a higher degree of sonic dissimilarity.  Calculated by subtracting the entries in each of the interval vectors, taking the absolute value, and summing all the values together.`,
  ASIM: `${"ASIM: ".bold()}A normalized measure of similarity (or dissimilarity) between two sets.  A value of 0 indicates that the two sets are equivalent, and a value of 1 indicates that the sets could not be more unlike.`,
  k: `${"k: ".bold()}The number of common interval-class instances.  Calculated by summing the lesser value of each element of both interval vectors.`,
  ak: `${"ak: ".bold()}A normalized measure of common interval-class instances.  A value of 0 means there are no common instances, and a value of 1 indicates that the two interval vectors are equal.`,
  EMB: `${"EMB: ".bold()}How many times a set, under transposition and/or inversion, is embedded in another set.`,
  REL: `${"REL: ".bold()}A measure of relatedness comparing the subset content of two sets.  0 indicates minimum similarity, and two sets with the same prime form will return a value of 1.`,
  COV: `${"COV: ".bold()}COV(X,Y) equals the number of forms of superset Y that include subset X.`,
  MAXSIM: `${"MAXSIM: ".bold()}Two sets are defined as maximally similar if, for their sizes, their ASIM value is the lowest (or ak value is the highest) that it can possibly be.`,
  TMEMB: `${"TMEMB: ".bold()}Total mutual embedding of one set in another.  Returns an integer of how many times each subset of one set is embedded in another.`,
  ATMEMB: `${"ATMEMB: ".bold()}A normalized measure of total mutual embedding between sets.  0 indicates minimum similarity and 1 indicates maximum similarity.`,
  IcVSIM: `${"IcVSIM: ".bold()}The standard deviation of the difference between interval vectors.  A lower number means the two vectors are more similar.`,
  ISIM2: `${"ISIM2: ".bold()}Similar to IcVSIM, except each element of the interval vectors is replaced with its square root.`,
  Angle: `${"ANGLE: ".bold()}The angle between interval vectors, as if they were lines in a six-dimensional space.`,
  CC: `${"CC: ".bold()}Contour Class.  The nth element in the vector is the nth pitch in the set, and the integer value is its rank (0 is the lowest).`,
  CAS: `${"CAS: ".bold()}Contour Adjacency Series.  Marks the direction (+ or -) of each interval.`,
  CASV: `${"CASV: ".bold()}Contour Adjacency Series Vector.  Counts the number of <+,-> in the CAS.`,
  CIS: `${"CIS: ".bold()}Contour Interval Succession.  Measures the contour intervals between successive notes.`,
  CIA: `${"CIA: ".bold()}Contour Interval Array.  How much each contour interval occurs between any two entries in the CC.`,
  "CCV I": `${"CCV I: ".bold()}Contour Class Vector I.  A two-entry vector where the first value is the sum of positive part of the CIA with each entry multiplied by its index, and the second value is the same for the negative part.`,
  "CCV II": `${"CCV II: ".bold()}Contour Class Vector II.  Same as CCV I, except the multiplication-by-index is taken out of the formula.`,
  COM: `${"COM: ".bold()}Comparison Matrix.`,
  CSIM: `${"CSIM: ".bold()}Like SIM, but for contour segments.`,
  CEMB: `${"CEMB: ".bold()}Like EMB, but for contour segments.`,
  CMEMB: `${"CMEMB: ".bold()}Like TMEMB, but for contour segments.`,
  ACMEMB: `${"ACMEMB: ".bold()}Like ATMEMB, but for contour segments.`,
  Forte: `See Forte, Allen. ${"The Structure of Atonal Music. ".italics()}New Haven: Yale UP, 1973. Print.`,
  Morris: `See Morris, Robert. "A Similarity Index for Pitch-Class Sets." ${"Perspectives of New Music ".italics()}18.1/2 (1979-1980): 445-60. Print.`,
  Rahn: `See Rahn, John. "Relating Sets." ${"Perspectives of New Music ".italics()}18.1/2 (1979-1980): 483-98. Print.`,
  Isaacson: `See Isaacson, Eric J. "Similarity of Interval-Class Content between Pitch-Class Sets: The IcVSIM Relation." ${"Journal of Music Theory ".italics()}34.1 (1990): 1-28. Print. and Isaacson, Eric J. "Issues in the Study of Similarity in Atonal Music." ${"Music Theory Online ".italics()}2.7 (1996): n. pag. Web.`,
  Lewin: `See Lewin, David. "Forte's Interval Vector, My Interval Function, and Regener's Common-Note Function." ${"Journal of Music Theory ".italics()}21.2 (1977): 194-237. Print.; Lewin, David. "A Response to a Response: On PCSet Relatedness." ${"Perspectives of New Music".italics()} 18.1/2 (1979-1980): 498-502. Print.; and Lewin, David. ${"Generalized Musical Intervals and Transformations. ".italics()}New Haven: Yale UP, 1987. Print.`,
  Friedman: `See Friedmann, Michael L., and Schoenberg. "A Methodology for the Discussion of Contour: Its Application to Schoenberg's "Music"" ${"Journal of Music Theory ".italics()}29.2 (1985): 223-48. Print.`,
  "Marvin and Laprade": `See Marvin, Elizabeth W., and Paul A. Laprade. "Relating Musical Contours: Extensions of a Theory for Contour." ${"Journal of Music Theory ".italics()}31.2 (1987): 225-67. Print.`,
  "Scott and Isaacson": `See Scott, Damon, and Eric J. Isaacson. "The Interval Angle: A Similarity Measure for Pitch-Class Sets." ${"Perspectives of New Music ".italics()}36.2 (1998): 107-42. Print.`,
};

function showHelp(what) {
  document.getElementById("help").innerHTML = help[what];
}

function print(msg) {
  document.getElementById("output").innerHTML += `<br/>${msg}`;
}

String.prototype.print = function () {
  document.getElementById("output").innerHTML += `<br/>${this}`;
};

function clear(what) {
  what.innerHTML = "";
}

Object.prototype.clear = function () {
  this.innerHTML = "";
};

Array.prototype.append = function (what) {
  return this.push(what);
};

function len(what) {
  return what.length;
}

function error(msg) {
  alert(msg);
}

function doit(e) {
  const keycode_enter = 13;
  const keycode_esc = 27;
  const key = e.keyCode ? e.keyCode : e.which;
  if (key == keycode_enter) {
    getAllUserInput(true);
    main();
    e.preventDefault();
  } else if (key == keycode_esc) {
    document.getElementById("help").innerHTML = "";
  }
}

function addSet() {
  const table = document.getElementById("sets");
  const tbody = table.tBodies[0];
  const tr = table.insertRow(table.length);
  var td = document.createElement("td");
  tr.appendChild(td);
  var td = document.createElement("td");
  const txtbox = document.createElement("input");
  txtbox.setAttribute("type", "text");
  txtbox.setAttribute("value", "");
  txtbox.setAttribute("size", 50);
  txtbox.setAttribute("name", "set_txt");
  txtbox.setAttribute("onkeyup", "{pc_compatible();contour_compatible();}");
  txtbox.setAttribute("onchange", "{pc_compatible();contour_compatible();}");
  td.appendChild(txtbox);
  tr.appendChild(td);
  var td = document.createElement("td");
  const plusBtn = document.createElement("button");
  plusBtn.setAttribute("onclick", "addSet()");
  plusBtn.setAttribute("name", "set_btn");
  plusBtn.innerHTML = "+";
  td.appendChild(plusBtn);
  tr.appendChild(td);
  var td = document.createElement("td");
  const enableBtn = document.createElement("input");
  enableBtn.setAttribute("onclick", "main()");
  enableBtn.setAttribute("type", "checkbox");
  enableBtn.setAttribute("checked", true);
  enableBtn.setAttribute("name", "enableBtn");
  td.appendChild(enableBtn);
  tr.appendChild(td);
  tbody.appendChild(tr);
  table.appendChild(tbody);
  const plusBtns = document.getElementsByName("set_btn");
  plusBtns[plusBtns.length - 2].innerHTML = "-";
  plusBtns[plusBtns.length - 2].setAttribute("onclick", "{removeSet(this);pc_compatible();contour_compatible();main()}");
  document.getElementsByName("enableBtn")[0].disabled = false;
  for (let i = 1; i < table.rows.length; ++i) {
    table.rows[i].cells[0].innerHTML = (`${i}:`).bold();
  }
}

function removeSet(what) {
  const object = what.parentNode.parentNode;
  object.parentNode.removeChild(object);
  if (document.getElementsByName("enableBtn").length == 1) {
    document.getElementsByName("enableBtn")[0].disabled = true;
  }
  const table = document.getElementById("sets");
  for (let i = 1; i < table.rows.length; ++i) {
    table.rows[i].cells[0].innerHTML = (`${i}:`).bold();
  }
}

function setString(i, setDisplay, contour) {
  let count = 0;
  let k;
  for (let j = 0; j < errors.length; ++j) {
    if (errors[j] == false) ++count;
    if (count == (i + 1)) {
      k = j;
      break;
    }
  }
  if (contour == false) {
    switch (setDisplay) {
      case 0: return (k + 1).toString().bold(); break;
      case 1: return (`[${originals[i]}]`).italics();
      case 2: return `[${getNormalForm(sets[i]).toString()}]`;
      case 3: return `[${getPrimeForm(sets[i]).toString()}]`;
      case 4: return getForteNumber(sets[i]);
      case 5: return `${(k + 1).toString().bold()}: ` + `[${getNormalForm(sets[i]).toString()}]`;
      case 6: return `${(k + 1).toString().bold()}: ` + `[${getPrimeForm(sets[i]).toString()}]`;
      case 7: return `${(k + 1).toString().bold()}: ${getForteNumber(sets[i])}`;
    }
  } else {
    switch (setDisplay) {
      case 0: return (k + 1).toString().bold(); break;
      case 1: return (`[${originals[i]}]`).italics();
      case 2: return `<${CC(psets[i]).toString()}>`;
      case 3: return `${(k + 1).toString().bold()}: ` + `<${CC(psets[i]).toString()}>`;
    }
  }
}

function createTable(name, data, display, nDecimals, textBefore, textAfter, showFalseOrUndefined, contourCompatible, associative) {
  const table = document.createElement("table");
  table.setAttribute("border", "1");
  table.style.borderCollapse = "collapse";
  table.cellPadding = 2;
  const tbody = document.createElement("tbody");
  const n = []; for (var i = 0; i < data.length; ++i) n.push(0);
  for (var i = 0; i < data.length + 1; ++i) {
    if (i > data.length - n[n.length - 1]) break;
    const tr = document.createElement("tr");
    for (let j = 0; j < data.length + 1; ++j) {
      if (j > data.length - n[n.length - 1]) break;
      if ((i == 0) && (j == 0)) {
        var td = document.createElement("td");
        td.innerHTML = name.bold();
        tr.appendChild(td);
        continue;
      }
      if ((i == 0) && (j != 0)) {
        if ((contourCompatible == true) && (psets[j - 1 + n[j - 1]] == false)) {
          for (var k = j - 1; k < n.length; ++k) {
            ++n[k];
          }
          --j;
          continue;
        } else if ((j > 1) && (associative == true)) continue;
        else {
          if ((j == 1) || (associative != true)) {
            var td = document.createElement("td");
            td.innerHTML = setString(j - 1 + n[j - 1], display, contourCompatible == true);
            tr.appendChild(td);
          }
          continue;
        }
      }
      if ((i != 0) && (j == 0)) {
        var td = document.createElement("td");
        td.innerHTML = setString(i - 1 + n[i - 1], display, contourCompatible == true);
        tr.appendChild(td);
        continue;
      }
      if ((associative == true) && (j > i)) {
        var td = document.createElement("td");
        td.innerHTML = setString(j - 1 + n[j - 1], display, contourCompatible == true);
        tr.appendChild(td);
        break;
      }
      if ((i != 0) && (j != 0)) {
        var td = document.createElement("td");
        if (data[i - 1 + n[i - 1]] == undefined) continue;
        if ((showFalseOrUndefined == false) && (data[i - 1 + n[i - 1]][j - 1 + n[j - 1]].toString() != "0") && ((data[i - 1 + n[i - 1]][j - 1 + n[j - 1]] == false) || (data[i - 1 + n[i - 1]][k - 1 + n[k - 1]] == undefined))) {
          td.innerHTML = "";
        } else if (data[i - 1 + n[i - 1]][j - 1 + n[j - 1]].toString() == "NaN") {
          td.innerHTML = "?";
        } else if (nDecimals != false) {
          td.innerHTML = textBefore + round(data[i - 1 + n[i - 1]][j - 1 + n[j - 1]], nDecimals) + textAfter;
        } else {
          td.innerHTML = textBefore + data[i - 1 + n[i - 1]][j - 1 + n[j - 1]] + textAfter;
        }
        tr.appendChild(td);
      }
    }
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  print("");
  document.getElementById("output").appendChild(table);
}

function removeElement(array, index) {
  const new_array = [];
  for (let i = 0; i < array.length; ++i) {
    if (i != index) {
      new_array.push(array[i]);
    }
  }
  return new_array;
}
function unique(array) {
  const newArray = [];
  for (let i = 0; i < array.length; ++i) {
    let found = false;
    if (newArray.length != 0) {
      for (let j = newArray.length - 1; j >= 0; --j) {
        if (array[i].toString() == newArray[j].toString()) {
          found = true;
          break;
        }
      }
    }
    if (found == false) newArray.push(array[i]);
  }
  return newArray;
}
function isAnyElementIn(array, item) {
  for (let i = 0; i < array.length; ++i) {
    if (array[i] == item) return true;
  }
  return false;
}
function isEmbeddedIn(array, subset) {
  for (let i = 0; i < subset.length; ++i) {
    if (isAnyElementIn(array, subset[i]) == false) return false;
  }
  return true;
}
String.prototype.title = function () {
  let ret = this[0].toUpperCase();
  for (let i = 1; i < this.length; ++i) {
    ret += this[i];
  }
  return ret;
};

function sum(what) {
  let sum = 0;
  for (let i = 0; i < what.length; ++i) {
    sum += what[i];
  }
  return sum;
}

function round(what, decimals) {
  return Math.round(what * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

function factorial(n) {
  let output = n;
  for (let i = n - 1; i > 0; --i) {
    output *= i;
  }
  return output;
}

function min(a, b) {
  if (a < b) { return a; } return b;
}

function dot(a1, a2) {
  if (a1.length != a2.length) return undefined;
  result = 0;
  for (let i = 0; i < a1.length; ++i) result += a1[i] * a2[i];
  return result;
}

function stdev(a) {
  const avg = sum(a) / a.length;
  let result = 0;
  for (let i = 0; i < a.length; ++i) {
    result += Math.pow(a[i] - avg, 2);
  }
  result /= a.length;
  result = Math.sqrt(result);
  return result;
}

/* PC SET MANIPULATION */

function mod12interval_ordered(pc1, pc2) {
  const interval = (parseInt(pc2) - parseInt(pc1) + 12) % 12;
  return interval;
}
function mod12interval_unordered(pc1, pc2) {
  let interval = mod12interval_ordered(pc1, pc2);
  if (interval > 6) { interval = mod12interval_ordered(pc2, pc1); }
  return interval;
}
function mod12add(pc, interval) {
  return (parseInt(pc) + parseInt(interval) + 12) % 12;
}
function rotatePCset(PCset, n) {
  const newPCset = [];
  for (var i = n; i < PCset.length; ++i) {
    newPCset.push(PCset[i]);
  }
  if (n != 0) {
    for (var i = 0; i < n; ++i) {
      newPCset.push(PCset[i]);
    }
  }
  return newPCset;
}
function transposeSet(PCset, n) {
  const PCset_transposed = [];
  for (let i = 0; i < PCset.length; ++i) {
    PCset_transposed.push(mod12add(PCset[i], n));
  }
  return PCset_transposed;
}
function invert(PCset) {
  const PCset_inverted = [];
  for (let i = 0; i < PCset.length; ++i) {
    PCset_inverted.push(mod12add(PCset[PCset.length - 1 - i] * -1, 0));
  }
  return PCset_inverted;
}
function transposeTo0(PCset) {
  const PCset_transposed = [];
  for (let i = 0; i < PCset.length; ++i) {
    PCset_transposed.push(mod12add(PCset[i], PCset[0] * -1));
  }
  return PCset_transposed;
}
function combinations(set, k) { // courtesy of Akelsi Palen https://gist.github.com/axelpale/3118596
  let i; let j; let combs; let head; let
    tailcombs;
  if (k > set.length || k <= 0) {
    return [];
  }
  if (k == set.length) {
    return [set];
  }
  if (k == 1) {
    combs = [];
    for (i = 0; i < set.length; i++) {
      combs.push([set[i]]);
    }
    return combs;
  }
  // Assert {1 < k < set.length}
  combs = [];
  for (i = 0; i < set.length - k + 1; i++) {
    head = set.slice(i, i + 1);
    tailcombs = combinations(set.slice(i + 1), k - 1);
    for (j = 0; j < tailcombs.length; j++) {
      combs.push(head.concat(tailcombs[j]));
    }
  }
  return combs;
}

function permutations_fullSize(input) {
  const set = [];
  function permute(arr, data) {
    let cur; const
      memo = data || [];
    for (let i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1)[0];
      if (arr.length === 0) set.push(memo.concat([cur]));
      permute(arr.slice(), memo.concat([cur]));
      arr.splice(i, 0, cur);
    }
    return set;
  }
  return permute(input);
}

function permutations(set, k) {
  const combos = combinations(set, k);
  const ret = [];
  for (var i = 0; i < combos.length; ++i) {
    ret.push(permutations_fullSize(combos[i]));
  }
  const output = [];
  for (var i = 0; i < ret.length; ++i) {
    for (let j = 0; j < ret[i].length; ++j) {
      output.push(ret[i][j]);
    }
  }
  return output;
}

function format(input, showErrors) {
  const errors_exist = false;
  for (var i = 0; i < input.length; ++i) {
    input[i] = input[i].replace(/ /g, "");
    if (isNaN(input[i] % 1) == false) {
      if ((input[i] < 0) || (input[i] > 11) || (input[i] % 1 != 0)) {
        if (showErrors == true) {
          error(`Invalid input: ${input[i]}`);
        }
        return "error";
      }
    } else {
      if (PCintegers[input[i].title().replace(/[0-9]*$/, "")] == undefined) {
        if (showErrors == true) {
          error(`Invalid input: ${input[i]}`);
        }
        return "error";
      }

      input[i] = PCintegers[input[i].title().replace(/[0-9]*$/, "")];
    }
  }
  for (var i = input.length - 1; i >= 0; --i) {
    if (input[i].toString() == "") { input = removeElement(input, i); }
  }
  input.sort((a, b) => a - b);
  return input;
}

function getMidiNNs(input) {
  let octave; let pitch; let ret; let
    temp;
  ret = [];
  for (let i = 0; i < input.length; ++i) {
    temp = input[i];
    octave = temp.replace(/[A-Za-z]*/, "");
    octave = octave.replace(/#/, "");
    pitch = temp.replace(/[0-9]*$/, "");
    if (pitch != "") { pitch = pitch.title(); }
    if ((octave == "") || (pitch == "")) {
      return false;
    }
    ret.push(PCintegers[pitch] + (12 * (parseInt(octave) + 1)));
  }
  return ret;
}

function pc_compatible() {
  const txtboxes = document.getElementsByName("set_txt");
  let k = 0;
  let temp; let pitch; let octave; let arr; let x; let
    plusOne;
  for (var i = 0; i < txtboxes.length; ++i) {
    arr = txtboxes[i].value.split(",");
    plusOne = false;
    for (let j = 0; j < arr.length; ++j) {
      temp = arr[j];
      temp = temp.replace(/ /g, "");
      octave = temp.replace(/[A-Za-z]*/, "");
      octave = octave.replace(/#/, "");
      pitch = temp.replace(/[0-9]*$/, "");
      if (temp.replace(/ /g, "") == "") {
        continue;
      }
      if ((pitch == "") && (octave == "")) {
        plusOne = false;
        break;
      }
      if ((pitch != "") || (octave != "")) {
        plusOne = true;
      }
    }
    if (plusOne == true) ++k;
  }
  if (k == 0) {
    x = document.getElementsByName("analysisType_BasicInfo");
    for (var i = 0; i < x.length; ++i) { x[i].disabled = true; }
    x = document.getElementsByName("analysisType_Comparisons");
    for (var i = 0; i < x.length; ++i) { x[i].disabled = true; }
  } else if (k == 1) {
    x = document.getElementsByName("analysisType_BasicInfo");
    for (var i = 0; i < x.length; ++i) { x[i].disabled = false; }
    x = document.getElementsByName("analysisType_Comparisons");
    for (var i = 0; i < x.length; ++i) { x[i].disabled = true; }
  } else if (k > 1) {
    x = document.getElementsByName("analysisType_BasicInfo");
    for (var i = 0; i < x.length; ++i) { x[i].disabled = false; }
    x = document.getElementsByName("analysisType_Comparisons");
    for (var i = 0; i < x.length; ++i) { x[i].disabled = false; }
  }
}

function contour_compatible() {
  const txtboxes = document.getElementsByName("set_txt");
  let k = 0;
  let temp; let pitch; let octave; let arr; let x; let plusOne; let canBeTrue; let
    isValid;
  for (var i = 0; i < txtboxes.length; ++i) {
    arr = txtboxes[i].value.split(",");
    if (arr.join(",").replace(/ /g, "") == "") {
      txtboxes[i].style.borderColor = global_border;
      txtboxes[i].style.background = "white";
      continue;
    }
    plusOne = false;
    isValid = true;
    canBeTrue = true;
    for (let j = 0; j < arr.length; ++j) {
      temp = arr[j];
      temp = temp.replace(/ /g, "");
      octave = temp.replace(/[A-Za-z]*/, "");
      octave = octave.replace(/#/, "");
      pitch = temp.replace(/[0-9]*$/, "");
      if (temp.replace(/ /g, "") == "") {
        continue;
      }
      if (pitch != "") {
        if (PCintegers[pitch.toString().title()] == undefined) {
          plusOne = false;
          isValid = false;
          break;
        }
      }
      if ((octave != "") && (pitch == "")) {
        if ((parseInt(octave) < 0) || (parseInt(octave) > 11)) {
          plusOne = false;
          isValid = false;
          break;
        }
      }
      if ((octave == "") || (pitch == "")) {
        plusOne = false;
        canBeTrue = false;
      }
      if ((pitch != "") && (octave != "")) {
        if (canBeTrue == true) { plusOne = true; }
      }
    }
    if (plusOne == true) { ++k; txtboxes[i].style.borderColor = "#0000ff"; } else if (isValid == false) { txtboxes[i].style.borderColor = "#ff0000"; } else { txtboxes[i].style.borderColor = "#009900"; }
  }
  if (k == 0) {
    x = document.getElementsByName("analysisType_Contour");
    for (var i = 0; i < x.length; ++i) { x[i].disabled = true; }
    x = document.getElementsByName("analysisType_ContourComparisons");
    for (var i = 0; i < x.length; ++i) { x[i].disabled = true; }
  } else if (k == 1) {
    x = document.getElementsByName("analysisType_Contour");
    for (var i = 0; i < x.length; ++i) { x[i].disabled = false; }
    x = document.getElementsByName("analysisType_ContourComparisons");
    for (var i = 0; i < x.length; ++i) { x[i].disabled = true; }
  } else if (k > 1) {
    x = document.getElementsByName("analysisType_Contour");
    for (var i = 0; i < x.length; ++i) { x[i].disabled = false; }
    x = document.getElementsByName("analysisType_ContourComparisons");
    for (var i = 0; i < x.length; ++i) { x[i].disabled = false; }
  }
}

function getNormalForm(PCset) {
  const rotations = [];
  const intervals = [];
  for (var i = 0; i < PCset.length; ++i) {
    rotations.push(rotatePCset(PCset, i));
    intervals.push([]);
  }
  if (pfalgorithm == 0) {
    for (var i = 0; i < rotations.length; ++i) {
      for (var j = 0; j < rotations.length - 1; ++j) {
        intervals[i].push(mod12interval_ordered(rotations[i][0], rotations[i][len(rotations) - 1 - j]));
      }
    }
  } else if (pfalgorithm == 1) {
    for (var i = 0; i < rotations.length; ++i) {
      for (var j = 0; j < rotations.length - 1; ++j) {
        if (j == 0) {
          intervals[i].push(mod12interval_ordered(rotations[i][0], rotations[i][len(rotations) - 1 - j]));
        } else {
          intervals[i].push(mod12interval_ordered(rotations[i][0], rotations[i][j]));
        }
      }
    }
  }
  let rotationToUse = 0;
  for (var i = 1; i < len(intervals); ++i) {
    for (var j = 0; j < len(intervals[i]); ++j) {
      if (intervals[i][j] != intervals[rotationToUse][j]) {
        if (intervals[i][j] < intervals[rotationToUse][j]) {
          rotationToUse = i;
        }
        break;
      }
    }
  }
  return rotations[rotationToUse];
}

function getIntervalVector(PCset) {
  const intervalVector = [0, 0, 0, 0, 0, 0];
  for (let i = 0; i < PCset.length - 1; ++i) {
    for (let j = i + 1; j < PCset.length; ++j) {
      interval = mod12interval_unordered(PCset[i], PCset[j]);
      ++intervalVector[interval - 1];
    }
  }
  return intervalVector;
}

function getInvarianceVector(PCset) {
  const invarianceVector = [1, 0, 0, 0, 0, 0, 0, 0];
  if (findTranspositionalSymmetry(PCset) != false) {
    invarianceVector[0] += findTranspositionalSymmetry(PCset).toString().split(",").length;
  }
  if (findInversionalSymmetry(PCset) != false) {
    invarianceVector[1] += findInversionalSymmetry(PCset).toString().split(",").length;
  }
  for (let i = 0; i < 12; ++i) {
    ++invarianceVector[2];
    for (var j = 0; j < PCset.length; ++j) {
      if (!isAnyElementIn(PCset, transposeSet(PCset, i)[j] * 7 % 12)) {
        --invarianceVector[2];
        break;
      }
    }
    ++invarianceVector[3];
    for (var j = 0; j < PCset.length; ++j) {
      if (!isAnyElementIn(PCset, invert(transposeSet(PCset, i))[j] * 7 % 12)) {
        --invarianceVector[3];
        break;
      }
    }
    ++invarianceVector[4];
    for (var j = 0; j < PCset.length; ++j) {
      if (!isAnyElementIn(findComplement(PCset), transposeSet(PCset, i)[j])) {
        --invarianceVector[4];
        break;
      }
    }
    ++invarianceVector[5];
    for (var j = 0; j < PCset.length; ++j) {
      if (!isAnyElementIn(findComplement(PCset), invert(transposeSet(PCset, i))[j])) {
        --invarianceVector[5];
        break;
      }
    }
    ++invarianceVector[6];
    for (var j = 0; j < PCset.length; ++j) {
      if (!isAnyElementIn(findComplement(PCset), transposeSet(PCset, i)[j] * 7 % 12)) {
        --invarianceVector[6];
        break;
      }
    }
    ++invarianceVector[7];
    for (var j = 0; j < PCset.length; ++j) {
      if (!isAnyElementIn(findComplement(PCset), invert(transposeSet(PCset, i))[j] * 7 % 12)) {
        --invarianceVector[7];
        break;
      }
    }
  }
  return invarianceVector;
}

function getPrimeForm(PCset) {
  const l = PCset.length;
  const normalForm = getNormalForm(PCset);
  const normalForm0 = transposeTo0(normalForm);
  let normalForm0I = invert(normalForm0); normalForm0I = transposeTo0(normalForm0I); normalForm0I = getNormalForm(normalForm0I);
  let primeForm = normalForm0; // default
  for (let i = l - 1; i >= 0; --i) {
    const interval_noninverted = mod12interval_ordered(normalForm0[0], normalForm0[i]);
    const interval_inverted = mod12interval_ordered(normalForm0I[0], normalForm0I[i]);
    if (interval_noninverted < interval_inverted) {
      break;
    } else if (interval_noninverted > interval_inverted) {
      primeForm = normalForm0I;
      break;
    }
  }
  return primeForm;
}

function getForteNumber(PCset) {
  PCset = getPrimeForm(PCset);
  if ((PCset.length < 7) && (PCset.length != 0)) {
    if (pfalgorithm == 1) {
      if (PCset.toString() == "0,1,3,7,8") return "5-20";
      if (PCset.toString() == "0,1,3,6,8,9") return "6-z29";
      if (PCset.toString() == "0,1,3,5,8,9") return "6-31";
      if (PCset.toString() == "0,1,2,4,7,8,9") return "7-20";
      if (PCset.toString() == "0,1,2,4,5,7,9,10") return "8-226";
    }
    return forte_sets[PCset.toString()];
  }
  if ((PCset.length > 6) && (PCset.length < 12)) {
    for (i in forte_sets) {
      if (isComplementary(i.split(","), PCset)) {
        let return_val = forte_sets[i];
        return_val = return_val.replace(/[1-6]/, PCset.length);
        return return_val;
      }
    }
  } else if (PCset.length == 12) {
    return "12-1";
  }
  return "an error occurred... sorry!";
}

function findTranspositionalSymmetry(PCset) {
  let PCset_temp = PCset;
  let returnVal = "";
  let sep = "";
  for (let i = 1; i < 12; ++i) {
    let nCommonPitches = 0;
    PCset_temp = transposeSet(PCset, i);
    for (let j = 0; j < PCset_temp.length; ++j) {
      if (isAnyElementIn(PCset, PCset_temp[j]) == false) {
        break;
      } else {
        ++nCommonPitches;
      }
      if (nCommonPitches == PCset.length) {
        returnVal += `${sep}T${i.toString().sub()}`;
        sep = ", ";
        break;
      }
    }
  }
  if (returnVal != "") { return returnVal; } return false;
}

function findInversionalSymmetry(PCset) {
  let returnVal = "";
  let sep = "";
  let PCset_temp;
  for (let i = 0; i < 12; ++i) {
    let nCommonPitches = 0;
    PCset_temp = transposeSet(invert(PCset), i);
    for (let j = 0; j < PCset_temp.length; ++j) {
      if (isAnyElementIn(PCset, PCset_temp[j]) == false) {
        break;
      } else {
        ++nCommonPitches;
      }
      if (nCommonPitches == PCset.length) {
        returnVal += `${sep}T${i.toString().sub()}I`;
        sep = ", ";
        break;
      }
    }
  }
  if (returnVal != "") { return returnVal; } return false;
}

function isComplementary(PCset1, PCset2) {
  let returnVal = "";
  let sep = "";
  if ((PCset1.length + PCset2.length) != 12) {
    return false;
  }
  for (var i = 0; i < 12; ++i) {
    var PCset_combined = PCset1.concat(transposeSet(PCset2, i));
    PCset_combined.sort((a, b) => a - b);
    if (PCset_combined.toString() == "0,1,2,3,4,5,6,7,8,9,10,11") {
      returnVal += `${sep}T${i.toString().sub()}`;
      sep = ", ";
    }
  }
  PCset2_temp = invert(PCset2);
  for (var i = 0; i < 12; ++i) {
    PCset_combined = PCset1.concat(transposeSet(PCset2_temp, i));
    PCset_combined.sort((a, b) => a - b);
    if (PCset_combined.toString() == "0,1,2,3,4,5,6,7,8,9,10,11") {
      returnVal += `${sep}T${i.toString().sub()}I`;
      sep = ", ";
    }
  }
  if (returnVal != "") { return returnVal; } return false;
}

function findComplement(PCset) {
  if (PCset.length == 12) return undefined;
  const pf = getPrimeForm(PCset);
  const complement = [];
  for (let i = 0; i < 12; ++i) {
    let include_i = true;
    for (let j = 0; j < PCset.length; ++j) {
      if (pf[j] == i) {
        include_i = false;
        break;
      }
    }
    if (include_i == true) { complement.push(i); }
  }
  return complement;
}

function findZ(PCset) {
  if (PCset.length == 1) {
    return undefined;
  }
  const myIV = getIntervalVector(PCset);
  const myPrimeForm = getPrimeForm(PCset);
  for (const i in forte_sets) {
    const thisSet = i.split(",");
    for (let j = 0; j < thisSet.length; ++j) {
      thisSet[j] = parseInt(thisSet[j]);
    }
    const x = getPrimeForm(thisSet);
    if ((myIV.toString() == getIntervalVector(thisSet).toString()) && (myPrimeForm.toString() != getPrimeForm(thisSet).toString())) { return thisSet; }
  }
  return undefined;
}

function Tn(PCset1, PCset2) {
  const l1 = PCset1.length;
  const l2 = PCset2.length;
  let returnVal = "";
  let sep = "";
  let interval = [];
  if (l1 != l2) {
    return false;
  }

  const l = l1; // = l2
  PCset2.sort((a, b) => a - b);
  PCset1 = getNormalForm(PCset1);
  PCset2 = getNormalForm(PCset2);
  let PCset_rotated;
  for (let n = 0; n < l; ++n) {
    PCset2_rotated = rotatePCset(PCset2, n);
    interval.push([]);
    for (var i = 0; i < l; ++i) {
      interval[n].push(mod12interval_ordered(PCset1[i], PCset2_rotated[i]));
    }
    interval[n] = unique(interval[n]);
  }

  for (var i = interval.length - 1; i >= 0; --i) {
    if (interval[i].length != 1) {
      interval = removeElement(interval, i);
    }
  }
  for (var i = 0; i < interval.length; ++i) {
    if (interval[i] != undefined) {
      returnVal += `${sep}T${interval[i].toString().sub()}`;
      sep = ", ";
    }
  }
  if (returnVal != "") { return returnVal; } return false;
}

function TnI(PCset1, PCset2) {
  const l1 = PCset1.length;
  const l2 = PCset2.length;
  let returnVal = "";
  let sep = "";
  let interval = [];
  if (l1 != l2) {
    return false;
  }

  const l = l1; // = l2
  PCset2 = invert(PCset2);
  PCset2.sort((a, b) => a - b);
  PCset1 = getNormalForm(PCset1);
  PCset2 = getNormalForm(PCset2);
  let PCset_rotated;
  for (let n = 0; n < l; ++n) {
    PCset2_rotated = rotatePCset(PCset2, n);
    interval.push([]);
    for (var i = 0; i < l; ++i) {
      interval[n].push(mod12interval_ordered(PCset1[i], PCset2_rotated[i]));
    }
    interval[n] = unique(interval[n]);
  }

  for (var i = interval.length - 1; i >= 0; --i) {
    if (interval[i].length != 1) {
      interval = removeElement(interval, i);
    }
  }
  for (var i = 0; i < interval.length; ++i) {
    if (interval[i] != undefined) {
      returnVal += `${sep}T${interval[i].toString().sub()}I`;
      sep = ", ";
    }
  }
  if (returnVal != "") { return returnVal; } return false;
}

function Z(PCset1, PCset2) {
  if ((Tn(PCset1, PCset2) == false) && (TnI(PCset1, PCset2) == false) && (getIntervalVector(PCset1).toString() == getIntervalVector(PCset2).toString())) {
    return true;
  }

  return false;
}

function M(PCset1, PCset2) {
  const pf1 = getPrimeForm(PCset1);
  const pf2 = getPrimeForm(PCset2);
  if ((pf1.length != pf2.length) || (pf1.length < 3) || (pf2.length < 3)) {
    return false;
  }
  const m = [];
  let result;
  let multiplier;
  for (let i = 2; i < 12; ++i) {
    result = [];
    for (let j = 0; j < pf1.length; ++j) {
      result.push(pf1[j] * i);
    }
    if (getPrimeForm(result).toString() == pf2.toString()) {
      return i;
    }
  }
  return false;
}

function isSubsetOf(subset, superset) {
  const pf1 = getPrimeForm(subset);
  const pf2 = getPrimeForm(superset);
  if (pf1.length >= pf2.length) return false;
  function compare(pf1, pf2) {
    let nDifferent = 0;
    const unused = [];
    for (var i = 0; i < pf2.length; ++i) unused.push(i);
    for (var i = 0; i < pf1.length; ++i) {
      let matched = false;
      for (let j = 0; j < pf2.length; ++j) {
        if (unused[j] == undefined) continue;
        if (pf1[i] == pf2[j]) {
          unused[j] = undefined;
          matched = true;
          break;
        }
      }
      if (matched == false) ++nDifferent;
    }
    if (nDifferent != 0) {
      return false;
    }
    return true;
  }
  for (var i = 0; i < 12; ++i) {
    if (compare(pf1, transposeSet(pf2, i))) return true;
  }
  for (var i = 0; i < 12; ++i) {
    if (compare(pf1, transposeSet(invert(pf2), i))) return true;
  }
  return false;
}

function R(PCset1, PCset2) {
  const pf1 = getPrimeForm(PCset1);
  const pf2 = getPrimeForm(PCset2);
  const iv1 = getIntervalVector(PCset1);
  const iv2 = getIntervalVector(PCset2);
  if (pf1.length != pf2.length) {
    return false;
  }
  function compare(pf1, pf2) {
    let nDifferent = 0;
    const unused = [];
    for (var i = 0; i < pf1.length; ++i) { unused.push(i); }
    for (var i = 0; i < pf1.length; ++i) {
      let matched = false;
      for (var j = 0; j < pf1.length; ++j) {
        if (unused[j] == undefined) {
          continue;
        }
        if (pf1[i] == pf2[j]) {
          unused[j] = undefined;
          matched = true;
          break;
        }
      }
      if (matched == false) {
        for (var j = 0; j < pf1.length; ++j) {
          if (unused[j] == undefined) {
            continue;
          }
          if (Math.abs(pf1[i] - pf2[j]) == 1) {
            unused[j] = undefined;
            matched = true;
            ++nDifferent;
            break;
          }
        }
        if (matched == false) {
          return false;
        }
        if (nDifferent != 1) {
          return false;
        }
      }
    }
    return true;
  }
  if ((compare(pf1, pf2) == false) && (compare(pf1, transposeTo0(invert(pf2))) == false)) {
    return false;
  }
  const S = sum(iv1);
  const C = pf1.length;
  let T = 0;
  for (let i = 0; i < 6; ++i) {
    T += Math.min(iv1[i], iv2[i]);
  }
  if ((S * C / 8) > T) {
    return false;
  }
  return true;
}
function Rp(PCset1, PCset2) {
  const pf1 = getPrimeForm(PCset1);
  const pf2 = getPrimeForm(PCset2);
  if (pf1.length != pf2.length) {
    return false;
  }
  function compare(pf1, pf2) {
    let nDifferent = 0;
    const unused = [];
    for (var i = 0; i < pf1.length; ++i) unused.push(i);
    for (var i = 0; i < pf1.length; ++i) {
      let matched = false;
      for (let j = 0; j < pf1.length; ++j) {
        if (unused[j] == undefined) continue;
        if (pf1[i] == pf2[j]) {
          unused[j] = undefined;
          matched = true;
          break;
        }
      }
      if (matched == false) ++nDifferent;
    }
    if (nDifferent != 1) {
      return false;
    }
    return true;
  }
  for (var i = 0; i < 12; ++i) {
    if (compare(pf1, transposeSet(pf2, i))) return true;
  }
  for (var i = 0; i < 12; ++i) {
    if (compare(pf1, transposeSet(invert(pf2), i))) return true;
  }
  return false;
}
function R0_1_2(PCset1, PCset2) {
  const iv1 = getIntervalVector(PCset1);
  const iv2 = getIntervalVector(PCset2);
  const matched = [];
  const unmatched = [];
  for (let i = 0; i < 6; ++i) {
    if ((iv1[i] == iv2[i])) {
      matched.push(i);
      continue;
    }
    unmatched.push(i);
  }
  if (unmatched.length == 6) {
    return "o";
  }
  if (matched.length < 4) {
    return false;
  }
  if (matched.length == 4) {
    if ((iv1[unmatched[0]] == iv2[unmatched[1]]) && (iv1[unmatched[1]] == iv2[unmatched[0]])) {
      return "1";
    }
  }
  return "2";
}

function K(PCset1, PCset2) {
  if ((PCset2.length == 12) || (PCset1.length == 12)) return true;
  if (isSubsetOf(PCset1, PCset2) || isSubsetOf(PCset1, findComplement(PCset2))) {
    return true;
  }
  if (isSubsetOf(PCset2, PCset1) || isSubsetOf(PCset2, findComplement(PCset1))) {
    return true;
  }

  return false;
}

function Kh(PCset1, PCset2) {
  if ((PCset1.length == 12) || (PCset2.length == 12)) return false;
  if (isSubsetOf(PCset1, PCset2) && isSubsetOf(PCset1, findComplement(PCset2))) {
    return true;
  }
  if (isSubsetOf(PCset2, PCset1) && isSubsetOf(PCset2, findComplement(PCset1))) {
    return true;
  }

  return false;
}

function SIM(PCset1, PCset2) {
  const iv1 = getIntervalVector(PCset1);
  const iv2 = getIntervalVector(PCset2);
  let sim = 0;
  for (let i = 0; i < 6; ++i) {
    sim += mod12interval_unordered(iv1[i], iv2[i]);
  }
  return sim;
}

function ASIM(PCset1, PCset2) {
  if ((PCset1.length == 1) || (PCset2.length == 1)) return 0;
  const iv1 = getIntervalVector(PCset1);
  const iv2 = getIntervalVector(PCset2);
  if ((sum(iv1) + sum(iv2)) == 0) return "ERROR: divide-by-zero";
  const asim = SIM(PCset1, PCset2) / (sum(iv1) + sum(iv2));
  return asim;
}

function k(PCset1, PCset2) {
  const iv1 = getIntervalVector(PCset1);
  const iv2 = getIntervalVector(PCset2);
  let k = 0;
  for (let i = 0; i < 6; ++i) {
    k += Math.min(iv1[i], iv2[i]);
  }
  return k;
}

function ak(PCset1, PCset2) {
  const iv1 = getIntervalVector(PCset1);
  const iv2 = getIntervalVector(PCset2);
  if ((sum(iv1) + sum(iv2)) == 0) return "ERROR: divide-by-zero";
  const ak = k(PCset1, PCset2) / ((sum(iv1) + sum(iv2)) / 2);
  return ak;
}

function EMB(PCset1, PCset2) {
  const primeForm1 = getPrimeForm(PCset1);
  const primeForm1_inverted = transposeTo0(invert(primeForm1));
  const primeForm2 = getPrimeForm(PCset2);
  let n = 0;
  let allPrimeForms = [];
  for (var i = 0; i < 12; ++i) { allPrimeForms.push(transposeSet(primeForm1, i).sort((a, b) => a - b)); }
  for (var i = 0; i < 12; ++i) { allPrimeForms.push(transposeSet(primeForm1_inverted, i).sort((a, b) => a - b)); }
  allPrimeForms = unique(allPrimeForms);
  for (var i = 0; i < allPrimeForms.length; ++i) {
    if (isEmbeddedIn(primeForm2, allPrimeForms[i])) { ++n; }
  }
  return n;
}

function REL(PCset1, PCset2) {
  let t = 0;
  let total1 = 0;
  let total2 = 0;
  const primeForm1 = getPrimeForm(PCset1);
  const primeForm2 = getPrimeForm(PCset2);
  if (primeForm1.length < primeForm2.length) {
    var largerPCset = primeForm2;
    var smallerPCset = primeForm1;
  } else {
    var largerPCset = primeForm1;
    var smallerPCset = primeForm2;
  }
  for (let i = 2; i <= smallerPCset.length; ++i) {
    const combos1 = combinations(primeForm1, i);
    const combos2 = combinations(primeForm2, i);
    let subsets = [];
    const subsets1 = [];
    const subsets2 = [];
    for (var j = 0; j < combos1.length; ++j) {
      var p = getPrimeForm(combos1[j]);
      subsets.push(p);
      subsets1.push(p);
    }
    for (var j = 0; j < combos2.length; ++j) {
      var p = getPrimeForm(combos2[j]);
      subsets.push(p);
      subsets2.push(p);
    }
    subsets = unique(subsets);
    for (var j = 0; j < subsets.length; ++j) {
      const subset = subsets[j];
      let n1 = 0;
      let n2 = 0;
      for (var k = 0; k < subsets1.length; ++k) {
        if (subsets1[k].toString() == subset.toString()) {
          ++n1;
        }
      }
      for (var k = 0; k < subsets2.length; ++k) {
        if (subsets2[k].toString() == subset.toString()) {
          ++n2;
        }
      }
      total1 += n1;
      total2 += n2;
      t += Math.sqrt(n1 * n2);
    }
  }
  return (t / Math.sqrt(total1 * total2));
}

function COV(PCset1, PCset2) {
  if ((PCset1.length == 12) && (PCset2.length != 12)) return 0;
  if (PCset2.length == 12) return 1;
  return EMB(findComplement(PCset2), findComplement(PCset1));
}

function MAXSIM(PCset1, PCset2) {
  let l;
  if (PCset1.length <= PCset2.length) l = PCset1.length;
  else l = PCset2.length;
  let max_k = 0;
  for (let i = l - 1; i > 0; --i) max_k += i;
  if (k(PCset1, PCset2) == max_k) return true;
  return false;
}

function TMEMB(PCset1, PCset2) {
  let n = 0;
  const primeForm1 = getPrimeForm(PCset1);
  const primeForm2 = getPrimeForm(PCset2);
  if (primeForm1.length < primeForm2.length) {
    var smallerPCset = primeForm1;
  } else {
    var smallerPCset = primeForm2;
  }
  for (let i = 2; i <= smallerPCset.length + 1; ++i) {
    const combos1 = combinations(primeForm1, i);// + combinations(primeForm2,i)
    const combos2 = combinations(primeForm2, i);
    const subsets = [];
    const subsets1 = [];
    const subsets2 = [];
    for (var j = 0; j < combos1.length; ++j) {
      var p = getPrimeForm(combos1[j]);
      subsets.push(p);
      subsets1.push(p);
    }
    for (var j = 0; j < combos2.length; ++j) {
      var p = getPrimeForm(combos2[j]);
      subsets.push(p);
      subsets2.push(p);
    }
    for (var j = 0; j < subsets.length; ++j) {
      const subset = subsets[j];
      let found0 = false;
      let found1 = false;
      for (var k = 0; k < subsets1.length; ++k) {
        if (subsets1[k].toString() == subset.toString()) {
          found0 = true;
          break;
        }
      }
      if (found0 == false) continue;
      for (var k = 0; k < subsets2.length; ++k) {
        if (subsets2[k].toString() == subset.toString()) {
          found1 = true;
          break;
        }
      }
      if (found1 == false) continue;
      ++n;
    }
  }
  return n;
}

function ATMEMB(PCset1, PCset2) {
  if ((PCset1.length == 1) || (PCset2.length == 1)) return 1;
  if ((Math.pow(2, PCset1.length) + Math.pow(2, PCset2.length) - (PCset1.length + PCset2.length + 2)) == 0) { return "ERROR: divide-by-zero"; }
  return TMEMB(PCset1, PCset2) / (Math.pow(2, PCset1.length) + Math.pow(2, PCset2.length) - (PCset1.length + PCset2.length + 2));
}

function IcVSIM(PCset1, PCset2) {
  const iv1 = getIntervalVector(PCset1);
  const iv2 = getIntervalVector(PCset2);
  const IdV = [0, 0, 0, 0, 0, 0];
  for (let i = 0; i < 6; ++i) {
    IdV[i] = iv1[i] - iv2[i];
  }
  return stdev(IdV);
}

function ISIM2(PCset1, PCset2) {
  const iv1 = getIntervalVector(PCset1);
  const iv2 = getIntervalVector(PCset2);
  for (var i = 0; i < iv1.length; ++i) iv1[i] = Math.sqrt(iv1[i]);
  for (var i = 0; i < iv2.length; ++i) iv2[i] = Math.sqrt(iv2[i]);
  const IdV = [0, 0, 0, 0, 0, 0];
  for (var i = 0; i < 6; ++i) {
    IdV[i] = iv1[i] - iv2[i];
  }
  return stdev(IdV);
}
function Angle(PCset1, PCset2) {
  if ((PCset1.length == 1) || (PCset2.length == 1)) return 0;
  iv1 = getIntervalVector(PCset1);
  iv2 = getIntervalVector(PCset2);
  if (iv1.toString() == iv2.toString()) return 0;
  return Math.acos(dot(iv1, iv2) / (Math.sqrt(dot(iv1, iv1)) * Math.sqrt(dot(iv2, iv2))));
}

function CC(Pset) {
  cc = [];
  let offset = 0;
  for (let i = 0; i < Pset.length; ++i) {
    rank = 0;
    for (var j = 0; j < Pset.length; ++j) {
      if ((i != j) && (Pset[i] > Pset[j])) {
        ++rank;
      }
    }
    cc.push(rank);
    if (cc.length > 1) {
      for (var j = 0; j < cc.length; ++j) {
        if (i != j) {
          if (cc[i] == cc[j]) {
            offset -= 1;
            for (let k = 0; k < cc.length; ++k) {
              if (cc[k] > rank) { cc[k] -= 1; }
            }
          }
        }
      }
    }
  }
  return cc;
}

function CAS(Pset) {
  cas = [];
  cc = CC(Pset);
  for (let i = 1; i < cc.length; ++i) {
    if (cc[i] > cc[i - 1]) {
      cas.push("+");
    } else if (cc[i] < cc[i - 1]) {
      cas.push("-");
    } else {
      cas.push("0");
    }
  }
  return cas;
}

function CASV(Pset) {
  casv = [0, 0];
  cas = CAS(Pset);
  for (let i = 0; i < cas.length; ++i) {
    if (cas[i] == "+") {
      ++casv[0];
    } else if (cas[i] == "-") {
      ++casv[1];
    }
  }
  return casv;
}

function CIS(Pset) {
  const cis = [];
  const cc = CC(Pset);
  for (let i = 1; i < cc.length; ++i) {
    if (cc[i] > cc[i - 1]) {
      cis.push(`+${cc[i] - cc[i - 1]}`);
    } else if (cc[i] < cc[i - 1]) {
      cis.push(`-${cc[i - 1] - cc[i]}`);
    } else {
      cis.push("0");
    }
  }
  return cis;
}

function CIA_pos(Pset) {
  const cc = CC(Pset);
  const ciaPos = [];
  for (var i = 0; i < cc.length - 1; ++i) {
    ciaPos.push(0);
  }
  for (var i = 0; i < cc.length - 1; ++i) {
    for (let j = i + 1; j < cc.length; ++j) {
      if ((cc[j] - cc[i]) > 0) {
        ++ciaPos[cc[j] - cc[i] - 1];
      }
    }
  }
  return ciaPos;
}

function CIA_neg(Pset) {
  const cc = CC(Pset);
  const ciaNeg = [];
  for (var i = 0; i < cc.length - 1; ++i) {
    ciaNeg.push(0);
  }
  for (var i = 0; i < cc.length - 1; ++i) {
    for (let j = i + 1; j < cc.length; ++j) {
      if (cc[j] - cc[i] < 0) {
        ++ciaNeg[cc[i] - cc[j] - 1];
      }
    }
  }
  return ciaNeg;
}

function CIA(Pset) {
  return `${CIA_pos(Pset)} / ${CIA_neg(Pset)}`;
}

function CCV_I(Pset) {
  const ciaPos = CIA_pos(Pset);
  const ciaNeg = CIA_neg(Pset);
  const l = ciaPos.length;
  const ccv_i = [0, 0];
  for (let i = 0; i < l; ++i) {
    ccv_i[0] += ciaPos[i] * (i + 1);
    ccv_i[1] += ciaNeg[i] * (i + 1);
  }
  return ccv_i;
}

function CCV_II(Pset) {
  const ciaPos = CIA_pos(Pset);
  const ciaNeg = CIA_neg(Pset);
  const l = ciaPos.length;
  const ccv_ii = [0, 0];
  for (let i = 0; i < l; ++i) {
    ccv_ii[0] += ciaPos[i];
    ccv_ii[1] += ciaNeg[i];
  }
  return ccv_ii;
}

function COM(Pset) {
  const l = Pset.length;
  const com = [];
  for (var i = 0; i < l; ++i) {
    com.push([]);
  }
  for (var i = 0; i < l; ++i) {
    for (let j = 0; j < l; ++j) {
      if (Pset[i] == Pset[j]) {
        com[i].push("0");
      } else if (Pset[i] > Pset[j]) {
        com[i].push("-");
      } else if (Pset[i] < Pset[j]) {
        com[i].push("+");
      }
    }
  }
  return com;
}

function printCOM(Pset) {
  const com = COM(Pset);
  const cc = CC(Pset);
  print("COM Matrix:");
  print(`${"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "&nbsp;&nbsp;"}${cc.toString().replace(/,/g, "")}`);
  for (let i = 0; i < Pset.length; ++i) {
    print(`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${cc[i].toString()}|${com[i].toString().replace(/,/g, "")}`);
  }
}

function CSIM(Pset1, Pset2) {
  if (Pset1.length != Pset2.length) return undefined;
  const l = len(Pset1);
  const com1 = COM(Pset1);
  const com2 = COM(Pset2);
  let nSimilar = 0;
  let nPositions = 0;
  for (var i = l - 1; i > 0; --i) nPositions += i;
  for (var i = 0; i < l; ++i) {
    for (let j = 0; j < l; ++j) {
      if (i >= j) continue;
      if (com1[i][j] == com2[i][j]) {
        ++nSimilar;
      }
    }
  }
  return nSimilar / nPositions;
}

function CEMB(Pset1, Pset2) {
  if (Pset1.length > Pset2.length) { return 0; }
  const cc1 = CC(Pset1);
  const allCombinations = combinations(Pset2, Pset1.length);
  let n = 0;
  for (let i = 0; i < allCombinations.length; ++i) {
    const c = CC(allCombinations[i]);
    if (cc1.toString() == c.toString()) {
      ++n;
    }
  }
  return (n / allCombinations.length);
}

function CMEMB(Pset1, Pset2) {
  let n = 0;
  const cc1 = CC(Pset1);
  const cc2 = CC(Pset2);
  if (cc1.length < cc2.length) {
    l = cc1.length;
  } else {
    l = cc2.length;
  }
  let subsets = [];
  for (let i = 2; i <= l; ++i) {
    const subsets1 = combinations(cc1, i);// # + combinations(primeForm2,i)
    const subsets2 = combinations(cc2, i);
    for (var j = 0; j < subsets1.length; ++j) {
      subsets1[j] = CC(subsets1[j]);
    }
    for (var j = 0; j < subsets2.length; ++j) {
      subsets2[j] = CC(subsets2[j]);
    }
    for (var j = 0; j < subsets1.length; ++j) {
      subsets.push(subsets1[j]);
    }
    for (var j = 0; j < subsets2.length; ++j) {
      subsets.push(subsets2[j]);
    }
    const allSubsets = [];
    var isUnique;
    for (var j = 0; j < subsets.length; ++j) {
      isUnique = true;
      for (var k = j; k < subsets.length; ++k) {
        if ((j != k) && (subsets[k].toString() == subsets[j].toString())) {
          isUnique = false;
          break;
        }
      }
      if (isUnique == true) { allSubsets.push(subsets[j]); }
    }
    subsets = allSubsets;
    for (var j = 0; j < subsets.length; ++j) {
      let emb1 = 0;
      let emb2 = 0;
      for (var k = 0; k < subsets1.length; ++k) {
        if (subsets[j].toString() == subsets1[k].toString()) {
          ++emb1;
        }
      }
      for (var k = 0; k < subsets2.length; ++k) {
        if (subsets[j].toString() == subsets2[k].toString()) {
          ++emb2;
        }
      }
      if ((emb1 > 0) && (emb2 > 0)) {
        n += emb1 + emb2;
      }
    }
  }
  return n;
}

function ACMEMB(Pset1, Pset2) {
  const cmemb = CMEMB(Pset1, Pset2);
  const l1 = CC(Pset1).length;
  const l2 = CC(Pset2).length;
  const nSubsets1 = Math.pow(2, l1) - l1 - 1;
  const nSubsets2 = Math.pow(2, l2) - l2 - 1;
  const nSubsets = nSubsets1 + nSubsets2;
  if (nSubsets == 0) { return "ERROR: divide-by-zero"; }
  return cmemb / nSubsets;
}

/* MAIN FUNCTIONS */
function getAllUserInput(showErrors) {
  originals = [];
  errors = [];
  for (var i = 0; i < document.getElementsByName("set_txt").length; ++i) {
    if (document.getElementsByName("enableBtn")[i].checked == true) {
      originals.push(document.getElementsByName("set_txt")[i].value);
      errors.push(false);
    } else {
      errors.push(true);
    }
  }
  let inputs = [];
  for (var i = 0; i < originals.length; ++i) inputs.push(originals[i]);
  for (var i = 0; i < inputs.length; ++i) {
    originals[i] = originals[i].split(",");
    for (var j = 0; j < originals[i].length; ++j) {
      originals[i][j] = originals[i][j].replace(/ /g, "");
    }
    for (var j = originals[i].length - 1; j >= 0; --j) {
      if (originals[i][j].toString() == "") {
        originals[i] = removeElement(originals[i], j);
      }
    }
    inputs[i] = inputs[i].split(",");
    for (var j = 0; j < inputs[i].length; ++j) {
      inputs[i][j] = inputs[i][j].replace(/ /g, "");
    }
    for (var j = inputs[i].length - 1; j >= 0; --j) {
      if (inputs[i][j].toString() == "") {
        inputs[i] = removeElement(inputs[i], j);
      }
    }
  }
  for (var i = originals.length - 1; i >= 0; --i) {
    if (originals[i].toString().replace(/ /g, "") == "") {
      inputs = removeElement(inputs, i);
      originals = removeElement(originals, i);
      errors[i] = true;
    } else if (showErrors == false) {
      const formattedInput = format(inputs[i], true);
      if (formattedInput == "error") {
        inputs = removeElement(inputs, i);
        originals = removeElement(originals, i);
        errors[i] = true;
      }
    }
  }
  if (showErrors == false) {
    return [originals, inputs];
  }
}

function main() {
  document.getElementById("output").clear();
  const allUserInput = getAllUserInput(false);
  const originals = allUserInput[0];
  const inputs = allUserInput[1];
  sets = [];
  for (var i = 0; i < inputs.length; ++i) {
    sets.push(unique(inputs[i]));
  }
  psets = [];
  for (var i = 0; i < inputs.length; ++i) {
    psets.push(getMidiNNs(originals[i]));
  }
  const steps = {};

  steps.normal_form = document.getElementById("analysis_BasicInfo_NormalForm").checked;
  steps.interval_vector = document.getElementById("analysis_BasicInfo_IntervalVector").checked;
  steps.invariance_vector = document.getElementById("analysis_BasicInfo_InvarianceVector").checked;
  steps.prime_form = document.getElementById("analysis_BasicInfo_PrimeForm").checked;
  steps.forte = document.getElementById("analysis_BasicInfo_SetClass").checked;
  steps.transpositional_symmetry = document.getElementById("analysis_BasicInfo_TranspositionalSymmetry").checked;
  steps.self_complementary = document.getElementById("analysis_BasicInfo_SelfComplementary").checked;
  steps.find_complementary = document.getElementById("analysis_BasicInfo_Complement").checked;
  steps.find_Z = document.getElementById("analysis_BasicInfo_Z").checked;
  steps.R = document.getElementById("analysis_Comparisons_R").checked;
  steps["K/Kh"] = document.getElementById("analysis_Comparisons_KKh").checked;
  steps.TnI = document.getElementById("analysis_Comparisons_TnI").checked;
  steps.Z = document.getElementById("analysis_Comparisons_Z").checked;
  steps.M = document.getElementById("analysis_Comparisons_M").checked;
  steps.complementary = document.getElementById("analysis_Comparisons_Complementary").checked;
  steps.subset_superset = document.getElementById("analysis_Comparisons_Subset").checked;
  steps.SIM = false;// document.getElementById("analysis_Comparisons_SIM").checked;
  steps.ASIM = document.getElementById("analysis_Comparisons_ASIM").checked;
  steps.k = false;// document.getElementById("analysis_Comparisons_k").checked;
  steps.ak = document.getElementById("analysis_Comparisons_ak").checked;
  steps.EMB = document.getElementById("analysis_Comparisons_EMB").checked;
  steps.REL = document.getElementById("analysis_Comparisons_REL").checked;
  steps.COV = document.getElementById("analysis_Comparisons_COV").checked;
  steps.MAXSIM = document.getElementById("analysis_Comparisons_MAXSIM").checked;
  steps.TMEMB = false;// document.getElementById("analysis_Comparisons_TMEMB").checked;
  steps.ATMEMB = document.getElementById("analysis_Comparisons_ATMEMB").checked;
  steps.IcVSIM = document.getElementById("analysis_Comparisons_IcVSIM").checked;
  steps.ISIM2 = document.getElementById("analysis_Comparisons_ISIM2").checked;
  steps.Angle_rad = document.getElementById("analysis_Comparisons_Angle_rad").checked;
  steps.Angle_deg = document.getElementById("analysis_Comparisons_Angle_deg").checked;
  steps.CC = document.getElementById("analysis_Contour_CC").checked;
  steps.CAS = document.getElementById("analysis_Contour_CAS").checked;
  steps.CASV = document.getElementById("analysis_Contour_CASV").checked;
  steps.CIS = document.getElementById("analysis_Contour_CIS").checked;
  steps.CIA = document.getElementById("analysis_Contour_CIA").checked;
  steps.CCVI = document.getElementById("analysis_Contour_CCVI").checked;
  steps.CCVII = document.getElementById("analysis_Contour_CCVII").checked;
  steps.COM = document.getElementById("analysis_Contour_COM").checked;
  steps.CSIM = document.getElementById("analysis_ContourComparisons_CSIM").checked;
  steps.CEMB = document.getElementById("analysis_ContourComparisons_CEMB").checked;
  steps.CMEMB = false;// document.getElementById("analysis_ContourComparisons_CMEMB").checked;
  steps.ACMEMB = document.getElementById("analysis_ContourComparisons_ACMEMB").checked;

  const relations = {};
  relations.R = [];
  relations["K/Kh"] = [];
  relations.TnI = [];
  relations.Z = [];
  relations.M = [];
  relations.complementary = [];
  relations.subset_superset = [];
  relations.SIM = [];
  relations.ASIM = [];
  relations.k = [];
  relations.ak = [];
  relations.EMB = [];
  relations.REL = [];
  relations.COV = [];
  relations.MAXSIM = [];
  relations.TMEMB = [];
  relations.ATMEMB = [];
  relations.IcVSIM = [];
  relations.ISIM2 = [];
  relations.Angle = [];
  relations.CSIM = [];
  relations.CEMB = [];
  relations.CMEMB = [];
  relations.ACMEMB = [];

  for (const relation in relations) {
    if (relation != "clear") {
      for (var i = 0; i < sets.length; ++i) {
        relations[relation].push([]);
        for (var j = 0; j < sets.length; ++j) {
          relations[relation][i].push(undefined);
        }
      }
    }
  }

  const setDisplay = document.getElementById("menu_sets").selectedIndex;
  const psetDisplay = document.getElementById("menu_psets").selectedIndex;
  pfalgorithm = document.getElementById("menu_pfalgorithm").selectedIndex;
  const l = inputs.length;
  for (var i = 0; i < l; ++i) {
    const setnum = (i + 1).toString();
    print((`SET ${setString(setnum - 1, 0, false)}: [ ${originals[i]} ]`).bold());
    if (steps.normal_form == true) { print(`NORMAL FORM: [${getNormalForm(sets[i]).toString()}]`); }
    if (steps.interval_vector == true) { print(`INTERVAL VECTOR: <${getIntervalVector(sets[i]).toString().replace(/,/g, "&nbsp;")}>`); }
    if (steps.prime_form == true) { print(`PRIME FORM: [${getPrimeForm(sets[i]).toString()}]`); }
    if (steps.forte == true) { print(`FORTE NUMBER: ${getForteNumber(sets[i])}`); }
    if (steps.invariance_vector == true) { print(`INVARIANCE VECTOR: <${getInvarianceVector(sets[i]).toString().replace(/,/g, "&nbsp;")}>`); }
    if (steps.transpositional_symmetry == true) {
      var x = findTranspositionalSymmetry(sets[i]);
      var y = findInversionalSymmetry(sets[i]);
      if ((x != false) && (y != false)) {
        print(`Symmetrical under ${x}, ${y}`);
      } else if (x != false) {
        print(`Symmetrical under ${x}`);
      } else if (y != false) {
        print(`Symmetrical under ${y}`);
      } else {
        print("This set has no transpositional symmetry.");
      }
    }
    if (steps.self_complementary == true) {
      if (isComplementary(sets[i], sets[i]) != false) { print(`Self-complementary under ${isComplementary(sets[i], sets[i])}`); } else { print("This set is not self-complementary."); }
    }
    if ((steps.find_complementary == true) && (sets[i].length != 12)) { print(`Complementary to: [${findComplement(sets[i])}], Prime Form [${getPrimeForm(findComplement(sets[i]))}] (set class ${getForteNumber(findComplement(sets[i]))})`); }
    if (steps.find_Z == true) {
      if (findZ(sets[i]) != undefined) {
        print(`Z-related to sc ${getForteNumber(findZ(sets[i]))}, Prime Form [${findZ(sets[i])}]`);
      } else {
        print("This set doesn't have a Z-related set.");
      }
    }

    if (steps.TnI == true) {
      for (var j = 0; j < l; ++j) {
        x = Tn(sets[i], sets[j]); y = TnI(sets[i], sets[j]);
        if ((x != false) && (y != false)) {
          relations.TnI[i][j] = `${x}, ${y}`;
        } else if ((x != false) && (y == false)) {
          relations.TnI[i][j] = x;
        } else if ((x == false) && (y != false)) {
          relations.TnI[i][j] = y;
        } else {
          relations.TnI[i][j] = false;
        }
      }
    }
    if (steps.Z == true) {
      for (var j = 0; j < l; ++j) {
        relations.Z[i][j] = Z(sets[i], sets[j]);
      }
    }
    if (steps.M == true) {
      for (var j = 0; j < l; ++j) {
        relations.M[i][j] = M(sets[i], sets[j]);
      }
    }
    if (steps.complementary == true) {
      for (var j = 0; j < l; ++j) {
        relations.complementary[i][j] = isComplementary(sets[i], sets[j]);
      }
    }
    if (steps.subset_superset == true) {
      for (var j = 0; j < l; ++j) {
        if (isSubsetOf(sets[i], sets[j]) == true) {
          relations.subset_superset[i][j] = "Subset";
        } else if (isSubsetOf(sets[j], sets[i]) == true) {
          relations.subset_superset[i][j] = "Superset";
        } else {
          relations.subset_superset[i][j] = false;
        }
      }
    }
    if (steps.R == true) {
      for (var j = 0; j < l; ++j) {
        let sep = "";
        relations.R[i][j] = "";
        /* if (R(sets[i],sets[j]) != false) {
       relations["R"][i][j] += "R";
       sep = ", ";
       } */
        if (getPrimeForm(sets[i]).toString() == getPrimeForm(sets[j]).toString()) {
          relations.R[i][j] = "n/a";
          continue;
        }
        if (R0_1_2(sets[i], sets[j]) != false) {
          relations.R[i][j] += `${sep}R${R0_1_2(sets[i], sets[j]).sub()}`;
          sep = ",";
        }
        if (Rp(sets[i], sets[j]) != false) {
          relations.R[i][j] += `${sep}R${"p".sub()}`;
          sep = ", ";
        }
      }
    }
    if (steps["K/Kh"] == true) {
      for (var j = 0; j < l; ++j) {
        if (getPrimeForm(sets[i]).toString() == getPrimeForm(sets[j]).toString()) {
          relations["K/Kh"][i][j] = "n/a";
          continue;
        }
        if (Kh(sets[i], sets[j]) == true) {
          relations["K/Kh"][i][j] = "Kh";
        } else if (K(sets[i], sets[j]) == true) {
          relations["K/Kh"][i][j] = "K";
        } else {
          relations["K/Kh"][i][j] = "";
        }
      }
    }
    if (steps.SIM == true) {
      for (var j = 0; j < l; ++j) {
        relations.SIM[i][j] = SIM(sets[i], sets[j]);
      }
    }
    if (steps.ASIM == true) {
      for (var j = 0; j < l; ++j) {
        relations.ASIM[i][j] = ASIM(sets[i], sets[j]);
      }
    }
    if (steps.k == true) {
      for (var j = 0; j < l; ++j) {
        relations.k[i][j] = k(sets[i], sets[j]);
      }
    }
    if (steps.ak == true) {
      for (var j = 0; j < l; ++j) {
        relations.ak[i][j] = ak(sets[i], sets[j]);
      }
    }
    if (steps.EMB == true) {
      for (var j = 0; j < l; ++j) {
        relations.EMB[i][j] = EMB(sets[i], sets[j]);
      }
    }
    if (steps.REL == true) {
      for (var j = 0; j < l; ++j) {
        relations.REL[i][j] = REL(sets[i], sets[j]);
      }
    }
    if (steps.COV == true) {
      for (var j = 0; j < l; ++j) {
        relations.COV[i][j] = COV(sets[i], sets[j]);
      }
    }
    if (steps.MAXSIM == true) {
      for (var j = 0; j < l; ++j) {
        relations.MAXSIM[i][j] = MAXSIM(sets[i], sets[j]);
      }
    }
    if (steps.TMEMB == true) {
      for (var j = 0; j < l; ++j) {
        relations.TMEMB[i][j] = TMEMB(sets[i], sets[j]);
      }
    }
    if (steps.ATMEMB == true) {
      for (var j = 0; j < l; ++j) {
        relations.ATMEMB[i][j] = ATMEMB(sets[i], sets[j]);
      }
    }
    if (steps.IcVSIM == true) {
      for (var j = 0; j < l; ++j) {
        relations.IcVSIM[i][j] = IcVSIM(sets[i], sets[j]);
      }
    }
    if (steps.ISIM2 == true) {
      for (var j = 0; j < l; ++j) {
        relations.ISIM2[i][j] = ISIM2(sets[i], sets[j]);
      }
    }
    if ((steps.Angle_rad == true) || (steps.Angle_deg == true)) {
      for (var j = 0; j < l; ++j) {
        relations.Angle[i][j] = Angle(sets[i], sets[j]);
      }
    }

    if (document.getElementById("menu_tables").selectedIndex == 1) {
      if (steps.TnI == true) {
        for (var j = 0; j < l; ++j) {
          if (j == i) { continue; }
          if (relations.TnI[i][j] != false) {
            print(`${setString(i, setDisplay, false)} maps on to ${setString(j, setDisplay, false)} under ${relations.TnI[i][j]}`);
          }
        }
      }
      if (steps.Z == true) {
        for (var j = 0; j < l; ++j) {
          if (j == i) continue;
          if (relations.Z[i][j] == true) {
            print(`Z-related to ${setString(j, setDisplay, false)}`);
          }
        }
      }
      if (steps.M == true) {
        for (var j = 0; j < l; ++j) {
          if (j == i) continue;
          if (relations.M[i][j] != false) {
            print(`M${relations.M[i][j].toString().sub()}(Set ${i + 1}) = ${setString(j, setDisplay, false)}`);
          }
        }
      }
      if (steps.complementary == true) { for (var j = 0; j < l; ++j) { if (j == i) { continue; } if (isComplementary(sets[i], sets[j]) != false) { print(`Complementary with ${setString(j, setDisplay, false)}`); } } }
      if (steps.subset_superset == true) {
        for (var j = 0; j < l; ++j) {
          if (j == i) continue;
          if (relations.subset_superset[i][j] != false) {
            print(`${relations.subset_superset[i][j]} of ${setString(j, setDisplay, false)}`);
          }
        }
      }
      if (steps.R == true) {
        for (var j = 0; j < l; ++j) {
          if (j == i) continue;
          if ((relations.R[i][j] != false) && (relations.R[i][j] != "n/a")) {
            print(`${relations.R[i][j]}-related to ${setString(j, setDisplay, false)}`);
          }
        }
      }
      if (steps["K/Kh"] == true) {
        for (var j = 0; j < l; ++j) {
          if (j == i) { continue; }
          if ((relations["K/Kh"][i][j] != false) && (relations["K/Kh"][i][j] != "n/a")) {
            print(`${relations["K/Kh"][i][j]}-related to ${setString(j, setDisplay, false)}`);
          }
        }
      }
      if (steps.SIM == true) { for (var j = 0; j < l; ++j) { if (j == i) { continue; } print(`SIM(${setString(i, setDisplay, false)}, ${setString(j, setDisplay, false)}) = ${relations.SIM[i][j]}`); } }
      if (steps.ASIM == true) { for (var j = 0; j < l; ++j) { if (j == i) { continue; } print(`ASIM(${setString(i, setDisplay, false)}, ${setString(j, setDisplay, false)}) = ${round(relations.ASIM[i][j], 3)}`); } }
      if (steps.k == true) { for (var j = 0; j < l; ++j) { if (j == i) { continue; } print(`k(${setString(i, setDisplay, false)}, ${setString(j, setDisplay, false)}) = ${relations.k[i][j]}`); } }
      if (steps.ak == true) { for (var j = 0; j < l; ++j) { if (j == i) { continue; } print(`ak(${setString(i, setDisplay, false)}, ${setString(j, setDisplay, false)}) = ${round(relations.ak[i][j], 3)}`); } }
      if (steps.EMB == true) { for (var j = 0; j < l; ++j) { if (j == i) { continue; } print(`EMB(${setString(i, setDisplay, false)}, ${setString(j, setDisplay, false)}) = ${relations.EMB[i][j]}`); } }
      if (steps.REL == true) { for (var j = 0; j < l; ++j) { if (j == i) { continue; } print(`REL${setString(i, setDisplay, false)}, ${setString(j, setDisplay, false)}) = ${relations.REL[i][j]}`); } }
      if (steps.COV == true) { for (var j = 0; j < l; ++j) { if (j == i) { continue; } print(`COV(${setString(i, setDisplay, false)}, ${setString(j, setDisplay, false)}) = ${relations.COV[i][j]}`); } }
      if (steps.MAXSIM == true) { for (var j = 0; j < l; ++j) { if (j == i) { continue; } if (relations.MAXSIM[i][j] == true) { print(`MAXSIM(${setString(i, setDisplay, false)}, ${setString(j, setDisplay, false)}) = true`); } } }
      if (steps.TMEMB == true) { for (var j = 0; j < l; ++j) { if (j == i) { continue; } print(`TMEMB(${setString(i, setDisplay, false)}, ${setString(j, setDisplay, false)}) = ${relations.TMEMB[i][j]}`); } }
      if (steps.ATMEMB == true) { for (var j = 0; j < l; ++j) { if (j == i) { continue; } print(`ATMEMB(${setString(i, setDisplay, false)}, ${setString(j, setDisplay, false)}) = ${round(relations.ATMEMB[i][j], 3)}`); } }
      if (steps.IcVSIM == true) {
        for (var j = 0; j < l; ++j) {
          if (j == i) continue;
          print(`IcVSIM(${setString(i, setDisplay, false)}, ${setString(j, setDisplay, false)}) = ${round(relations.IcVSIM[i][j], 3)}`);
        }
      }
      if (steps.Angle_rad == true) {
        for (var j = 0; j < l; ++j) {
          if (j == i) continue;
          print(`\u2220(${setString(i, setDisplay, false)}, ${setString(j, setDisplay, false)}) = ${round(relations.Angle[i][j], 3)} radians`);
        }
      }
      if (steps.Angle_deg == true) {
        for (var j = 0; j < l; ++j) {
          if (j == i) continue;
          print(`\u2220(${setString(i, setDisplay, false)}, ${setString(j, setDisplay, false)}) = ${round(relations.Angle[i][j] * 180 / Math.PI, 3)}\xB0`);
        }
      }
    }

    if (psets[i] == false) { print(""); continue; }

    if (steps.CC == true) { print(`CC(${setString(i, psetDisplay, true)}) = <${CC(psets[i])}>`); }
    if (steps.CAS == true) { print(`CAS(${setString(i, psetDisplay, true)}) = <${CAS(psets[i])}>`); }
    if (steps.CASV == true) { print(`CASV(${setString(i, psetDisplay, true)}) = <${CASV(psets[i])}>`); }
    if (steps.CIS == true) { print(`CIS(${setString(i, psetDisplay, true)}) = <${CIS(psets[i])}>`); }
    if (steps.CIA == true) { print(`CIA(${setString(i, psetDisplay, true)}) = <${CIA(psets[i])}>`); }
    if (steps.CCVI == true) { print(`CCV_I(${setString(i, psetDisplay, true)}) = (${CCV_I(psets[i])})`); }
    if (steps.CCVII == true) { print(`CCV_II(${setString(i, psetDisplay, true)}) = (${CCV_II(psets[i])})`); }
    if (steps.COM == true) { printCOM(psets[i]); }

    if (steps.CSIM == true) {
      for (var j = 0; j < l; ++j) {
        if (psets[j] == false) continue;
        relations.CSIM[i][j] = CSIM(psets[i], psets[j]);
      }
    }
    if (steps.CEMB == true) {
      for (var j = 0; j < l; ++j) {
        if (psets[j] == false) continue;
        relations.CEMB[i][j] = CEMB(psets[i], psets[j]);
      }
    }
    if (steps.CMEMB == true) {
      for (var j = 0; j < l; ++j) {
        if (psets[j] == false) continue;
        relations.CMEMB[i][j] = CMEMB(psets[i], psets[j]);
      }
    }
    if (steps.ACMEMB == true) {
      for (var j = 0; j < l; ++j) {
        if (psets[j] == false) continue;
        relations.ACMEMB[i][j] = ACMEMB(psets[i], psets[j]);
      }
    }

    if (document.getElementById("menu_tables").selectedIndex == 1) {
      if (steps.CSIM == true) {
        for (var j = 0; j < l; ++j) {
          if ((j == i) || (psets[j] == false)) continue;
          if (relations.CSIM[i][j] != undefined) {
            print(`CSIM(${setString(i, psetDisplay, true)}, ${setString(j, psetDisplay, true)}) = ${round(relations.CSIM[i][j], 3)}`);
          }
        }
      }
      if (steps.CEMB == true) {
        for (var j = 0; j < l; ++j) {
          if ((j == i) || (psets[j] == false)) continue;
          print(`CEMB(${setString(i, psetDisplay, true)}, ${setString(j, psetDisplay, true)}) = ${relations.CEMB[i][j]}`);
        }
      }
      if (steps.CMEMB == true) {
        for (var j = 0; j < l; ++j) {
          if ((j == i) || (psets[j] == false)) continue;
          print(`CMEMB(${setString(i, psetDisplay, true)}, ${setString(j, psetDisplay, true)}) = ${relations.CMEMB[i][j]}`);
        }
      }
      if (steps.ACMEMB == true) {
        for (var j = 0; j < l; ++j) {
          if ((j == i) || (psets[j] == false)) { continue; }
          print(`ACMEMB(${setString(i, psetDisplay, true)}, ${setString(j, psetDisplay, true)}) = ${round(relations.ACMEMB[i][j], 3)}`);
        }
      }
    }
    print("");
  }

  if (document.getElementById("menu_tables").selectedIndex == 0) {
    if (document.getElementsByName("analysisType_Comparisons")[0].disabled == false) {
      if (steps.TnI == true) {
        createTable(`T${"n".sub()} / T${"n".sub()}I`, relations.TnI, setDisplay, false, "", "", false);
      }
      if (steps.Z == true) {
        createTable("Z", relations.Z, setDisplay, false, "", "", false, false, true);
      }
      if (steps.M == true) {
        createTable("M", relations.M, setDisplay, false, "", "", false);
      }
      if (steps.complementary == true) {
        createTable("Complements", relations.complementary, setDisplay, false, "", "", false);
      }
      if (steps.subset_superset == true) {
        createTable("Subset/Superset", relations.subset_superset, setDisplay, false, "", "", false);
      }
      if (steps.R == true) {
        createTable("R", relations.R, setDisplay, false, "", "", true, false, true);
      }
      if (steps["K/Kh"] == true) {
        createTable("K/Kh", relations["K/Kh"], setDisplay, false, "", "", true, false, true);
      }
      if (steps.SIM == true) {
        createTable("SIM", relations.SIM, setDisplay, false, "", "", true, false, true);
      }
      if (steps.ASIM == true) {
        createTable("ASIM", relations.ASIM, setDisplay, 3, "", "", true, false, true);
      }
      if (steps.k == true) {
        createTable("k", relations.k, setDisplay, false, "", "", true, false, true);
      }
      if (steps.ak == true) {
        createTable("ak", relations.ak, setDisplay, 3, "", "", true, false, true);
      }
      if (steps.EMB == true) {
        createTable("EMB", relations.EMB, setDisplay, false, "", "", true, false);
      }
      if (steps.REL == true) {
        createTable("REL", relations.REL, setDisplay, 3, "", "", true, false, true);
      }
      if (steps.COV == true) {
        createTable("COV", relations.COV, setDisplay, 3, "", "", true, false, false);
      }
      if (steps.MAXSIM == true) {
        createTable("MAXSIM", relations.MAXSIM, setDisplay, false, "", "", true, false, true);
      }
      if (steps.TMEMB == true) {
        createTable("TMEMB", relations.TMEMB, setDisplay, false, "", "", true, false, true);
      }
      if (steps.ATMEMB == true) {
        createTable("ATMEMB", relations.ATMEMB, setDisplay, 3, "", "", true, false, true);
      }
      if (steps.IcVSIM == true) {
        createTable("IcVSIM", relations.IcVSIM, setDisplay, 3, "", "", true, false, true);
      }
      if (steps.ISIM2 == true) {
        createTable("ISIM2", relations.ISIM2, setDisplay, 3, "", "", true, false, true);
      }
      if (steps.Angle_rad == true) {
        createTable("Angle (radians)", relations.Angle, setDisplay, 3, "", "", true, false, true);
      }
      if (steps.Angle_deg == true) {
        const data = [];
        for (var i = 0; i < relations.Angle.length; ++i) {
          data.push([]);
          for (var j = 0; j < relations.Angle.length; ++j) {
            data[i].push(relations.Angle[i][j] * 180 / Math.PI);
          }
        }
        createTable("Angle (degrees)", data, setDisplay, 3, "", "\xB0", true, false, true);
      }
    }
    if (document.getElementsByName("analysisType_ContourComparisons")[0].disabled == false) {
      if (steps.CSIM == true) {
        createTable("CSIM", relations.CSIM, psetDisplay, 3, "", "", false, true, true);
      }
      if (steps.CEMB == true) {
        createTable("CEMB", relations.CEMB, psetDisplay, false, "", "", true, true);
      }
      if (steps.CMEMB == true) {
        createTable("CMEMB", relations.CMEMB, psetDisplay, false, "", "", true, true, true);
      }
      if (steps.ACMEMB == true) {
        createTable("ACMEMB", relations.ACMEMB, psetDisplay, 3, "", "", true, true, true);
      }
    }
  }
}
