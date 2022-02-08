import React from 'react';

export default function Header() {
  return (
      <div className="header">
        <div className="heading-title">
          <h1 className="title-cont">Home</h1>
        </div>
        <div className="header-content">
            <div className="headings">
              <div className="main-heading">Need a book?</div>
              <h3 className="call-to-action">Buy now</h3>
            </div>
            <a href="https://api.whatsapp.com/send?phone=636672687&text=I%20would%20like%20to%20inquire%20about%20a%20book%20I%20saw%20on%20the%20site.%20(Please%20type%20the%20book%20name)" className="request">
              <p className="request-message">Request a book</p>
              <i class="fab fa-whatsapp"></i>
            </a>
        </div>
      </div>
  )
}
