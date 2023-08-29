function submitData() {
  let name = document.getElementById("input-name").value;
  let email = document.getElementById("input-email").value;
  let phone = document.getElementById("input-phone").value;
  let subject = document.getElementById("input-subject").value;
  let message = document.getElementById("input-message").value;

  if (name == "") {
    return alert("Nama tidak boleh kosong");
  } else if (email == "") {
    return alert("Email tidak boleh kosong");
  } else if (phone == "") {
    return alert("Phone tidak boleh kosong");
  } else if (subject == "") {
    return alert("Subject tidak boleh kosong");
  } else if (message == "") {
    return alert("Message tidak boleh kosong");
  }

  confirm("Apakah data yang anda masukan sudah benar?");

  let emailReceiver = "laolikristian1305@gmail.com";

  let a = document.createElement("a");
  a.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo, nama saya ${name}, ${message}, silakan kontak saya pada nomor ${phone}`;
  a.click();

  let data = { name, email, phone, subject, message };
  console.log(data);
}
