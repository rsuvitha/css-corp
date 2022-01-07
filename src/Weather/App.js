import React, { Component } from 'react';
import SearchInput from './SearchInput';
import WeatherReport from './WeatherReport';

class App extends Component {
  state = { weatherData: null, searchtemp: null };

  searchlocations = async (searchInputValue, searchtemp) => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${searchInputValue}&units=imperial&appid=333458e05b25c5e69a7c22d64b7bc47f`,
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ weatherData: data });
      });
  };

  render() {
    return (
      <div className="p-4 mt-8 rounded w-2/4 m-auto bg-green-100">
        <h5 className="text-center pt-3 text-3xl">Weather Report</h5>
        <SearchInput onSearchSubmit={this.searchlocations} />
        {this.state.weatherData
          ? (
            <WeatherReport
              weatherData={this.state.weatherData}
              searchtemp={this.state.searchtemp}
            />
          ) : <div />}
      </div>
    );
  }
}

export default App;
