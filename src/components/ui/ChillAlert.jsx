import PropTypes from 'prop-types';

const ChillAlert = ({ kaijuDescription }) => {
  return (
    <div
      className="flex flex-col items-center p-4 mx-5 mb-5 text-blue-400 border-blue-400 border-8 rounded-lg bg-white bg-opacity-100"
      role="alert"
    >
      <div className="flex items-center animate-fade">
        <svg
          className="flex-shrink-0 inline w-4 h-4 me-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <h2 className="text-4xl font-creepster">
          No Monsters Nearby! Its a {kaijuDescription.name}!
        </h2>
      </div>
      <div>
        <h3 className="text-xl md:text-2xl text-center">{kaijuDescription.description}</h3>
      </div>
    </div>
  );
};

ChillAlert.propTypes = {
  kaijuDescription: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChillAlert;