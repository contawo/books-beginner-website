import React from 'react';

export default function Main() {
  return (
    <div className="main-content">
        <h1 className="main-title">Available books</h1>
        <section className="book-items">
          <div className="picture-content">
            <div className="book-div accounting"></div>
            <div className="book-details">
              <p className="quality">Used</p>
              <p className="price">R750</p>
            </div>
          </div>
          <div className="picture-content">
            <div className="book-div business-law"></div>
            <div className="book-details"> 
              <p className="quality">Used</p>
              <p className="price">R750</p>
            </div>
          </div>
          <div className="picture-content">
            <div className="book-div business-manage"></div>
            <div className="book-details"> 
              <p className="quality">Used</p>
              <p className="price">R750</p>
            </div>
          </div>
          <div className="picture-content">
            <div className="book-div economics"></div>
            <div className="book-details"> 
              <p className="quality">Used</p>
              <p className="price">R750</p>
            </div>
          </div>
        </section>
    </div>
  );
}
