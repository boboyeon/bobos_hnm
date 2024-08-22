import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div className="product_card">
      <img src={item?.img} alt="상품사진" />
      <div>
        {item?.choice === true ? "Conscious choice" : ""}
      </div>
      <div>{item?.title}</div>
      <div>{item?.price}원</div>
      <div>{item?.new === true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
