import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { useNavigate } from "react-router-dom";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";

const Navbar = ({ isAuthenticated, setAuthenticate }) => {
  const menuList = [
    "여성",
    "Devided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];

  const navigate = useNavigate();

  const goToLogin = () => {
    if (isAuthenticated) {
      setAuthenticate(false); // 로그아웃: isAuthenticated를 false로 설정
    } else {
      navigate("/login");
    }
  };

  const goToHome = () => {
    navigate("/"); // 메인 화면으로 이동
  };

  const search = (event) => {
    console.log("key press");
    if (event.key === "Enter") {
      console.log("we click this key", event.key);
      // 입력한 검색어를 읽어와서
      let keyword = event.target.value;
      console.log("keyword", keyword);
      // URL을 바꿔준다
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <BootstrapNavbar bg="light" expand="lg" className="mb-3">
      <Container fluid>
        <BootstrapNavbar.Brand onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          <img
            width={100}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOSWOhkrtrLKgKz35SOCEsZV-v2q_yeKpMgw&s"
            alt="메인로고"
          />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="navbarScroll" />
        <BootstrapNavbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            {menuList.map((menu, index) => (
              <Nav.Link key={index} onClick={() => navigate(`/${menu}`)}>
                {menu}
              </Nav.Link>
            ))}
          </Nav>
          <div className="d-flex align-items-center">
            <div className="input_area">
              <FontAwesomeIcon className="icon_search" icon={faSearch} />
              <input
                type="text"
                onKeyPress={(event) => search(event)}
                placeholder="Search..."
              />
            </div>
            <div className="login_button ms-3" onClick={goToLogin}>
              <FontAwesomeIcon icon={faUser} />
              <div>{isAuthenticated ? "로그아웃" : "로그인"}</div> 
              {/* 로그인 상태에 따라 텍스트 변경 */}
            </div>
          </div>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
