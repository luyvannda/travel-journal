import PropTypes from 'prop-types';
import locationMark from "/location-mark-icon.png"

export default function Card(props) {

  return (
    <div id="card-component" className="container">

      <div className="row justify-content-center align-items-center">
        <div className="col-9 col-md-4 col-lg-4 col-xl-3">
          <img id="card-image" className="col-12 col-md-12 rounded-2 mx-auto d-block" src={`${props.item.imgCover}`} alt="location image"></img>
        </div>

        <div className="col-9 col-md-8 col-lg-6 col-xl-5">
          <div id="card-main" className="row mt-4">
            <div id="location" >
              <p className="mb-2">
                <img className="me-1" src={locationMark} alt="A small location mark icon"></img>
                {props.item.country} <span><a className="ms-2" href={`${props.item.googleMap}`} target='_blank' rel="noreferrer">View on Google Maps</a></span>
              </p>
            </div>

            <div id="title" >
              <h1 className="fw-bold">{props.item.title}</h1>
            </div>

            <div id="date" >
              <p className="fw-bold mb-2">{props.item.date}</p>
            </div>

            <div id="description">
              <p className="lh-base">{props.item.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  item: PropTypes.object.isRequired,
}