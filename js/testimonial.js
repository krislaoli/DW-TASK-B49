// class Testimonial {
//   #quote = "";
//   #image = "";

//   constructor(quote, image) {
//     this.#quote = quote;
//     this.#image = image;
//   }

//   get quote() {
//     return this.#quote;
//   }

//   get image() {
//     return this.#image;
//   }

//   get author() {
//     throw new Error("getAuthor() method must be implementasi");
//   }

//   get testimonialHTML() {
//     return `<div class="testimonial">
//     <img src=${this.image} alt="profile-photo" class="profile-testimonial" />
//     <p>${this.quote}</p>
//     <p class="author">${this.author}</p></p>
//   </div>`;
//   }
// }

// class AuthorTestimonials extends Testimonial {
//   #author = "";

//   constructor(author, quote, image) {
//     super(quote, image);
//     this.#author = author;
//   }

//   get author() {
//     return this.#author;
//   }
// }

// class CompanyTestimonial extends Testimonial {
//   #company = "";

//   constructor(author, quote, image) {
//     super(author, quote, image);
//     this.#company = company;
//   }

//   get author() {
//     return this.author + "Company";
//   }
// }

// const testimonial1 = new AuthorTestimonials(
//   "Bird",
//   "kamu pasti bisa",
//   "https://images.unsplash.com/photo-1555169062-013468b47731?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
// );

// const testimonial2 = new AuthorTestimonials(
//   "Tiger",
//   "semangat membara",
//   "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80"
// );

// const testimonial3 = new AuthorTestimonials(
//   "Dog",
//   "hayu kamu ngapain",
//   "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
// );

// let testimonialData = [testimonial1, testimonial2, testimonial3];
// let testimonialHTML = "";

// for (let i = 0; i < testimonialData.length; i++) {
//   testimonialHTML += testimonialData[i].testimonialHTML;
// }

// console.log(testimonialHTML);
// document.getElementById("testimonial").innerHTML = testimonialHTML;

let testimonialsData = [
  {
    author: "DOM",
    quote: "Style of nature",
    image:
      "https://images.unsplash.com/photo-1692290997682-cfd9aadd0fd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    rating: 1,
  },

  {
    author: "Coffe",
    quote: "Relax of minum Coffe sambil ngudud",
    image:
      "https://images.unsplash.com/photo-1691241829157-1f272cb7fad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    rating: 1,
  },

  {
    author: "Slut",
    quote: "Enak Banget",
    image:
      "https://images.unsplash.com/photo-1691860305089-9a2566296202?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    rating: 2,
  },

  {
    author: "Black Panther",
    quote: "Kang Fashion",
    image:
      "https://images.unsplash.com/photo-1691889713822-b5ef566fd8f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8UzRNS0xBc0JCNzR8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    rating: 3,
  },

  {
    author: "Alpokat",
    quote: "Di apain ni alpokat",
    image:
      "https://images.unsplash.com/photo-1690527272098-618f57424a67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    rating: 5,
  },

  {
    author: "Kang Indomie",
    quote: "Makannya pelan-pelan bang",
    image:
      "https://images.unsplash.com/photo-1687276415899-2a7c32b78c0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg4fHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    rating: 5,
  },

  {
    author: "Sate Nihil",
    quote: "Enak ini kayaknya",
    image:
      "https://images.unsplash.com/photo-1685985904869-b8b4a852648c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    rating: 6,
  },

  {
    author: "Cewe Ni Guys",
    quote: "Gantian lah sama aku berpelukannya",
    image:
      "https://images.unsplash.com/photo-1687201659725-38e536473e3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
    rating: 6,
  },

  {
    author: "View",
    quote: "Kamu sedang ngapain",
    image:
      "https://images.unsplash.com/photo-1678449463288-95465b27e73d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    rating: 6,
  },

  {
    author: "Not For GAY",
    quote: "Tolak LGBT",
    image:
      "https://images.unsplash.com/photo-1688241427783-4e8f6a0ebb82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fEJKSk10dGVESkE0fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    rating: 7,
  },

  {
    author: "Reaction",
    quote: "Demonstracion",
    image:
      "https://images.unsplash.com/photo-1676027114025-c5c10b55f097?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=334&q=80",
    rating: 9,
  },

  {
    author: "Yoda",
    quote: "Menatap Masa Depan",
    image:
      "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    rating: 9,
  },

  {
    author: "Toys Picture",
    quote: "Berdiri Tegang",
    image:
      "https://images.unsplash.com/photo-1615592389070-bcc97e05ad01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    rating: 10,
  },
];

function alltestimonials() {
  let testimonialHtml = "";

  testimonialsData.forEach(function (item) {
    testimonialHtml += `<div class="testimonial">
    <img
        src="${item.image}"
        class="profile-testimonial"
        />
    <p class="quote">${item.quote}</p>
    <p class="author">- ${item.author}</p>
    <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
</div>`;
  });
  document.getElementById("testimonials").innerHTML = testimonialHtml;
}

alltestimonials();

function filtertestimonials(rating) {
  let testimonialHtml = "";

  const testimonialsfiltered = testimonialsData.filter(function (item) {
    return item.rating === rating;
  });

  if (testimonialsfiltered.length === 0) {
    testimonialHtml += `<h1>Data is not found!!</h1>?`;
  } else {
    testimonialsfiltered.forEach(function (item) {
      testimonialHtml += `<div class="testimonial">
         <img
          src="${item.image}"
          class="profile-testimonial"
      />
      <p class="quote">${item.quote}</p>
      <p class="author">- ${item.author}</p>
      <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
  </div>`;
    });
  }
  document.getElementById("testimonials").innerHTML = testimonialHtml;
}
