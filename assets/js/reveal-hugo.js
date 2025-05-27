import wait from "./lib/wait"

// force light theme with reveal-hugo
document.documentElement.setAttribute("data-color-mode", "auto")
document.documentElement.setAttribute("data-light-theme", "light")
document.documentElement.setAttribute("data-dark-theme", "light")
document.documentElement.setAttribute("data-icon-theme", "light")

wait("div.reveal", 3000)
    .then(div => div.classList.add("markdown-body"))
    .catch(console.error)

wait("#logo", 3000)
    .then(logo => { document.body.insertBefore(logo, document.body.firstChild); logo.style.display = "block" })
    .catch(console.error)
