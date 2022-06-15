import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.scss";

const Movie = ({ id, title, summary, poster, year, slug }) => {
	return (
		<div className="movie">
			<img src={poster} alt={title} title={title} />
			<div className="movie__column">
				<h3 className="movie__title">{title}</h3>
				<h5 className="movie__year">{year}</h5>
				<p className="movie__summary">{summary}</p>
			</div>
		</div>
	)
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