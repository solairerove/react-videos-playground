import PropTypes from 'prop-types';
import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    const { term } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(term);
  };

  render() {
    const { term } = this.state;
    return (
      <div className="ui segment search-bar">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="search-field">
              Video Search
              <input id="search-field" type="text" value={term} onChange={this.onInputChange} />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
