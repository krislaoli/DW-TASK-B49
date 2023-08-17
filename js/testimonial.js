class Testimonial {
  #quote = "";
  #image = "";

  constructor(quote, image) {
    this.#quote = quote;
    this.#image = image;
  }

  get quote() {
    return this.#quote;
  }

  get image() {
    return this.#image;
  }

  get author() {
    throw new Error("getAuthor() method must be implementasi");
  }

  get testimonialHTML() {
    return `<div class="testimonial">
    <img src=${this.image} alt="profile-photo" class="profile-testimonial" />
    <p>${this.quote}</p>
    <p class="author">${this.author}</p></p>
  </div>`;
  }
}

class AuthorTestimonials extends Testimonial {
  #author = "";

  constructor(author, quote, image) {
    super(quote, image);
    this.#author = author;
  }

  get author() {
    return this.#author;
  }
}

class CompanyTestimonial extends Testimonial {
  #company = "";

  constructor(author, quote, image) {
    super(author, quote, image);
    this.#company = company;
  }

  get author() {
    return this.author + "Company";
  }
}

const testimonial1 = new AuthorTestimonials(
  "Bird",
  "kamu pasti bisa",
  "https://images.unsplash.com/photo-1555169062-013468b47731?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
);

const testimonial2 = new AuthorTestimonials(
  "Tiger",
  "semangat membara",
  "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80"
);

const testimonial3 = new AuthorTestimonials(
  "Dog",
  "hayu kamu ngapain",
  "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
);

let testimonialData = [testimonial1, testimonial2, testimonial3];
let testimonialHTML = "";

for (let i = 0; i < testimonialData.length; i++) {
  testimonialHTML += testimonialData[i].testimonialHTML;
}

console.log(testimonialHTML);
document.getElementById("testimonial").innerHTML = testimonialHTML;
