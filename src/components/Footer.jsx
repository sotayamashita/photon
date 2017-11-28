'use strict';

const React = require('react');
const { getPage, getSiblingPages, getUrl, PREFIX } = require('./utilities.js');
const { connect } = require('react-redux');
const { Link } = require('react-router');

const Footer = connect(state => {
  var {path} = state.routing;
  var {pages} = state.data;
  var page = getPage(path, pages);
  var {previous_page, next_page} = getSiblingPages(page, pages);

  return {previous_page, next_page};
})(React.createClass({
  displayName: 'Footer',
  propTypes: {
    next_page: React.PropTypes.shape(),
    previous_page: React.PropTypes.shape()
  },

  render: function() {
    return(
      <footer className="fira">
        <div className="center mw7 ph3 pb3-l cf">
          <p className="fl w-50 tl mt0">
            <Link
                className="no-underline blue-60"
                to={getUrl(this.props.previous_page)}
            ><img alt="Arrow pointing left, to the previous page."
                className="dib pr2 v-mid"
                src={`${PREFIX}/images/global/back-16.svg`}
             />{this.props.previous_page.title}
            </Link>
          </p>
          <p className="fl w-50 tr mt0">
            <Link
                className="no-underline blue-60"
                to={getUrl(this.props.next_page)}
            >{this.props.next_page.title}
              <img alt="Arrow pointing right, to the next page."
                  className="dib pl2 v-mid"
                  src={`${PREFIX}/images/global/forward-16.svg`}
              />
            </Link>
          </p>
        </div>
      </footer>)
  }
}));

module.exports = Footer;
