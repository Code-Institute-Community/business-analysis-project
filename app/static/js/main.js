const naceLvl1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "U"]
var sectionLetter = "A";
var divisionNumber = "01";
/* create a list of top level nace option for nace-1 filter */
const nace1List = data.filter(dictionary => naceLvl1.includes(dictionary.Section) && dictionary.Division == null);

document.getElementById('nace-1-list').innerHTML = "";
const nace1Options = [...new Set(nace1List.map(dictionary => dictionary.Activity))];
nace1Options.sort()
nace1Options.unshift("Select first filter")
nace1Options.forEach(value => {
  const optionElement = document.createElement('option');
  optionElement.value = value;
  optionElement.textContent = value;
  document.getElementById('nace-1-list').appendChild(optionElement);
});

const nace1FirstOption = document.getElementById('nace-1-list').getElementsByTagName('option')[0];
nace1FirstOption.disabled = true;
nace1FirstOption.value = "";

let nace2Select = document.getElementById('nace-2-list');
let nace3Select = document.getElementById('nace-3-list');
// Create new option element to set default
let defaultOption1 = document.createElement("option");
let defaultOption2 = document.createElement("option");
defaultOption1.text = "Select second filter";
defaultOption1.disabled = true;
defaultOption2.text = "Select third filter";
defaultOption2.disabled = true;
// Add the option to the select element


let nace2List;
let nace2Options;
let nace3List;
let nace3Options;
let nace1f;
let nace2f;
let nace3f;


/* first level NACE filter */
var nace1ValueSelected = "";
/* get the value of the nace-1 filter */
const nace1Value = document.getElementById('nace-1-list');
nace1Value.addEventListener('change', () => {
  nace1ValueSelected = nace1Value.value;
  /* get the index of selected dictionary */
  const selectedNaceIndex = nace1List.findIndex(dictionary => dictionary.Activity === nace1ValueSelected);
  sectionLetter = nace1List[selectedNaceIndex].Section;
  nace1f = sectionLetter;
  /* filter data based on section and where Division is not null */
  nace2List = data.filter(dictionary => dictionary.Section == sectionLetter && dictionary.Division !== null && dictionary.Group == null && dictionary.Class == null);
  /* generate options for select element nace-2-list */
  nace2Options = [...new Set(nace2List.map(dictionary => dictionary.Activity))];
  nace3Select.selectedIndex = -1;
  /* check if options are empty- for initial state (before user select an option) */
  if (nace2List === undefined || nace2List === null) {
    nace2Select.add(defaultOption1);
  } else {
    nace2Options = [...new Set(nace2List.map(dictionary => dictionary.Activity))];
    document.getElementById('nace-2-list').innerHTML = "";
    document.getElementById('nace-2-list').disabled = false;
    nace2Select.add(defaultOption1);
    nace2Select.selectedIndex = 0;
    document.getElementById('nace-3-list').innerHTML = "";
    document.getElementById('nace-3-list').disabled = true;
    nace2Options.sort();
    nace2Options.forEach(value => {
      const optionElement = document.createElement('option');
      optionElement.value = value;
      optionElement.textContent = value;
      document.getElementById('nace-2-list').appendChild(optionElement);
    })
  };
});



/* second level NACE filter */
var nace2ValueSelected = "";
/* get the value of the nace-2 filter */
const nace2Value = document.getElementById('nace-2-list');
nace2Value.addEventListener('change', () => {
  nace2ValueSelected = nace2Value.value;
  /* get the index of selected dictionary */
  const selectedNaceIndex = nace2List.findIndex(dictionary => dictionary.Activity === nace2ValueSelected);
  sectionLetter = nace2List[selectedNaceIndex].Section;
  divisionNumber = nace2List[selectedNaceIndex].Division;
  nace2f = sectionLetter + "." + divisionNumber;
  /* filter data based on section and where Group is not null */
  nace3List = data.filter(dictionary => dictionary.Section == sectionLetter && dictionary.Division == divisionNumber && dictionary.Group != null && dictionary.Class != null);
  /* generate options for select element nace-3-list */
  nace3Options = [...new Set(nace3List.map(dictionary => dictionary.Activity))];
  /* check if options are empty- for initial state (before user select an option) */
  if (nace3List === undefined || nace3List === null) {
    nace3Select.add(defaultOption2);
  } else {
    nace3Options = [...new Set(nace3List.map(dictionary => dictionary.Activity))];
    document.getElementById('nace-3-list').disabled = false;
    document.getElementById('nace-3-list').innerHTML = "";
    nace3Select.add(defaultOption2);
    nace3Select.selectedIndex = 0;
    nace3Options.sort();
    nace3Options.forEach(value => {
      const optionElement = document.createElement('option');
      optionElement.value = value;
      optionElement.textContent = value;
      document.getElementById('nace-3-list').appendChild(optionElement);
    })
  };
});




/* third level NACE filter */
var nace3ValueSelected = "";
/* get the value of the nace-2 filter */
const nace3Value = document.getElementById('nace-3-list');
nace3Value.addEventListener('change', () => {
  nace3ValueSelected = nace3Value.value;
  /* get the index of selected dictionary */
  const selectedNaceIndex = nace3List.findIndex(dictionary => dictionary.Activity === nace3ValueSelected);
  sectionLetter = nace3List[selectedNaceIndex].Section;
  divisionNumber = nace3List[selectedNaceIndex].Division;
  groupNumber = nace3List[selectedNaceIndex].Group;
  classNumber = nace3List[selectedNaceIndex].Class;
  nace3f = sectionLetter + "." + classNumber;
});
