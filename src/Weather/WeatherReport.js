import React, { Component } from 'react';

class WeatherReport extends Component {
  constructor(props) {
    super(props);
  }

  celcius = (kelvin) => {
    const celcius = Math.round(5 / 9 * (kelvin - 32));
    return celcius;
  };

  render() {
    return (
      <div className="border-black rounded border p-4 mt-6">
        <div className="flex mb-5">
          <div className="w-2/3">
            <h3 className="font-semibold text-2xl">{this.props.weatherData.name}</h3>
            <p className="capitalize text-s font-semibold text-gray-600">
              {this.props.weatherData.weather[0].description}
              {' '}
              | Feels like
              {' '}
              {this.celcius(this.props.weatherData.main.feels_like)}
              &deg;C
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/3 mb-1">
            <div className="text-center p-3 bg-pink-600 rounded">
              <p className="uppercase text-xs font-semibold text-white">Current Temperature</p>
              <h5 className="text-md font-semibold text-white">
                {this.celcius(this.props.weatherData.main.temp)}
                &deg;C
              </h5>
            </div>
          </div>
          <div className="w-1/3 mb-2 mx-1">
            <div className="text-center p-3 bg-red-600 rounded">
              <p className="uppercase text-xs font-semibold text-white">Maximum Temperature</p>
              <h5 className="text-md font-semibold text-white">
                {this.celcius(this.props.weatherData.main.temp_max)}
                &deg;C
              </h5>
            </div>
          </div>
          <div className="w-1/3 mb-2">
            <div className="text-center p-3 bg-pink-600 rounded">
              <p className="uppercase text-xs font-semibold text-white">Minimum Temperature</p>
              <h5 className="text-md font-semibold text-white">
                {this.celcius(this.props.weatherData.main.temp_min)}
                &deg;C
              </h5>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/3 mb-2 mr-1">
            <div className="text-center p-3 bg-purple-700 rounded">
              <p className="uppercase text-xs font-semibold text-white mb-3">Wind Speed</p>
              <h5 className="text-md font-semibold text-white">
                {this.props.weatherData.wind.speed}
                {' '}
                m/s
              </h5>
            </div>
          </div>
          <div className="w-2/3 mb-2">
            <div className="text-center p-3 bg-purple-700 rounded">
              <p className="uppercase text-xs font-semibold text-white mb-3">Wind Direction</p>
              <h5 className="text-md font-semibold text-white">
                {this.props.weatherData.wind.deg}
                &deg;
              </h5>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-2/3 mb-2 mr-1">
            <div className="text-center p-3 bg-blue-600 rounded">
              <p className="uppercase text-xs font-semibold text-white mb-3">Pressure</p>
              <h5 className="text-md font-semibold text-white">
                {this.celcius(this.props.weatherData.main.pressure)}
                {' '}
                psi
              </h5>
            </div>
          </div>
          <div className="w-1/3 mb-2">
            <div className="text-center p-3 bg-blue-600 rounded">
              <p className="uppercase text-xs font-semibold text-white mb-3">Humidity</p>
              <h5 className="text-md font-semibold text-white">
                {this.props.weatherData.main.humidity}
                {' '}
                %
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherReport;