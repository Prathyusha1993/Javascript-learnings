function showMessage(message){
    document.getElementById('message').textContent = message;
}

function showFunctions(value){
    document.getElementById('value').textContent = value;
}

const button = document.getElementById('see review');
button.addEventListener('click', function sample() {
    console.log('click');

    // const review = document.getElementById('review');

    // if(review.classList.contains('d-none')){
    //     review.classList.remove('d-none');
    //     button.textContent = "colse review";
    // }else{
    //     review.classList.add('d-none');
    //     button.textContent =  'see review';
    // }
})