interface EmailJsConfig {
  serviceID: string;
  templateID: string;
  publicKey: string;
}

const config: { emailjs: EmailJsConfig } = {
  emailjs: {
    serviceID: "YOUR_SERVICE_ID",
    templateID: "YOUR_TEMPLATE_ID",
    publicKey: "YOUR_PUBLIC_KEY",
  },
};

export default config;
