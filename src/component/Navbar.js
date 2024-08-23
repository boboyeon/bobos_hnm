import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { useNavigate } from "react-router-dom";
import { Navbar as BootstrapNavbar, Nav, Container, Offcanvas } from "react-bootstrap";

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
    <BootstrapNavbar expand="lg" className="mb-3 custom-navbar">
      <Container fluid>
        <BootstrapNavbar.Brand onClick={() => navigate("/")}>
          <img
            width={100}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOSWOhkrtrLKgKz35SOCEsZV-v2q_yeKpMgw&s"
            alt="메인로고"
          />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="offcanvasNavbar" />
        <BootstrapNavbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">메뉴</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {menuList.map((menu, index) => (
                <Nav.Link key={index} onClick={() => navigate(`/${menu}`)}>
                  {menu}
                </Nav.Link>
              ))}
            </Nav>
            <div className="d-flex align-items-center mt-3">
              <div className="input_area w-100">
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
              </div>
            </div>
          </Offcanvas.Body>
        </BootstrapNavbar.Offcanvas>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
