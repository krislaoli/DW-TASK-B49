const express = require("express");
const app = express();
const PORT = 5000;
const path = require("path");

// set up call hbs untuk sub folder
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src/views"));

// set serving static file berupa file yang akan di tampilin untuk image dan js yang diambil dari file assets
app.use(express.static("src/assets"));

// routing
app.get("/index", home);
app.get("/blog", blog);
app.get("/contact", contact);
app.get("/blog-detail/:id", blogDetail);

// local server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// form home
function home(req, res) {
  res.render("index");
}

// form blog
function blog(req, res) {
  res.render("blog");
}

// form contact
function contact(req, res) {
  res.render("contact");
}

function blogDetail(req, res) {
  const { id } = req.params;
  //   console.log(id);

  const data = {
    id,
    title: "SpongeBob adalah spons laut eksentrik",
    content:
      "Perkenalkan saya kris, saya membuat web ini untuk mengembangkan skill dalam belajar berkarir sebagai.",
  };

  res.render("blog-detail", data);
}

// const data = {
//     id: 1,
//     name: "jhon"
// }

// console.log(data.id)

// const { id, name } = data

// console.log(id)
// console.log(name)
