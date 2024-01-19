import { useState } from 'react';
//import './Contact.scss';
import emailjs from '@emailjs/browser';
//import green from '@material-ui/core/colors/green';
//import { fontSize } from '@material-ui/system';
//import {Facebook,Github,Instagram,Linkedin} from 'react-bootstrap-icons';


function Contact(props) {
    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
        emailjs.sendForm("service_1903", "Nasim's-portfolio", e.target, 'user_E4pA7uCrDEmnsoSNfeuc6')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                alert("Complain Send Success")
            }, function (error) {
                console.log('FAILED...', error);
                console.log("Something Wrong!")
            });

        e.target.reset();
    };
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email" name="email" />
                    <textarea placeholder="Message" name="message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, Nasim will reply ASAP :)</span>}
                </form>
   
                {/* <div className="social-buttons">
                    <a href="https://web.facebook.com/zafrulhasan.nasim" target="_blank" className="social-button facebook"><Facebook className="fa"  />  </a>
                    <a href="https://github.com/zafrulhasankhan" target="_blank" className="social-button twitter"><Github className="fa" /></a>
                    <a href="https://www.linkedin.com/in/zafrul-hasan-nasim-8501b120b" target="_blank" className="social-button google"><Linkedin className="fa" /></a>
                    <a href="https://www.instagram.com/zafrul_hasan_nasim/" target="_blank" className="social-button instagram"><Instagram className="fa"/></a>
                </div> */}
            </div>
        </div>
    );
}

export default Contact;