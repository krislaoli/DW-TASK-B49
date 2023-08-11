function submitData() {
  let name = document.getElementById("input-name").value;
  let email = document.getElementById("input-email").value;
  let phone = document.getElementById("input-number").value;
  let subject = document.getElementById("input-subject").value;
  let massage = document.getElementById("input-massage").value;

  if (name == "") {
    return alert("Nama Harsu Diisi!");
  } else if (email == "") {
    return alert("Email Harus Diisi!");
  } else if (phone == "") {
    return alert("Phone Harus Diisi!");
  } else if (subject == "") {
    return alert("Subject Harus Dipilih!");
  } else if (massage == "") {
    return alert("Massage Harus Diisi!");
  }

  let a = document.createElement("a");
  a.href = `mailto:${email}?subject=${subject}&body=Halo perkenalkan nama saya ${name}, ${massage}. jika ada masalah terlebih silahkan hubungi nomor ini ${phone}, TerimaKasih`;
  a.click();

  console.log(name);
  console.log(email);
  console.log(phone);
  console.log(subject);
  console.log(massage);
}
