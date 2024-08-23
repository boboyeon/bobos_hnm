import React, { useEffect, useState } from "react";
import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const getProductDetail = async () => {
    let url = `http://localhost:5000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("Fetched product:", data);
    console.log("Product Data:", product);

    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  const handleSelectSize = (size) => {
    setSelectedSize(size); // 사용자가 선택한 사이즈를 상태에 저장
    console.log("Selected size:", size);
  };

  return (
    <Container className="detail_container mt-4">
      {product ? (
        <Row>
          <Col className="product_img">
            <img src={product.img} alt="상품사진" />
          </Col>
          <Col>
            <div className="detail_container mt-2">
              {product?.new === true ? "신제품" : ""}
            </div>
            <div className="detail_container mt-2">{product.title}</div>
            <div className="detail_container mt-2">{product.price}원</div>
            <div className="detail_container mt-2">
              {product?.choice === true ? "Conscious choice" : ""}
            </div>
            <DropdownButton
              id="dropdown-basic-button"
              title={
                selectedSize ? `사이즈: ${selectedSize}` : "사이즈 선택"
              }
              onSelect={handleSelectSize}
              className="detail_container mt-4 custom-dropdown-button full-width-dropdown"
            >
              {product.size.map((size, index) => (
                <Dropdown.Item eventKey={size} key={index}>
                  {size}
                </Dropdown.Item>
              ))}
            </DropdownButton>
            <button className="plus_btn">
              추가
            </button>
          </Col>
        </Row>
      ) : (
        <div>Loading...</div>
      )}
    </Container>
  );
};

export default ProductDetail;
