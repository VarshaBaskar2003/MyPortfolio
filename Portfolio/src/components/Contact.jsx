import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const socials = [
    { label: "github", icon: "ti-brand-github", url: "https://github.com/VarshaBaskar2003/Crud_Project" },
    { label: "linkedin", icon: "ti-brand-linkedin", url: "https://www.linkedin.com/in/varsha-b-0228a531a/" },
  ];

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = true;
    if (!form.email.trim()) e.email = true;
    if (!form.message.trim()) e.message = true;
    return e;
  };

  const handleChange = (field) => (ev) => {
    setForm((f) => ({ ...f, [field]: ev.target.value }));
    setErrors((e) => ({ ...e, [field]: false }));
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&family=DM+Mono:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      {/* Tabler Icons */}
      <link
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css"
        rel="stylesheet"
      />
<style>{`
        .ct-section {
          padding: 0.5rem 0 1rem;
          max-width: 1300px;
          margin: 0 auto;
        }

        .ct-eyebrow {
          font-family: 'Poppins', sans-serif;
          font-weight: 300;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #D85A30;
          display: block;
          margin-bottom: 6px;
        }

        .ct-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 5vw, 2.8rem);
          font-weight: 500;
          color: #1a1a1a;
          margin: 0 0 0.6rem;
          line-height: 1.15;
        }

        .ct-subtitle {
          font-family: 'Poppins', sans-serif;
          font-weight: 300;
          font-size: 13px;
          color: #6c757d;
          line-height: 1.8;
          max-width: 400px;
          margin: 0 0 3rem;
        }

        .ct-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          align-items: start;
        }

        .ct-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .ct-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .ct-label {
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          font-size: 11px;
          color: #6c757d;
          letter-spacing: 0.06em;
          text-transform: lowercase;
        }

        .ct-input,
        .ct-textarea {
          font-family: 'Poppins', sans-serif;
          font-weight: 300;
          font-size: 13px;
          padding: 10px 14px;
          border-radius: 8px;
          border: 1px solid rgba(0,0,0,0.12);
          background: #fff;
          color: #1a1a1a;
          outline: none;
          transition: border-color 0.15s, box-shadow 0.15s;
          width: 100%;
          box-sizing: border-box;
        }

        .ct-input::placeholder,
        .ct-textarea::placeholder {
          color: #bbb;
          font-weight: 300;
        }

        .ct-input:focus,
        .ct-textarea:focus {
          border-color: #D85A30;
          box-shadow: 0 0 0 3px rgba(216,90,48,0.1);
        }

        .ct-input.error,
        .ct-textarea.error {
          border-color: #D85A30;
        }

        .ct-textarea {
          resize: vertical;
          min-height: 120px;
          line-height: 1.65;
        }

        .ct-submit {
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          font-size: 13px;
          padding: 11px 24px;
          background: #1a1a1a;
          color: #fff;
          border: none;
          border-radius: 100px;
          cursor: pointer;
          align-self: flex-start;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: opacity 0.15s, transform 0.15s;
          letter-spacing: 0.04em;
        }

        .ct-submit:hover { opacity: 0.8; }
        .ct-submit:active { transform: scale(0.97); }
        .ct-submit:disabled { opacity: 0.6; cursor: not-allowed; }

        @keyframes spin { to { transform: rotate(360deg); } }
        .spin { animation: spin 1s linear infinite; }

        .ct-success {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'Poppins', sans-serif;
          font-weight: 400;
          font-size: 13px;
          color: #2d8c5a;
          background: #DFF5EA;
          padding: 12px 16px;
          border-radius: 8px;
        }

        .ct-right {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .ct-avail {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'Poppins', sans-serif;
          font-weight: 400;
          font-size: 12px;
          color: #6c757d;
          padding: 10px 14px;
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 8px;
          background: #f9f9f7;
        }

        .ct-avail-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #2d8c5a;
          flex-shrink: 0;
          position: relative;
        }

        .ct-avail-dot::after {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          background: rgba(45,140,90,0.2);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%       { transform: scale(1.6); opacity: 0; }
        }

        .ct-info-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 16px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .ct-info-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .ct-info-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: #FAECE7;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 16px;
          color: #3044d8ff;
        }

        .ct-info-label {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 10px;
          color: #aaa;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 3px;
        }

        .ct-info-value {
          font-family: 'Poppins', sans-serif;
          font-weight: 400;
          font-size: 13px;
          color: #1a1a1a;
        }

        .ct-divider {
          height: 1px;
          background: rgba(0,0,0,0.06);
        }

        .ct-socials-label {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 10px;
          color: #aaa;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 0.6rem;
        }

        .ct-socials {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .ct-social-btn {
          font-family: 'Poppins', sans-serif;
          font-weight: 400;
          font-size: 12px;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 8px;
          background: transparent;
          color: #6c757d;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.15s;
        }

        .ct-social-btn:hover {
          border-color: rgba(0,0,0,0.2);
          color: #1a1a1a;
          background: #f5f5f3;
        }

        @media (max-width: 600px) {
          .ct-section { padding: 3.5rem 1rem 4rem; }
          .ct-layout { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="ct-section" id="contact">
        <span className="ct-eyebrow">get in touch</span>
        <h2 className="ct-title">
          Let's work
          <br />
          together.
        </h2>
        <p className="ct-subtitle">
          Have a project in mind or just want to say hello? Drop a message —
          I usually reply within 24 hours.
        </p>

        <div className="ct-layout">
          {/* ── Form ── */}
          <div className="ct-form">
            <div className="ct-field">
              <label className="ct-label">name</label>
              <input
                className={`ct-input${errors.name ? " error" : ""}`}
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange("name")}
              />
            </div>

            <div className="ct-field">
              <label className="ct-label">email</label>
              <input
                className={`ct-input${errors.email ? " error" : ""}`}
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange("email")}
              />
            </div>

            <div className="ct-field">
              <label className="ct-label">subject</label>
              <input
                className="ct-input"
                type="text"
                placeholder="What's this about?"
                value={form.subject}
                onChange={handleChange("subject")}
              />
            </div>

            <div className="ct-field">
              <label className="ct-label">message</label>
              <textarea
                className={`ct-textarea${errors.message ? " error" : ""}`}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange("message")}
              />
            </div>

            {!sent ? (
              <button
                className="ct-submit"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <i className="ti ti-loader-2 spin" aria-hidden="true" />
                    sending...
                  </>
                ) : (
                  <>
                    send message{" "}
                    <i className="ti ti-arrow-right" aria-hidden="true" />
                  </>
                )}
              </button>
            ) : (
              <div className="ct-success">
                <i
                  className="ti ti-check"
                  style={{ fontSize: 16, flexShrink: 0 }}
                  aria-hidden="true"
                />
                Message sent! I'll get back to you soon.
              </div>
            )}
          </div>

          {/* ── Right panel ── */}
          <div className="ct-right">
            {/* Availability pill */}
            <div className="ct-avail">
              <span className="ct-avail-dot" />
              Available for freelance work
            </div>

            {/* Info card */}
            <div className="ct-info-card">
              <div className="ct-info-row">
                <div className="ct-info-icon">
                  <i className="ti ti-mail" aria-hidden="true" />
                </div>
                <div>
                  <div className="ct-info-label">Email</div>
                  <div className="ct-info-value">varshab0109@gmail.com</div>
                </div>
              </div>

              <div className="ct-divider" />

              <div className="ct-info-row">
                <div className="ct-info-icon">
                  <i className="ti ti-map-pin" aria-hidden="true" />
                </div>
                <div>
                  <div className="ct-info-label">Based in</div>
                  <div className="ct-info-value">Chennai, India</div>
                </div>
              </div>

              <div className="ct-divider" />

              <div className="ct-info-row">
                <div className="ct-info-icon">
                  <i className="ti ti-clock" aria-hidden="true" />
                </div>
                <div>
                  <div className="ct-info-label">Timezone</div>
                  <div className="ct-info-value">IST — UTC +5:30</div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="ct-socials-label">Find me on</p>
              <div className="ct-socials">
                {socials.map(({ label, icon, url }) => (
                  <a
                    key={label}
                    href={url}
                    className="ct-social-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className={`ti ${icon}`}
                      style={{ fontSize: 15 }}
                      aria-hidden="true"
                    />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}