var React = require('react');

var WeatherMessage = ({temp, location}) => (
    <div>
        <p>It's {temp} in {location}</p>
    </div>
);

module.exports = WeatherMessage;