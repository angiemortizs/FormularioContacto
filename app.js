const frmEmail = document.getElementById("frm-email")
frmEmail.addEventListener("submit", sendEmail)

const serviceId = "service_u7lwr33"
const templateId = "template_gt0vmty"
const apikey = "Vg_XPUT32tEEtfBFo" 

function sendEmail(event){
    event.preventDefault()
    emailjs.init(serviceId)

    emailjs.sendForm(serviceId,templateId,frmEmail,apikey)
    .then((result) => Swal.fire ("Su mensaje se ha enviado con exito"))
    .catch((error) => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No ha sido posible enviar el mensaje",
    })
  })
}

