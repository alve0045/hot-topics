// GET THE REFERENCES
// Accessing the container using a getElementbyId
const container = document.getElementById('dynamiccont');
// Accessing the links using a querySelectorAll
const links = document.querySelectorAll('.nav-item a');
// Accessing the partials by calling the URL
let url = './partials/home.html';

// CREATE THE FUNCTION THAT WILL LOAD THE REQUESTED PARTIAL
function loadContent (reqPage) {
	fetch(reqPage).then(function (rsp) {
		return rsp.text();
	}).then(function (data) {
		container.innerHTML = data;
	});
// CLOSE YOUR FUNCTION loadContent HERE
}
// CALL loadContent WITH THE CURRENT VALUE OF url 
loadContent(url);

// CREATE THE FUNCTION THAT WILL SELECT A PARTIAL
function selectContent(ev) {
   // PREVENT DEFAULT BEHAVIOUR OF A LINK TAG
   ev.preventDefault();
   // GET THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK
   let currentPage = ev.target.href;
   // CALL THE FUNCTION loadContent PROVIDING THE href
   // VALUE OF THE CLICKED LINK AS THE VALUE FOR THE PARAMETER
   // OF loadContent FUNCTION.
   loadContent(currentPage);

// CLOSE YOUR FUNCTION selectContent HERE
}

// REGISTER links FOR CLICK EVENT WITH selectContent AS EVENT HANDLER!
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', selectContent);
}