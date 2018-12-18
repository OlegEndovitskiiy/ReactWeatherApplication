var React = require('react');
var Nav = require('Nav');

var Main = ({children}) => (
    <div>
        <Nav />
        <div className="row">
            <div className="columns small-centered">
                { children }
            </div>
        </div>
    </div>)

module.exports = Main;