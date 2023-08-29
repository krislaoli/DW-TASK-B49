const express = require("express");
const app = express();
const PORT = 5000;
const path = require("path");
// const dateDuration = require("./src/helper/duration")

// set up call hbs untuk sub folder
app.set("view engine","hbs");
app.set("views",path.join(__dirname, "src/views"));

// set serving static file berupa file yang akan di tampilin untuk image dan js yang diambil dari file assets
app.use(express.static(path.join(__dirname, "src/assets")));

// parsing data from client
app.use(express.urlencoded({ extended: false }));

// dummy data
const dataBlog = [
  {
    // id 0
    title: "Front End",
    content: "apa saja yang penting kerja",
    images: "images/a.jpg",
    startDate: "2023-08-01",
    endDate: "2024-12-01",
    duration: "1 bulan",
    nodejs: true,
    reactjs: true,
    js: true,
    vuejs: true,
    // postedAt: new Date()
  },
  {
    // id 1
    title: "Back End",
    content: "apa saja yang penting kerja",
    images: "images/b.jpg",
    startDate: "2023-08-01",
    endDate: "2024-12-01",
    duration: "1 bulan",
    nodejs: true,
    reactjs: true,
    js: true,
    vuejs: true,
    // postedAt: new Date()
  },
  {
    // id 2
    title: "Fullstack Developer",
    content: "apa saja yang penting kerja",
    images: "images/c.jpg",
    startDate: "2023-08-01",
    endDate: "2024-12-01",
    duration: "1 bulan",
    nodejs: false,
    reactjs: false,
    js: true,
    vuejs: true,
    postedAt: new Date()
  },
];

// routing
app.get("/", home);
app.get("/blog", blog);
app.get("/blog-detail/:id", blogDetail);
app.get("/contact", contact);
app.post("/blog", addBlog);
app.get("/edit-blog/:id", editBlog);
app.post("/update-blog/:id", updateBlog);
app.get("/delete-blog/:id", deleteBlog);

// local server
app.listen(PORT, () => {
  console.log("Server running on port ${PORT}");
});

// form home
function home(req, res) {
  res.render("index", { dataBlog: dataBlog });
}

//  blog
function blog(req, res) {
  res.render("blog");
}

// add new blog
function addBlog(req, res) {
  // const { title, startDate, endDate, content, images, nodejs, reactjs, js, vuejs, } = req.body;
  const  {
    title,
    content,
    images,
    startDate,
    endDate,
    nodejs,
    reactjs,
    js,
    vuejs,
    // postedAt,
  } = req.body;

  let start = new Date(startDate);
  let end = new Date(endDate)

  if (start > end) {
    return res.send("You Fill End Date Before Start Date");
  }

  let difference = end.getTime() -start.getTime();
  let days = difference / (1000 * 3600 * 24);
  let weeks = Math.floor(days / 7);
  let months = Math.floor(weeks / 4);
  let Yeat = Math.floor(months / 12);
  let duration = "";

  if (years > 0){
    duration = years + " Tahun";
  } else if (months > 0) {
    duration = months + " Bulan";
  } else if (weeks > 0) {
    duration = weeks + " Minggu";
  }else if (days > 0) {
    duration = days + " Hari";
  }
  
  const data = {
    title,
    content,
    images,
    startDate,
    endDate,
    duration,
    nodejs,
    reactjs,
    js,
    vuejs,
  };

  dataBlog.push(data)
  res.redirect("/")

}

// edit to blog
function editBlog(req, res) {
  const id = parseInt(req.params.id);
  res.render("edit-blog",  { blog: dataBlog[id], blogIndex: id })
}

// update blog
function updateBlog(req, res) {
    const blogIndex = parseInt(req.body.blogIndex)
    const { title, startDate, endDate, content, images, nodejs, reactjs, js, vuejs } = req.body

    dataBlog[blogIndex].title = title;
    dataBlog[blogIndex].content = content;
    dataBlog[blogIndex].nodejs = nodejs;
    dataBlog[blogIndex].reactjs = reactjs;
    dataBlog[blogIndex].js = js;
    dataBlog[blogIndex].vuejs = vuejs;
    // dataBlog[blogIndex].postedAt = new Date();
    console.log(title, content)
    res.redirect("/");
}


// blog detail
function blogDetail(req, res) {
    const { id } = req.params;
    res.render("blog-detail", { blog: dataBlog[id] })
}

// contact
function contact(req, res) {
  res.render("contact")
}

// delete card photo blog
function deleteBlog(req, res) {
  const { id } = req.params;

  dataBlog.splice(id, 1)
  res.redirect("/")
}

