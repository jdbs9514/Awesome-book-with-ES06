// sections variables //
export const list = document.querySelector('.section-table');
export const addNew = document.querySelector('.section-add');
export const contact = document.querySelector('.section-contact');

// navbar variables //
export const listLink = document.getElementById('list');
export const addLink = document.getElementById('add');
export const contactLink = document.getElementById('contact');
export let includeActive;

// Add click event for list link - Make section-table appears //
listLink.addEventListener('click', () => {
    for (let i = 0; i < list.classList.length; i += 1) {
        if (list.classList[i] === 'active') {
            includeActive = true;
        } else {
            includeActive = false;
        }
    }

    if (includeActive === false) {
        list.classList.add('active');
    }

    // review if section-add have the class 'active'//
    for (let i = 0; i < addNew.classList.length; i += 1) {
        if (addNew.classList[i] === 'active') {
            includeActive = true;
        } else {
            includeActive = false;
        }
    }

    if (includeActive === true) {
        addNew.classList.remove('active');
    }

    // review if section-content have the class 'active'//
    for (let i = 0; i < contact.classList.length; i += 1) {
        if (contact.classList[i] === 'active') {
            includeActive = true;
        } else {
            includeActive = false;
        }
    }

    if (includeActive === true) {
        contact.classList.remove('active');
    }
});

// Add click event for Add new link - Make section-add appears //
addLink.addEventListener('click', () => {
    for (let i = 0; i < addNew.classList.length; i += 1) {
        if (addNew.classList[i] === 'active') {
            includeActive = true;
        } else {
            includeActive = false;
        }
    }

    if (includeActive === false) {
        addNew.classList.add('active');
    }

    // review if section-table has the class 'active'//
    for (let i = 0; i < list.classList.length; i += 1) {
        if (list.classList[i] === 'active') {
            includeActive = true;
        } else {
            includeActive = false;
        }
    }

    if (includeActive === true) {
        list.classList.remove('active');
    }

    // review if section-contact has the class 'active' //
    for (let i = 0; i < contact.classList.length; i += 1) {
        if (contact.classList[i] === 'active') {
            includeActive = true;
        } else {
            includeActive = false;
        }
    }

    if (includeActive === true) {
        contact.classList.remove('active');
    }
});

// Add click event for Contact link - Make section-contact appears //
contactLink.addEventListener('click', () => {
    for (let i = 0; i < contact.classList.length; i += 1) {
        if (contact.classList[i] === 'active') {
            includeActive = true;
        } else {
            includeActive = false;
        }
    }
    if (includeActive === false) {
        contact.classList.add('active');
    }

    // review if section-table has the class 'active' //
    for (let i = 0; i < list.classList.length; i += 1) {
        if (list.classList[i] === 'active') {
            includeActive = true;
        } else {
            includeActive = false;
        }
    }
    if (includeActive === true) {
        list.classList.remove('active');
    }

    // review if section-add has the class 'active' //
    for (let i = 0; i < addNew.classList.length; i += 1) {
        if (addNew.classList[i] === 'active') {
            includeActive = true;
        } else {
            includeActive = false;
        }
    }
    if (includeActive === true) {
        addNew.classList.remove('active');
    }
});