const faqItems = document.querySelectorAll(".faq_item")
const faqArrows = document.querySelectorAll(".faq_arrow")

faqItems.forEach((item, index) => {

  item.addEventListener("click", () => {

    faqItems.forEach((openedItem, openedIndex) => {

      if (openedItem !== item && openedItem.classList.contains("open")) {
        openedItem.classList.remove("open");
        openedItem.removeAttribute("style");

        faqArrows[openedIndex].classList.remove('expanded')
      }
      
    });

    item.classList.toggle("open")
    faqArrows[index].classList.toggle('expanded')

    if (item.classList.contains("open")) {
      item.style.height = `${item.scrollHeight}px`
    } else {
      item.removeAttribute("style")
    }
  });
});
