const faqItems = document.querySelectorAll(".faq_item");

faqItems.forEach((item) => {

  item.addEventListener("click", () => {

    faqItems.forEach((openedItem) => {

      if (openedItem !== item && openedItem.classList.contains("open")) {
        openedItem.classList.remove("open");
        openedItem.removeAttribute("style");
      }
      
    });

    item.classList.toggle("open");

    if (item.classList.contains("open")) {
      item.style.height = `${item.scrollHeight}px`;
    } else {
      item.removeAttribute("style");
    }
  });
});
