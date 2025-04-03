import React from "react";
import "./ReviewSection.css"; 




const ReviewSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Diet Expert",
      position: "CFO",
      image: "img/client1.jpg",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A nesciunt est, consectetur accusantium vitae mollitia.",
    },
    {
      id: 2,
      name: "Cardio Trainer",
      position: "CEO",
      image: "/img/client2.jpg",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus quam dolorum nulla perspiciatis sequi quidem.",
    },
  ];

  return (
    <section className="review" id="review">
      <div className="review-container">
        <div className="review-info">
          <h1>REVIEW CLIENT</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
            deserunt non nisi sequi.
            <br />
            Hampden-Sydney College.
          </p>
        </div>

        <div className="review-cards">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="card-top">
                <img src={review.image} alt="Client" />
                <div className="client">
                  <h2>{review.name}</h2>
                  <p>{review.position}</p>
                </div>
              </div>
              <div className="card-bottom">
                <p>{review.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;