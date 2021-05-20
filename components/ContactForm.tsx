//globals
import axios from "axios";
import { useState, useContext } from "react";
import { toast } from "react-toastify";

// styles
import { ContactFormElement } from "../styles/ContactFormElement";
import { Button, HeadingSecondary, Para } from "../styles/TextElements";

// context
import { AppContext } from "../context/AppContext";

interface IErrors {
  name: boolean;
  email: boolean;
  message: boolean;
  apiError: boolean;
}

const ContactForm = () => {
  const { closeModal } = useContext(AppContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<IErrors>({
    name: false,
    email: false,
    message: false,
    apiError: false,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setErrors({ ...errors, name: !name, email: !email, message: !message });
    } else {
      setErrors({ apiError: false, name: false, email: false, message: false });
      try {
        const res = await axios.post("api/send-email", {
          name,
          email,
          message,
        });
        setName("");
        setEmail("");
        setMessage("");
        closeModal();
        toast.success("Message sent");
      } catch (err) {
        setErrors({ ...errors, apiError: true });
        setTimeout(() => {
          setErrors({ ...errors, apiError: false });
        }, 3000);
      }
    }
  };

  return (
    <ContactFormElement>
      <HeadingSecondary>Contact us! </HeadingSecondary>
      <Para>Please fill out this form to contact us</Para>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="form-control">
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="name">Name </label>
            {errors.name ? (
              <span className="error">*this field is required</span>
            ) : null}
          </div>
          <div className="form-control">
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Email </label>
            {errors.email ? (
              <span className="error">*this field is required</span>
            ) : null}
          </div>
        </div>
        <div className="form-group">
          <div className="form-control wide">
            <input
              id="message"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message">Message </label>
            {errors.message ? (
              <span className="error">*this field is required</span>
            ) : null}
          </div>
        </div>
        {errors.apiError ? (
          <p className="api-error">Something went wrong. Plese try againg</p>
        ) : null}
        <Button>Send</Button>
      </form>
    </ContactFormElement>
  );
};

export default ContactForm;
