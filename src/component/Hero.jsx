import React from 'react'

function Hero() {
  return (
    <ul className="slides">
  <input type="radio" name="radio-btn" id="img-1" defaultChecked="" />
  <li className="slide-container">
    <div className="slide">
      <img src="https://cdn.freshtohome.com/media/banner/dae8e3af50a9e797.gif" />
    </div>
    <div className="nav">
      <label htmlFor="img-6" className="prev">
        
      </label>
      <label htmlFor="img-2" className="next">
        
      </label>
    </div>
  </li>
  <input type="radio" name="radio-btn" id="img-2" />
  <li className="slide-container">
    <div className="slide">
      <img src="https://cdn.freshtohome.com/media/banner/ea3907d05668e752.jpg" />
    </div>
    <div className="nav">
      <label htmlFor="img-1" className="prev">
        
      </label>
      <label htmlFor="img-3" className="next">
        
      </label>
    </div>
  </li>
  <input type="radio" name="radio-btn" id="img-3" />
  <li className="slide-container">
    <div className="slide">
      <img src="https://cdn.freshtohome.com/media/banner/f325a2b5c2e80ac7.jpg" />
    </div>
    <div className="nav">
      <label htmlFor="img-2" className="prev">
        
      </label>
      <label htmlFor="img-4" className="next">
        
      </label>
    </div>
  </li>
  <input type="radio" name="radio-btn" id="img-4" />
  <li className="slide-container">
    <div className="slide">
      <img src="https://cdn.freshtohome.com/media/banner/31eed11ad6a2e870.jpg" />
    </div>
    <div className="nav">
      <label htmlFor="img-3" className="prev">
        
      </label>
      <label htmlFor="img-5" className="next">
        
      </label>
    </div>
  </li>
  <input type="radio" name="radio-btn" id="img-5" />
  <li className="slide-container">
    <div className="slide">
      <img src="https://cdn.freshtohome.com/media/banner/f5012ea13c7499c5.jpg" />
    </div>
    <div className="nav">
      <label htmlFor="img-4" className="prev">
        
      </label>
      <label htmlFor="img-6" className="next">
        
      </label>
    </div>
  </li>
  <input type="radio" name="radio-btn" id="img-6" />
  <li className="slide-container">
    <div className="slide">
      <img src="https://cdn.freshtohome.com/media/banner/ad9ac7dbbd96e9bc.jpg" />
    </div>
    <div className="nav">
      <label htmlFor="img-5" className="prev">
        
      </label>
      <label htmlFor="img-1" className="next">
        
      </label>
    </div>
  </li>
  <li className="nav-dots">
    <label htmlFor="img-1" className="nav-dot" id="img-dot-1" />
    <label htmlFor="img-2" className="nav-dot" id="img-dot-2" />
    <label htmlFor="img-3" className="nav-dot" id="img-dot-3" />
    <label htmlFor="img-4" className="nav-dot" id="img-dot-4" />
    <label htmlFor="img-5" className="nav-dot" id="img-dot-5" />
    <label htmlFor="img-6" className="nav-dot" id="img-dot-6" />
  </li>
</ul>

  )
}

export default Hero