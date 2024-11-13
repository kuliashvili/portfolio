"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import "./contact.css";
import Button from "../components/button/Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [captchaToken, setCaptchaToken] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (!captchaToken) {
      newErrors.captcha = "Please verify that you're not a robot";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const onCaptchaChange = (token) => {
    setCaptchaToken(token);
    if (errors.captcha) {
      setErrors((prev) => ({ ...prev, captcha: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("sending");

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setCaptchaToken(null);

        if (window.grecaptcha) {
          window.grecaptcha.reset();
        }
      }
    } catch (error) {
      setStatus("error");
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Get in Touch with Me</h1>

      <div className="contact-content">
        <div className="contact-form-wrapper">
          <form noValidate onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <span className="error-message">{errors.name}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                style={{ resize: "none" }}
              />
              {errors.message && (
                <span className="error-message">{errors.message}</span>
              )}
            </div>

            <div className="captcha-container">
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={onCaptchaChange}
              />
              {errors.captcha && (
                <span className="error-message">{errors.captcha}</span>
              )}
            </div>
            <div className="button-container">
              <Button type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>

          {status === "success" && (
            <div className="success-message">Message sent successfully!</div>
          )}

          {status === "error" && (
            <div className="error-message">
              Failed to send message. Please try again.
            </div>
          )}
        </div>

        <div className="contact-info">
          <h2 className="contact-info-title">Contact Information</h2>
          <div className="contact-info-item">
            <h3>Email</h3>
            <a href="mailto:giorgi.kuliashvili.1@btu.edu.ge">
              giorgi.kuliashvili.1@btu.edu.ge
            </a>
          </div>
          <div className="contact-info-item">
            <h3>Location</h3>
            <p>Tbilisi, Georgia</p>
          </div>
          <div className="contact-info-item">
            <h3>Timezone</h3>
            <p>Georgia Standard Time (GMT+4)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
