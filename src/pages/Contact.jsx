import React from "react";

const Contact = () => {
const handleSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries())
    console.log(formInputData)
}
  return (
    <section className="section-contact"> 
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">

      <form action={handleSubmit}>
        <input type="text" className="form-control" required autoComplete="off" placeholder="Enter your name" name="username" />
        <input type="email" className="form-control" required autoComplete="off" placeholder="Enter your email" name="email" />
        <textarea type="text" className="form-control" required autoComplete="off" placeholder="Enter your message" name="message" />
        <button type="submit"  value="Send Message" className="btn btn-darken btn-inline bg-white-box">Send Message</button>
      </form>
      </div>
    </section>
  );
};

export default Contact;
