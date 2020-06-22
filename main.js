const toggleBtn = document.getElementById('circle');
toggleBtn.addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.toggle('right');

    const prof = document.getElementById('a1');
    const basic = document.getElementById('b1');
    const master = document.getElementById('c1');

    if (prof.innerHTML == '249.99') {
        prof.innerHTML = '24.99';
    } else {
        prof.innerHTML = '249.99';
    }
    if (basic.innerHTML == '199.99') {
        basic.innerHTML = '19.99';
    } else {
        basic.innerHTML = '199.99';
    }
    if (master.innerHTML == '399.99') {
        master.innerHTML = '39.99';
    } else {
        master.innerHTML = '399.99';
    }
});