import emailjs from 'emailjs-com'

export default function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_t2r3ifb', 'template_8gl5eql', e.target, 'user_ySUj3Wgz9VqyXz2rtrxTv')
        .then(result => {
            console.log(result.text);
        }, error => {
            console.log(error.text);
        });
    e.target.reset();
}
