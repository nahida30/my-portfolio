import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1bu5t1z', 'template_3oia6zr', form.current, '75zFlA7rum7CstsGy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contact" className="py-16 px-4 mt-[350px] lg:mt-[300px] md:px-20 md:mt-[850px]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-purple-700 mb-8">Contact Me</h2>
        
        {/* Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-8">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8">
            
            <img
              src="/public/images/contact.webp"
              alt="Contact Image"
              className="w-full h-48 mb-4 rounded-lg"

            />
            <h3 className="text-xl font-bold text-purple-700 mb-4">Contact Information</h3>
            
            <p className="text-gray-700">
              <strong>Email:</strong> nahidazmn@gmail.com<br />
              <strong>Phone:</strong> (123) 0123456789<br />
              <strong>Location:</strong> Dhaka, Bangladesh 
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8">
            <h3 className="text-xl font-bold text-purple-700 mb-4">Send me a message</h3>
            {/* Add your contact form here */}
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Your Name</label>
                <input type="text" id="name" name="form_name" className="w-full border rounded-md p-2" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Your Email</label>
                <input type="email" id="email" name="form_email" className="w-full border rounded-md p-2" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">Your Message</label>
                <textarea id="message" name="message" rows="4" className="w-full border rounded-md p-2"></textarea>
              </div>
              <button type="submit" className="bg-purple-700 text-white py-2 px-4 rounded-md">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
