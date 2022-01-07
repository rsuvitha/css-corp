import React, { Component } from 'react';

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = { searchInputValue: '', searchtemp: '' };
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.searchInputValue, this.state.searchtemp);
  };

  render() {
    return (

      <form className="search-loaction" onSubmit={this.onFormSubmit}>
        <div className="mt-2 flex">
          <div className="w-2/4">
            <div className="border-gray-100 rounded border bg-gray p-2">
              <p className="uppercase font-semibold">Location</p>
              <input
                type="text"
                name="city"
                placeholder="City"
                onChange={(event) => this.setState({ searchInputValue: event.target.value })}
                className="text-s mt-3 p-2 border border-black focus-within:border-0 w-full"
              />
            </div>
          </div>
        </div>
      </form>
    );
  }
}
