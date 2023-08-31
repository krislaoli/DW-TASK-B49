const express = require("express");
const app = express();
const PORT = 5000;
const path = require("path");               
const bcrypt = require('bcrypt');
const session = require('express-session');
const flash = require('express-flash');                                              
// const { start } = require("repl");
const dateDuration = require('./src/helper/duration')
const moment = require('moment')
const config = require('./src/config/config.json')
const {Sequelize, QueryTypes} = require('sequelize')
const sequelize = new Sequelize(config.development)

// set up call hbs untuk sub folder
app.set("view engine","hbs");
app.set("views",path.join(__dirname, "src/views"));

// set serving static file berupa file yang akan di tampilin untuk image dan js yang diambil dari file assets
app.use(express.static(path.join(__dirname, "src/assets")));

// parsing data from client
app.use(express.urlencoded({ extended: false }));

// set serving static file
app.use(express.static('src/assets'))

// parsing data from client
app.use(express.urlencoded({ extended: false }))

// setup flash
app.use(flash())

// setup session
app.use(session({
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: 1000 * 60 * 60 * 2
  },
  store: new session.MemoryStore(),
  saveUninitialized: true,
  resave: false,
  secret: 'secretValue'
}))

// dummy data
//   const dataBlog = [
//     {
//       // id 0
//       title: "Front End",
//       content: "apa saja yang penting kerja",
//       images: "images/a.jpg",
//       startDate: "2023-08-01",
//       endDate: "2024-12-01",
//       duration: "1 bulan",
//       nodejs: true,
//       reactjs: true,
//       js: true,
//       vuejs: true,
//       // postedAt: new Date()
//     },
//     {
//       // id 1
//       title: "Back End",
//       content: "apa saja yang penting kerja",
//       images: "images/b.jpg",
//       startDate: "2023-08-01",
//       endDate: "2024-12-01",
//       duration: "1 bulan",
//       nodejs: true,
//       reactjs: true,
//       js: true,
//       vuejs: true,
//       // postedAt: new Date()
//   },
//   {
//     // id 2
//     title: "Fullstack Developer",
//     content: "apa saja yang penting kerja",
//     images: "images/c.jpg",
//     startDate: "2023-08-01",
//     endDate: "2024-12-01",
//     duration: "1 bulan",
//     nodejs: false,
//     reactjs: false,
//     js: true,
//     vuejs: true,
//     // postedAt: new Date()
//   },
// ];

// routing
app.get("/", home);
app.get("/blog", blog);
app.get("/blog-detail/:id", blogDetail);
app.get("/contact", contact);
app.post("/blog", addBlog);
app.post("/update-blog/:id", updateBlog);
app.get("/edit-blog/:id", editBlog);
app.get("/delete-blog/:id", deleteBlog);
app.get("/register", formRegister)
app.post("/register", addUser)
app.get("/login", formLogin)

// local server
app.listen(PORT, () => {
  console.log("Server running on port ${PORT}");
});

//  blog
function blog(req, res) {
  res.render("blog");
}

// add new blog
// function addBlog(req, res) {
//   const  {
//     title,
//     content,
//     images,
//     startDate,
//     endDate,
//     nodejs,
//     reactjs,
//     js,
//     vuejs,
//     // postedAt,
//   } = req.body;

//   let start = new Date(startDate);
//   let end = new Date(endDate)

//   if (start > end) {
//     return res.send("You Fill End Date Before Start Date");
//   }

//   let difference = end.getTime() - start.getTime();
//   let days = difference / (1000 * 3600 * 24);
//   let weeks = Math.floor(days / 7);
//   let months = Math.floor(weeks / 4);
//   let Yeat = Math.floor(months / 12);
//   let duration = "";

//   if (years > 0){
//     duration = years + " Tahun";
//   } else if (months > 0) {
//     duration = months + " Bulan";
//   } else if (weeks > 0) {
//     duration = weeks + " Minggu";
//   }else if (days > 0) {
//     duration = days + " Hari";
//   }
  
//   const data = {
//     title,
//     content,
//     images,
//     startDate,
//     endDate,
//     duration,
//     nodejs,
//     reactjs,
//     js,
//     vuejs,
//   };

