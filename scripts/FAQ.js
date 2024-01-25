const questionsArray = [
  {
    question: "როგორ ხდება კურსებზე რეგისტრაცია და შერჩევა?",
    answer: {
      answer: "კურსზე რეგისტრაციისთვის უნდა გაიარო რამდენიმე ეტაპი:",
      answerSecondary:
        "* სანამ კურსზე დარეგისტრირდები მნიშვნელოვანია, ყურადღებით წაიკითხო კურსის აღწერა, ნახო რას ისწავლი კურსის განმავლობაში და გაიგო გააჩნია თუ არა კურსს დასწრების წინაპირობა.",
      answerInner: `<p class="faq-answer-description_p">
      <span>I ეტაპი</span> - პირველ ეტაპზე საჭიროა, შეავსო სასურველი
      კურსისთვის განკუთვნილი სარეგისტრაციო ფორმა, რომელიც
      განთავსებულია კურსის შიდა გვერდზე. კურსზე რეგისტრაციის
      დასრულების შემდეგ დაიწყება შემოსული განცხადებების გადარჩევა.
    </p>
    <p class="faq-answer-description_p">
      <span>II ეტაპი</span> - შერჩევის მეორე ეტაპი კურსების მიხედვით
      განსხვავებულია, ზოგიერთი კურსისთვის მოიცავს პრე-ტესტს, ზოგიერთ
      კურსზე კი უნარების ტესტს, სადაც მინიმალური ზღვარის გადალახვის
      შემთხვევაში გადახვალ შერჩევის შემდეგ ეტაპზე.
    </p>
    <p class="faq-answer-description_p">
      <span>III ეტაპი</span> - მესამე ეტაპი კურსების მიხედვით
      განსხვავდება: Advance კურსებზე, სადაც მოითხოვება გარკვეული
      ტექნიკური ცოდნა, მონაწილეებმა უნდა დაწერონ ტექნიკური ტესტი
      ცოდნის დონის შესამოწმებლად, ხოლო კურსებზე, სადაც რაიმე ტიპის
      წინასწარი ცოდნა მოთხოვნილი არ არის უნდა შეასრულოთ ტექნიკური
      დავალება, რაც თქვენი კვლევისა და თვითსწავლის უნარს ამოწმებს.
    </p>
    <p class="faq-answer-description_p">
      <span>IV ეტაპი</span> - შერჩევის ბოლო მეოთხე ეტაპი მოიცავს
      გასაუბრებას შესარჩევ კომისიასთან. გასაუბრების წარმატებით
      გავლის შემთხვევაში ჩაირიცხებით კურსზე და გაფორმდება შესაბამისი
      ხელშეკრულება.
    </p>
    `,
    },
  },

  {
    question: "შემიძლია თუ არა ერთზე მეტ კურსზე რეგისტრაცია?",
    answer: {
      answer:
        "TBC X USAID ტექნოლოგიური განათლებისთვის პროგრამაში თითოეულ კანდიდატს აქვს მხოლოდ ერთი კურსის გავლის შესაძლებლობა. გარდა Information Security და Python კურსებისა, სადაც Basic დონის გავლის შემდეგ შესაძლებელია სწავლის გაგრძელება Advance დონეზე.",
      answerSecondary: "",
      answerInner: "",
    },
  },

  {
    question: "რა ღირს სწავლა პროგრამის ფარგლებში?",
    answer: {
      answer:
        "პროგრამის ფარგლებში კურსებზე სწავლა სრულიად დაფინანსებულია თიბისი ბანკისა და USAID-ის მიერ.",
      answerSecondary: "",
      answerInner: "",
    },
  },
];


const faqList = document.querySelector(".faq_lis");

//After many hours of thinking, I decided to render a questionnaire from JS to avoid large HTML and make the code more readable
questionsArray.forEach( faq => {
  const faq_item = `<div class="faq_item">
  <div class="faq-question">
    <h4>${faq.question}</h4>

    <svg class="faq_arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path
        class="arrowDown"
        d="M8.14644661,10.1464466 C8.34170876,9.95118446 8.65829124,9.95118446 8.85355339,10.1464466 L12.4989857,13.7981758 L16.1502401,10.1464466 C16.3455022,9.95118446 16.6620847,9.95118446 16.8573469,10.1464466 C17.052609,10.3417088 17.052609,10.6582912 16.8573469,10.8535534 L12.4989857,15.2123894 L8.14644661,10.8535534 C7.95118446,10.6582912 7.95118446,10.3417088 8.14644661,10.1464466 Z"
        ></path>
      </svg>
    </div>

  <div class="faq-answer">
    <p class="faq-answer-description">
      ${faq.answer.answer}
    </p>

   ${
     faq.answer.answerInner
       ? `<div class="faq-answer-inner-list">${faq.answer.answerInner}</div>`
       : ""
   }

   ${
     faq.answer.answerSecondary
       ? `<p class="faq-answer-description">${faq.answer.answerSecondary}</p>`
       : ""
   }
  </div>
</div>`;

  faqList.innerHTML += faq_item;
});


const faqItems = document.querySelectorAll(".faq_item");
const faqArrows = document.querySelectorAll(".faq_arrow");

//FAQ open/close 
faqItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    faqItems.forEach((openedItem, openedIndex) => {
      if (openedItem !== item && openedItem.classList.contains("open")) {
        openedItem.classList.remove("open");
        openedItem.removeAttribute("style");

        faqArrows[openedIndex].classList.remove("expanded");
      }
    });

    item.classList.toggle("open");
    faqArrows[index].classList.toggle("expanded");

    if (item.classList.contains("open")) {
      item.style.height = `${item.scrollHeight}px`;
    } else {
      item.removeAttribute("style");
    }
  });
});
