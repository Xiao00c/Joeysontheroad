var modal = document.getElementById('modal');
var modalBtn = document.getElementById('modalButton');
var closeBtn = document.getElementById('closeBtn');

modalBtn.addEventListener('click',openModal);

function openModal(){
	modal.style.display = 'block';
}

closeBtn.addEventListener('click',closeModal);

function closeModal(){
	modal.style.display = 'none';
}
