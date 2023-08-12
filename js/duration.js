let dataBlog = [];

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("input-blog-title").value;
  let content = document.getElementById("input-blog-content").value;
  // DATE //////////////////////////////////////
  let startDate = document.getElementById("input-start-date").value;
  let endDate = document.getElementById("input-end-date").value;

  // IMAGE //////////////////////////////////////
  let image = document.getElementById("input-blog-image").files;
  image = URL.createObjectURL(image[0]);

  // TECHNOLOGIES /////////////////////////////
  let technologies = [];
  document.querySelectorAll('[type="checkbox"]').forEach((item) => {
    if (item.checked === true) {
      technologies.push(item.value);
    }
  });

  // DURATION ///////////////////////////////////
  const date1 = new Date(startDate);
  const date2 = new Date(endDate);
  const time = date2 - date1;
  const days = Math.ceil(time / (1000 * 60 * 60 * 24));
  let duration = days;

  /////////////////////////////////////////////

  /////////////////////////

  let blog = {
    title,
    content,
    duration,
    image,
    technologies,
    postAt: new Date(),
    author: "Mei Kristian Laoli",
  };

  dataBlog.push(blog);
  console.log("ini datablog dari addblog", dataBlog);

  renderBlog();
}

function renderBlog() {
  document.getElementById("content").innerHTML = "";

  for (let index = 0; index < dataBlog.length; index++) {
    console.log("inidatarenderblog", dataBlog[index]);

    document.getElementById("content").innerHTML += `
    
        <div class="blog-list-item">
      <div class="blog-image">
        <div class="img">
          <img class="img-blog" src="${dataBlog[index].image}" alt="" />
        </div>
      </div>
      <div class="blog-content">
        <div class="blog-letter">
          <a class="blog-title" href="blog-detail.html" target="_blank"
            >${dataBlog[index].title}</a
          >
          <div class="info-info">
            <div class="detail-blog-content">${
              dataBlog[index].technologies
            }</div>
            <div class="duration">Durasi: ${dataBlog[index].duration} Hari</div>
          </div>
          <p>
          ${dataBlog[index].content} 
          </p>
          <p>${getRealTime(dataBlog[index].postAt)}</p>
        </div>
        ${getDistanceTime(dataBlog[index].postAt)}
        <div class="button-group">
          <button class="btn-edit">Edit Post</button>
          <button class="btn-delete">Delete Post</button>
        </div>
      </div>
    </div>`;
  }
}

function getRealTime(time) {
  let namaBulan = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Des",
  ];

  // let realTime = time();
  let date = time.getDate();
  let month = time.getMonth();
  let year = time.getFullYear();
  let hours = time.getHours();
  let minutes = time.getMinutes();

  // if (hours <= 9) {
  //   // 09
  //   hours = "0" + hours;
  // } else if (minutes <= 9) {
  //   minutes = "0" + minutes;
  // }

  // return `${date} ${namaBulan[month]} ${year} || ${hours}:${minutes}`;
  console.log(`${date} ${namaBulan[month]} ${year} ${hours}:${minutes} WIB`);
  return `${date} ${namaBulan[month]} ${year} ${hours}:${minutes} WIB`;
}

function getDistanceTime(time) {
  let timeNow = new Date();
  let timePost = time;
  let distanceTime = timeNow - timePost;

  let distanceDay = Math.floor(distanceTime / (1000 * 3600 * 24));
  let distanceHour = Math.floor(distanceTime / (1000 * 60 * 60));
  let distanceMinute = Math.floor(distanceTime / (1000 * 60));
  let distanceSecond = Math.floor(distanceTime / 1000);

  if (distanceDay > 0) {
    return `${distanceDay} days ago`;
  } else if (distanceHour > 0) {
    return `${distanceHour} hour ago`;
  } else if (distanceMinute > 0) {
    return `${distanceMinute} minute ago`;
  } else if (distanceSecond > 0) {
    return `${distanceSecond} second ago`;
  }
}

setInterval(function () {
  renderBlog();
}, 3000);
