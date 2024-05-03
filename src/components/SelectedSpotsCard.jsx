import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SelectedSpotsCard = ({ spot }) => {
  const {
    _id,
    image,
    tourists_spot_name,
    average_cost,
    totalVisitorsPerYear,
    travel_time,
    seasonality,
    country_Name,
  } = spot;

  return (
    <div className="card w-91 glass flex flex-col">
      <figure className="flex-grow max-h-[300px] overflow-hidden">
        <img
          src={image}
          alt={tourists_spot_name}
          className="w-full h-64 object-cover"
        />
      </figure>
      <div className="flex-grow flex flex-col justify-between p-4">
        <div>
          <h2 className="card-title">{tourists_spot_name}</h2>

          <p>Country(€): {country_Name}</p>
          <p>Average Cost(€): {average_cost}</p>
          <p>Total Visitors Per Year: {totalVisitorsPerYear}</p>
          <p>Travel Time(days): {travel_time}</p>
          <p>Seasonality: {seasonality}</p>
        </div>
        <div className="card-actions mt-auto">
          <Link to={`details/${_id}`}>
            <button className="btn btn-outline">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

SelectedSpotsCard.propTypes = {
  spot: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tourists_spot_name: PropTypes.string.isRequired,
    average_cost: PropTypes.string.isRequired,
    totalVisitorsPerYear: PropTypes.number.isRequired,
    travel_time: PropTypes.string.isRequired,
    seasonality: PropTypes.string.isRequired,
  }).isRequired,
  spots: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSpots: PropTypes.func.isRequired,
};

export default SelectedSpotsCard;
