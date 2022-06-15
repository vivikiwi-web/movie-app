import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({ id, title, summary, poster, year, slug }) => {
	return <h4>{title}</h4>
}

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
	year: PropTypes.number.isRequired,
	slug: PropTypes.string.isRequired,
};

export default Movie;