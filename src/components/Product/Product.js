import React from "react";

const Product = (props) => {
  const { name, images, description } = props.product;
  return (
    <div >
      <div className="card w-96 glass">
        <figure>
          <img
            src={images[0]}
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name?.slice(0, 32)}</h2>
          <p>{description[0]?.slice(0, 20)}{description[0]?.length> 32 ? "...":""}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
