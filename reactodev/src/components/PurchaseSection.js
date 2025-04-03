import React from "react";
import "./PurchaseSection.css"; 

const PurchaseSection = () => {
  const products = [
    {
      id: 1,
      name: "Kettebell / 5kg",
      originalPrice: "89,99$",
      discountPrice: "59,99$",
      image: "img/purchase1.jpg",
    },
    {
      id: 2,
      name: "Treadmill",
      originalPrice: "899,99$",
      discountPrice: "599,99$",
      image: "img/purchase2.jpg",
    },
    {
      id: 3,
      name: "Adjustable Dumbbell",
      originalPrice: "89,99$",
      discountPrice: "59,99$",
      image: "img/purchase3.jpg",
    },
    {
      id: 4,
      name: "Kettlebell",
      originalPrice: "89,99$",
      discountPrice: "59,99$",
      image: "img/purchase4.jpg",
    },
  ];

  return (
    <div className="purchase">
      <div className="container">
        <h1 className="purchase-title">Purchase From Us</h1>
        <div className="yellow-line"></div>
        <p className="text-purchase">
          Lorem ipsum is not simply random text. It has roots in a piece of
          classical at <br /> Hampden-Sydney College.
        </p>

        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-3">
              <div className="prod-box">
                <img src={product.image} alt={product.name} />
                <div className="prod-info">
                  <h2>{product.name}</h2>
                  <h5>
                    <span style={{ textDecoration: "line-through" }}>
                      {product.originalPrice}
                    </span>{" "}
                    / {product.discountPrice}
                  </h5>
                  <button className="btn btn-primary">Add To Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PurchaseSection;