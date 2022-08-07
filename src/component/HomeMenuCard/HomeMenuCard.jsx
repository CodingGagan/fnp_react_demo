import React from 'react'
import Col from 'react-bootstrap/Col';
import './HomeMenuCard.css';

function HomeMenuCard({ menus }) {
  if (menus !== undefined && menus !== "") {
    return (
      menus.map((el, key) => (
        <>
          <Col className={"homemenu-main"} key={key} xs xm={4} xl={2}>
            <div className="menu-upper-icon">
              <img src="assets/icons/birthday-cake.png" alt="" />
            </div>
            <div className="menu-bottom-title">
              <small>{el.title}</small>
            </div>
          </Col>
        </>
      ))
    )
  } else {
    return (
      <h1>Dtrong:</h1>
    )
  }
}

export default HomeMenuCard