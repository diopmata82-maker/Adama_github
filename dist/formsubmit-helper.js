// Configuration pour Netlify Forms (gratuit et sans activation)
const FORM_SUBMIT_EMAIL = "sportafricainpro@gmail.com";

document.addEventListener("DOMContentLoaded", () => {
    setupFooterNewsletterForms();
    setupNewsletterPageForm();
    setupContactForm();
});

function setupFooterNewsletterForms() {
    document.querySelectorAll(".footer-newsletter-form").forEach((form) => {
        const emailInput = form.querySelector('input[type="email"]');

        if (!emailInput) {
            return;
        }

        emailInput.name = "email";

        configureForm(form, {
            subject: () => `Nouvelle inscription newsletter - ${document.title}`,
            successPath: "abonnement-success.html",
            formType: "newsletter",
            formLocation: "footer"
        });
    });
}

function setupNewsletterPageForm() {
    const form = document.querySelector(".abonnement-form");

    if (!form) {
        return;
    }

    const nameInput = form.querySelector("#nom");
    const emailInput = form.querySelector("#email");

    if (nameInput) {
        nameInput.name = "name";
    }

    if (emailInput) {
        emailInput.name = "email";
    }

        configureForm(form, {
            subject: () => "Nouvelle inscription newsletter - Formulaire principal",
            successPath: "abonnement-success.html",
            formType: "newsletter",
            formLocation: "abonnement-page",
            infoMessage: "Pour recevoir les emails, hébergez votre site sur Netlify et configurez les notifications email dans le dashboard."
        });
}

function setupContactForm() {
    const form = document.getElementById("contact-form");

    if (!form) {
        return;
    }

    const nameInput = form.querySelector('[name="from_name"]');
    const emailInput = form.querySelector('[name="from_email"]');
    const subjectInput = form.querySelector('[name="subject"]');

    if (nameInput) {
        nameInput.name = "name";
    }

    if (emailInput) {
        emailInput.name = "email";
    }

        configureForm(form, {
            subject: () => {
                const selectedSubject = subjectInput ? subjectInput.value.trim() : "";
                return selectedSubject
                    ? `Nouveau message Sport Africain - ${selectedSubject}`
                    : "Nouveau message Sport Africain";
            },
            successPath: "contact-success.html",
            formType: "contact",
            formLocation: "contact-page",
             infoMessage: "Pour recevoir les emails, hébergez votre site sur Netlify et configurez les notifications email dans le dashboard."
        });
}

function configureForm(form, options) {
    // Configuration pour Netlify Forms
    form.method = "POST";
    form.setAttribute("data-netlify", "true");
    form.setAttribute("data-netlify-honeypot", "bot-field");
    form.acceptCharset = "UTF-8";

    // Ajouter le champ honeypot pour éviter les spams
    if (!form.querySelector('[name="bot-field"]')) {
        const honeypot = document.createElement("input");
        honeypot.type = "hidden";
        honeypot.name = "bot-field";
        form.appendChild(honeypot);
    }

    setHiddenField(form, "form_type", options.formType);
    setHiddenField(form, "form_location", options.formLocation);
    ensureInfoMessage(form, options.infoMessage);

    updateRuntimeFields(form, options);

    form.addEventListener("submit", () => {
        updateRuntimeFields(form, options);
        setSubmittingState(form);
    });
}

function updateRuntimeFields(form, options) {
    const subject = typeof options.subject === "function" ? options.subject(form) : options.subject;
    const successUrl = new URL(options.successPath, window.location.href).toString();

    setHiddenField(form, "form_subject", subject);
    setHiddenField(form, "redirect_to", successUrl);
    setHiddenField(form, "page_url", window.location.href);
    setHiddenField(form, "source_page", window.location.href);
}

function setSubmittingState(form) {
    const submitButton = form.querySelector('[type="submit"]');

    if (!submitButton) {
        return;
    }

    submitButton.disabled = true;

    const btnText = submitButton.querySelector(".btn-text");
    const btnLoading = submitButton.querySelector(".btn-loading");

    if (btnText && btnLoading) {
        btnText.style.display = "none";
        btnLoading.style.display = "inline";
        return;
    }

    if (!submitButton.dataset.originalText) {
        submitButton.dataset.originalText = submitButton.textContent;
    }

    submitButton.textContent = "Envoi en cours...";
}

function ensureInfoMessage(form, message) {
    if (!message || form.querySelector(".formsubmit-info")) {
        return;
    }

    const info = document.createElement("div");
    info.className = "formsubmit-info";
    info.textContent = message;
    info.style.marginTop = "16px";
    info.style.padding = "12px 14px";
    info.style.borderRadius = "12px";
    info.style.background = "#f3f7f4";
    info.style.border = "1px solid #d8e9dd";
    info.style.color = "#24553a";
    info.style.fontSize = "14px";
    info.style.lineHeight = "1.5";

    form.appendChild(info);
}

function setHiddenField(form, name, value) {
    let input = Array.from(form.querySelectorAll('input[type="hidden"]')).find(
        (hiddenInput) => hiddenInput.name === name
    );

    if (!input) {
        input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        form.appendChild(input);
    }

    input.value = value;
}
