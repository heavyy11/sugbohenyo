// simulate progress (replace with real logic later)
const progress = {
    level1: localStorage.getItem('level1') === 'done',
    level2: localStorage.getItem('level2') === 'done'
};

const level2 = document.getElementById('level2');
const level3 = document.getElementById('level3');

const level2Link = document.getElementById('level2-link');
const level3Link = document.getElementById('level3-link');

// mo unlock level 2 if level 1 is done
if (progress.level1) {
    level2.classList.remove('locked');
} else {
    level2Link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Finish Level 1 first');
    });
}

// mo unlock level 3 if level 1 and 2 kay mana
if (progress.level1 && progress.level2) {
    level3.classList.remove('locked');
} else {
    level3Link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Finish Level 1 and 2 first');
    });
}