document.getElementById("input_mail").addEventListener("change", (Event) => {
  const name = document.getElementById("input-mail-name").value;
  const subject = document.getElementById("input-mail-subject").value;
  const text = document.getElementById("input-mail-text").value;

  document.getElementById("input_mail").setAttribute("action", `mailto:plasticmji@gmail.com?subject=${subject}&body=Halo, nama saya ${name}. ${text}`);
  // console.log(`mailto:plasticmji@gmail.com?subject=${subject}&body=Halo, nama saya ${name}. ${text}`)
});
