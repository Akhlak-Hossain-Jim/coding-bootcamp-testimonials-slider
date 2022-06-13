import { useState } from "react";
import { AppContainer } from "./style";

function App() {
  const [isOpen, setIsOpen] = useState(0);

  const testimonials = [
    {
      name: "Tanya Sinclair",
      role: "UX Engineer",
      testimonial:
        " I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ",
      image: "/image-tanya.png",
    },
    {
      name: "John Tarkpor",
      role: "Junior Front-end Developer",
      testimonial:
        " If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ",
      image: "/image-john.png",
    },
  ];

  return (
    <AppContainer>
      <main>
        <div className="left">
          <q>{testimonials[isOpen].testimonial}</q>
          <div className="left_designation">
            <p className="left_designation_name">{testimonials[isOpen].name}</p>
            <p className="left_designation_role">{testimonials[isOpen].role}</p>
          </div>
          <img
            src="/pattern-quotes.svg"
            alt="quote illustration"
            className="left_illus"
          />
        </div>
        <div className="right">
          <img
            src={testimonials[isOpen].image}
            alt={testimonials[isOpen].name}
          />
          <div className="right_shift">
            <div
              className="right_shift__button"
              onClick={() =>
                isOpen === 0
                  ? setIsOpen(testimonials.length - 1)
                  : setIsOpen(isOpen - 1)
              }
            >
              <img
                src="/icon-prev.svg"
                alt="previous testimonial"
                className="right_shift__button_image_prev"
              />
            </div>
            <div
              className="right_shift__button"
              onClick={() =>
                isOpen === testimonials.length - 1
                  ? setIsOpen(0)
                  : setIsOpen(isOpen + 1)
              }
            >
              <img
                src="/icon-next.svg"
                alt="next testimonial"
                className="right_shift__button_image_next"
              />
            </div>
          </div>
        </div>
      </main>
    </AppContainer>
  );
}

export default App;