//   dataBlog.push(data)
//   res.redirect("/")

// }

async function addBlog(req, res) {
	try {
		const { title, content, images, startDate, endDate, nodejs, reactjs, js, vuejs } =
			req.body;
		// const images = "image.png";
		const nodejsCheck = nodejs ? true : false;
		const reactjsCheck = reactjs ? true : false;
		const jsCheck = js ? true : false;
		const vuejsCheck = vuejs ? true : false;
		await sequelize.query(`INSERT INTO "Projects"(title, content, images,  "startDate", "endDate", nodejs, reactjs, js, vuejs, "createdAt", "updatedAt")
	VALUES ('${title}',  '${content}', '${images}', '${startDate}', '${endDate}', '${nodejsCheck}', '${reactjsCheck}', '${jsCheck}', '${vuejsCheck}', NOW(), NOW());`);
		res.redirect("/");
	} catch (error) {
		console.log(error);
	}
}

async function home(req, res) {
  try{
    const query= `select id, title, content, images, "startDate", "endDate", duration, nodejs, reactjs, js, vuejs, "createdAt", "updatedAt"
	FROM public."Projects";`

        let obj = await sequelize.query(query, {type: QueryTypes.SELECT})
        console.log(obj)

        let dataBlogRes = obj.map((item) => {
          return {
            ...item,
            duration: dateDuration(item.startDate, item.endDate),
          };
        });

        res.render('index', {dataBlog: dataBlogRes}) 
  }catch(error){
    console.log(error)
  }
}

async function updateBlog(req, res) {
	try {
		const { id } = req.params;
		const { title, content, startDate, endDate, nodejs, reactjs, js, vuejs } = req.body;
		const nodejsCheck = nodejs ? true : false;
		const reactjsCheck = reactjs ? true : false;
		const jsCheck = js ? true : false;
		const vuejsCheck = vuejs ? true : false;
		await sequelize.query(`UPDATE "Projects" 
        SET 
            title = '${title}', 
            content = '${content}', 
            "startDate" = '${startDate}', 
            "endDate" = '${endDate}', 
            "nodejs" = ${nodejsCheck},
            "reactjs" = ${reactjsCheck},
            "js" = ${jsCheck},
            "vuejs" = ${vuejsCheck},
            "createdAt" = NOW(), 
            "updatedAt" = NOW() 
        WHERE 
            id = ${id}
        ;`);
		res.redirect("/");
	} catch (error) {
		console.log(error);
	}
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
async function deleteBlog(req, res) {
	const { id } = req.params;
	try {
		await sequelize.query(`DELETE FROM "Projects" WHERE id=${id}`);
		res.redirect("/");
	} catch (error) {
		console.log(error);
	}
}

function formRegister(req, res) {
  res.render('register')
}

function formLogin(req, res) {
  res.render('login')
}

// 
async function editBlog(req, res) {
	const { id } = req.params;
	try {
		const query = `SELECT * FROM "Projects" WHERE id=${id};`;
		let obj = await sequelize.query(query, { type: QueryTypes.SELECT });
		// console.log(obj);

		obj = obj.map((item) => {
			return {
				...item,
				startDate: moment(item.startDate).format("YYYY-MM-DD"),
				endDate: moment(item.endDate).format("YYYY-MM-DD"),
			};
		});
		res.render("edit-blog", { blog: obj[0] });
	} catch (error) {
		console.log(error);
	}
}

async function addUser(req, res) {
  try {
    const { email, password } = req.body
    const query = `SELECT * FROM users WHERE email = '${email}'`
    let obj = await sequelize.query(query, { type: QueryTypes.SELECT })

    console.log(obj)

    // checking if email has not been registered
    if(!obj.length) {
      req.flash('danger', "user has not been registered")
      return res.redirect('/login')
    }

    await bcrypt.compare(password, obj[0].password, (err, result) => {
      if(!result) {
        req.flash('danger', 'password wrong')
        return res.redirect('/login')
      } else {
        req.session.isLogin = true
        req.session.user = obj[0].name
        req.flash('success', 'login success')
        res.redirect('/')
      }
    })
  } catch (error) {
    console.log(error)
  }
}