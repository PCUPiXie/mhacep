const form = document.getElementById('feedbackForm');
const response = document.getElementById('formResponse');

form.addEventListener('submit', function(e){
    e.preventDefault();
    response.classList.remove('hidden');
    form.reset();
});
