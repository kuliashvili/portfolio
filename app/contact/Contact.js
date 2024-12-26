"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import "./contact.css";
import Button from "../components/button/Button";
import { useLanguage } from "@/app/context/LanguageContext";
import { translations } from "@/app/translations/translations";

const Contact = ({ headingLevel }) => {
  const Heading = headingLevel;
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

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
      newErrors.name = t.nameRequired;
    }

    if (!formData.email.trim()) {
      newErrors.email = t.emailRequired;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t.emailInvalid;
    }

    if (!formData.message.trim()) {
      newErrors.message = t.messageRequired;
    }

    if (!captchaToken) {
      newErrors.captcha = t.captchaRequired;
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
      <Heading className="contact-title">{t.getInTouch}</Heading>

      <div className="contact-content">
        <div className="contact-form-wrapper border-animate border-1">
          <form noValidate onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">{t.name}</label>
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
              <label htmlFor="email">{t.email}</label>
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
              <label htmlFor="message">{t.message}</label>
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
                {status === "sending" ? t.sending : t.sendMessage}
              </Button>
            </div>
          </form>

          {status === "success" && (
            <div className="success-message">{t.messageSent}</div>
          )}

          {status === "error" && (
            <div className="error-message">{t.messageFailed}</div>
          )}
        </div>

        <div className="contact-info border-animate border-1">
          <h2 className="contact-info-title">{t.contactInfo}</h2>
          <div className="contact-info-item">
            <h3>{t.email}</h3>
            <a
              style={{
                wordWrap: "break-word",
              }}
              href="mailto:giorgi.kuliashvili.1@btu.edu.ge"
            >
              giorgi.kuliashvili.1@btu.edu.ge
            </a>
          </div>
          <div className="contact-info-item">
            <h3>{t.location}</h3>
            <p>{t.tbilisiGeorgia}</p>
          </div>
          <div className="contact-info-item">
            <h3>{t.timezone}</h3>
            <p>{t.georgiaTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;