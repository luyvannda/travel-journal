import PropTypes from 'prop-types';
import locationMark from "/location-mark-icon.png"

export default function Card(props) {

  return (
    <div id="card-component" className="container">

      <img id="card-image" className="col-8 col-md-3 rounded-2 mx-auto d-block" src={`${props.item.imgCover}`} alt="location image"></img>

      <div id="card-main" className="row mt-4 d-flex justify-content-center">
        <div id="location" className="col-8"  >
          <p className="mb-2">
            <img className="me-1" src={locationMark} alt="A small location mark icon"></img>
            {props.item.country} <span><a className="ms-2" href={`${props.item.googleMap}`} target='_blank' rel="noreferrer">View on Google Maps</a></span>
          </p>
        </div>

        <div id="title" className="col-8">
          <h1 className="fw-bold">{props.item.title}</h1>
        </div>

        <div id="date" className="col-8">
          <p className="fw-bold mb-2">{props.item.date}</p>
        </div>

        <div id="description" className="col-8">
          <p className="lh-base">{props.item.description}</p>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  item: PropTypes.string.isRequired,
}