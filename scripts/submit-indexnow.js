const payload = {
  host: "www.vaultpassgenerator.com", // Your domain WITHOUT https://
  key: "116ae2da00b347919387609cb4c5e5c4", // ← Replace with your actual 64-character hex key
  keyLocation: "https://www.vaultpassgenerator.com/116ae2da00b347919387609cb4c5e5c4.txt", // ← Full URL to your key file
  urlList: [
    "https://www.vaultpassgenerator.com/",
    "https://www.vaultpassgenerator.com/about/",
    "https://www.vaultpassgenerator.com/ai-and-cybersecurity-the-double-edged-sword/",
    "https://www.vaultpassgenerator.com/cloud-security-challenges-in-the-era-of-remote-work/",
    "https://www.vaultpassgenerator.com/contact/",
    "https://www.vaultpassgenerator.com/cybersecurity-and-blockchain/",
    "https://www.vaultpassgenerator.com/cybersecurity-for-critical-infrastructure/",
    "https://www.vaultpassgenerator.com/cybersecurity-in-ai-machine-learning/",
    "https://www.vaultpassgenerator.com/cybersecurity-in-the-internet-of-things-iot/",
    "https://www.vaultpassgenerator.com/cybersecurity-regulations-and-compliance/",
    "https://www.vaultpassgenerator.com/cybersecurity-skills-and-careers-in-2026/",
    "https://www.vaultpassgenerator.com/free-password-generator/",
    "https://www.vaultpassgenerator.com/future-cybersecurity-trends/",
    "https://www.vaultpassgenerator.com/identity-and-access-management-iam-trends/",
    "https://www.vaultpassgenerator.com/passwordless-authentication-the-future-of-login-security/",
    "https://www.vaultpassgenerator.com/privacy-policy/",
    "https://www.vaultpassgenerator.com/ransomware-in-2025-evolving-threats-and-protection/"
  ]
};

fetch("https://www.bing.com/indexnow", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(payload)
})
  .then(response => console.log("Response Status:", response.status))
  .catch(error => console.error("Network Error:", error));