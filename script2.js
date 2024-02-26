var logo = document.getElementById('logo');
    var logoInfo = document.getElementById('logo-info');

    logo.addEventListener('mouseover', function() {
        logoInfo.style.display = 'block';
    });

    logo.addEventListener('mouseout', function() {
        logoInfo.style.display = 'none';
    });
function calc(){
    let firstInput = document.getElementById("first-input").value; 
    let vowels = ['o', 'e', 'i', 'a', 'u', 'y'];

    let result = firstInput
        .split('')
        .filter(elem => vowels.includes(elem))
        .length;

    let output = document.getElementById("output")
    output.innerHTML = result;
}

function mult(){
    
}
