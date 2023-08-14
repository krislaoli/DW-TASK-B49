let dataBlog = [];

function addBlog(event) {
  event.preventDefault();

  let name = document.getElementById("input-blog-title").value;
  let startDate = document.getElementById("input-start-date").value;
  let endDate = document.getElementById("input-end-date").value;
  let desc = document.getElementById("input-blog-desc").value;
  let image = document.getElementById("input-blog-image").files;

  // mengubah value tanggal menjadi number
  function getDifferentTime() {
    let dateFirst = new Date(startDate).getTime();
    // console.log(dateFirst);
    let dateLast = new Date(endDate).getTime();
    // console.log(dateLast);
    // mili ke date
    var date1 = new Date(dateFirst);
    var date2 = new Date(dateLast);

    // deklarasi tanggal
    let hoursInDays = 24;
    let daysInWeek = 7;
    let daysInMonth = 30;
    let monthInYears = 12;

    const duration = date2 - date1; // selisih antara tanggal akhir dan awal dalam milisecond

    // variable penyimpan untuk mengatur satuan taggal
    const daysDiff = Math.floor(duration / (hoursInDays * 60 * 60 * 1000)); //mili to days
    const weeksDiff = Math.floor(
      duration / (daysInWeek * hoursInDays * 60 * 60 * 1000)
    ); // mili to week
    const monthDiff = Math.floor(
      duration / (daysInMonth * 24 * 60 * 60 * 1000)
    ); // mili to month
    const yearsDiff = Math.floor(
      duration / (monthInYears * daysInMonth * 24 * 60 * 60 * 1000)
    ); // mili to years

    if (yearsDiff > 0) {
      return `${yearsDiff}` + " Tahun";
    } else if (monthDiff > 0) {
      return `${monthDiff}` + " Bulan";
    } else if (weeksDiff > 0) {
      return `${weeksDiff}` + " Minggu";
    } else {
      return `${daysDiff}` + " Hari";
    }
  }

  let differentTime = getDifferentTime();

  let ReactIcon = '<i class="fa-brands fa-react"></i>';
  let JavascriptIcon = '<i class="fa-brands fa-js"></i>';
  let NodeIcon = '<i class="fa-brands fa-node-js"></i>';
  let javaIcon = '<i class="fa-brands fa-java"></i>';

  let checkReact = document.getElementById("input-check-box-react").checked
    ? ReactIcon
    : "";
  let checkJs = document.getElementById("input-check-box-js").checked
    ? JavascriptIcon
    : "";
  let checkNodeJs = document.getElementById("input-check-box-node-js").checked
    ? NodeIcon
    : "";
  let checkJava = document.getElementById("input-check-box-java").checked
    ? javaIcon
    : "";

  image = URL.createObjectURL(image[0]);
  console.log(image);

  //menampung data

  let blog = {
    name,
    startDate,
    endDate,
    desc,
    image,
    checkReact,
    checkJs,
    checkNodeJs,
    checkJava,
    differentTime,
  };

  dataBlog.push(blog);
  console.log(dataBlog);

  renderBlog();
}

function renderBlog() {
  document.getElementById("contents").innerHTML = "";

  // looping
  for (let index = 0; index < dataBlog.length; index++) {
    document.getElementById("contents").innerHTML += `
        <div class="blog-list-content">
        <div class="list-image">
          <img src="${dataBlog[index].image}" alt="project-foto" />
        </div>
        <div class="blog-list-content-title">
          <a href="project-detail.html">${dataBlog[index].name} </a>
        </div>
        <div class="blog-list-detail">
        Durasi: ${dataBlog[index].differentTime} </div>
        <div class="blog-project-content">
          <p>
          ${dataBlog[index].desc}
          </p>
        </div>
        <div class="mini-icon">
        ${dataBlog[index].checkReact}
        ${dataBlog[index].checkJs}
        ${dataBlog[index].checkNodeJs}
        ${dataBlog[index].checkJava}
        </div>

        <div class="btn-group">
          <button class="btn-edit">Edit</button>
          <button class="btn-delete">Delete</button>
        </div>
      </div>
        `;
  }
}
//
function formWajib() {
  let name = document.getElementById("input-blog-title").value;
  let startDate = document.getElementById("input-start-date").value;
  let endDate = document.getElementById("input-end-date").value;
  let desc = document.getElementById("input-blog-desc").value;
  let image = document.getElementById("input-blog-image").files;

  if (name == "") {
    return alert("Name Project Required!");
  } else if (startDate == "") {
    return alert("Start date Required!");
  } else if (endDate == "") {
    return alert("End date Required!");
  } else if (desc == "") {
    return alert("Description Required!");
  } else if (image == "") {
    return alert("Attach File Required");
  }
}
