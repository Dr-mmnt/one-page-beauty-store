const contactForm = document.getElementById('sign-form');

function handleSubmit(event) {
    event.preventDefault();
    const{name,phone} = this.elements;
    console.log({
        name:name.value,
        phone:phone.value
    });
    this.reset();
};
contactForm.addEventListener('submit', handleSubmit);
contactForm.removeEventListener('submit', handleSubmit)
