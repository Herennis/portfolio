var logo2 = document.getElementById('logo2');
const message = document.getElementById('message');

logo2.onclick = function() {
    var test = document.getElementById('message');
    if (test.style.display !== 'none') {
        test.style.display = 'none';
    }
    else{
        test.style.display = 'block';
        test.style.visibility = 'visible';
    }
};

const addP = () => {
    var p = document.createElement('p');
    p.classList.add('modal');
    p.innerHTML = "Hello There!";
    document.getElementsById('text2').append('p');
    };
    addP();