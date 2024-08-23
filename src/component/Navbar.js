import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
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
    navigate("/login");
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
    <div>
      <div>
        <div className="login_button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
      </div>

      <div className="nav_section">
        <img
          width={100}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOSWOhkrtrLKgKz35SOCEsZV-v2q_yeKpMgw&s"
          alt="메인로고"
        />
      </div>

      <div className="menu_section">
        <div className="menu_area">
          <ul className="menu_list">
            {menuList.map((menu, index) => (
              <li key={index}>{menu}</li>
            ))}
          </ul>
          <div className="input_area">
            <FontAwesomeIcon className="icon_search" icon={faSearch} />
            <input
              type="text"
              onKeyPress={(event) => search(event)}
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
