const frmEmail = document.getElementById('frm-email')
frmEmail.addEventListener('sumbit', sendEmail)

const serviceId = 'service_l17j9vt'
const templateId = 'template_21zzhny'
const apikey = 'Vg_XPUT32tEEtfBFo'

function sendEmail(event){
    event.preventDefault();
    emailjs.init(serviceId);
    
    emailjs.sendForm(serviceId,templateId,frmEmail,apikey)
    .then((result) => Swal.fire("Su mensaje se ha enviado con éxito"))
    .catch((error)  => {
        Swal.fire({
            icon: "error",
            title:"Oops...",
            text: "No ha sido posible enviar el mensaje!",
        });
    });
}