import { useEffect, useRef } from "react";
import "../style/Form.css";

// Hàm load script chỉ một lần duy nhất
const loadHubspotScript = (() => {
  let loaded = false;
  let loadPromise = null;

  return function () {
    if (loaded) return Promise.resolve();

    if (loadPromise) return loadPromise;

    loadPromise = new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://js.hsforms.net/forms/embed/v2.js";
      script.async = true;
      script.onload = () => {
        loaded = true;
        resolve();
      };
      document.body.appendChild(script);
    });

    return loadPromise;
  };
})();

function Form() {
  const formRenderedRef = useRef(false);

  useEffect(() => {
    if (formRenderedRef.current) return;

    loadHubspotScript().then(() => {
      if (!formRenderedRef.current && window.hbspt) {
        window.hbspt.forms.create({
          region: "na2",
          portalId: "243256377",
          formId: "1a7d48e7-1db9-4918-b285-73a63947e918",
          target: "#hubspotFormStatic",
        });
        formRenderedRef.current = true;
      }
    });
  }, []);

  return (
    <div className="form-container" id="form">
      <div className="img-communication-container">
        <img id="img-contact" src="/assets/contactUs.jpg" alt="contact us" />
      </div>
      <div className="script-container">
        <div id="hubspotFormStatic"></div>
      </div>
    </div>
  );
}

export default Form;
