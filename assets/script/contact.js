document.getElementById("input_mail").addEventListener("submit", (e) => {
  const name = document.getElementById("input-mail-name").value
  const subject = document.getElementById("input-mail-subject").value
  const text = document.getElementById("input-mail-text").value

  e.target.setAttribute("action", `mailto:plasticmji@gmail.com?subject=${subject}&body=Halo, nama saya ${name}. ${text}`)
})