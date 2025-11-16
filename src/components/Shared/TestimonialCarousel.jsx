import React, { useState, useEffect } from "react";
import "./TestimonialCarousel.css";
import user1 from "../../assets/teach.png";

const testimonials = [
  { name: "Nayan Deshmukh", img: user1, review: "It’s been an absolutely wonderful experience thus far! Practicing new exercises and incorporating new workouts into my daily routine is truly delightful. The rejuvenating yoga asanas are sensational and bring so much joy and energy into my life." },
  { name: "Rishabh Jain", img: user1, review: "I had a wonderful experience at Abhyaas Yoga Studio. The instructor is extremely polite, calm, and truly attentive. She patiently understood both my physical concerns and mental state, and then created a customized practice for me. On my first day, she guided me through basic asanas, pranayama, meditation, and even positive affirmations, something very rare yet deeply uplifting.My favorite sessions were the ones that began with a prayer and ended with a beautifully guided Shavasana, which felt truly transformative. What impressed me the most is how she adapts the flow each day according to how my body feels, whether it’s tightness in the thighs or stiffness in the shoulders—she ensures the asanas address it. Her instructions are clear, soothing, and filled with positivity. Overall, it’s not just yoga practice here, but a holistic mind-body experience. Highly recommended! " },
  { name: "Anushka Jain", img: user1, review: "Hello! I absolutely loved the Yoga Classes at Abhyaas. The instructor is very sweet, patient and helpful. She gives personal attention to each and every person in the class and corrects their posture too. The classes are peaceful and help me physically and mentally. Loved it!" },
  { name: "Chirag Jain", img: user1, review: "This studio has a peaceful and calming atmosphere, making it a wonderful place to practice yoga.The instructors are knowledgeable and supportive, and the classes are well-structured and challenging." },
  { name: "Dviti Panchal", img: user1, review: "Best place to learn yoga… don’t think twice, just go for it… best experience ever 🥰" },
  { name: "Meena Jain", img: user1, review: "I had realtime changes in myself here, Asmi guides really well, the diet and lifestyle tips are easy to follow and give actionable results." },
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // BUTTON HANDLERS
  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="testimonial-wrapper">
      <h2 className="testimonial-heading">What Our Students Say</h2>

      <div className="carousel-container">
        <button className="nav-button left" onClick={prev}>
          ❮
        </button>

        <div className="carousel-track">
          <div
            className="carousel-inner"
            style={{
              transform: `translateX(-${index * 60}%)`,
            }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <img src={t.img} alt={t.name} className="testimonial-img" />
                <h3 className="testimonial-name">{t.name}</h3>
                <p className="testimonial-review">“{t.review}”</p>
              </div>
            ))}
          </div>
        </div>

        <button className="nav-button right" onClick={next}>
          ❯
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
