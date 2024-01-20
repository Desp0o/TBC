const privacyPanel = document.querySelector('.privacy')
const openPrivacy = document.querySelector('.footer_privacy_p')
const closePrivacy = document.querySelector('.privacy_panel_close_icon')
const closePrivacyBTn = document.querySelector('.privacy_close_btn')

openPrivacy.addEventListener("click", () => {
    privacyPanel.classList.add('open')
})

closePrivacy.addEventListener("click", () => {
    privacyPanel.classList.remove('open')
})

closePrivacyBTn.addEventListener("click", () => {
    privacyPanel.classList.remove('open')
})