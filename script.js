function addToCart(product) {
    alert(product + ' has been added to your cart!');
}

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector(".contact form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault(); 
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

                if (!name || !email || !message) {
                alert("Please fill in all fields before submitting.");
                return;
            }

            alert(`Thank you for your message, ${name}! We will get back to you at ${email}.`);
            contactForm.reset(); 
                });
    }
});