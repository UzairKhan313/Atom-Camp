import { useState, useEffect } from 'react'
import { MYAPIKEY } from './data'
import Day from './components/Day'

function App() {
  // const [position, setPosition] = useState({ latitude: null, longitude: null })
  const [weather, setWeather] = useState({})

  const [loading, setLoading] = useState(false)

  const fetchWheatherData = async (lat, lon) => {
    try {
      const URL = `api.openweathermap.org/data/2.5/forecast/daily?mode=json&units=metric&q=peshawar&cnt=7&appid=${MYAPIKEY}`
      // const URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${MYAPIKEY}`

      // const URL = `api.openweathermap.org/data/2.5/forecast/daily?&lat=${lat}&lon=${lon}&cnt=7&appid=${MYAPIKEY}`
      const response = await fetch(URL)
      const data = await response.json()
      setWeather(data.main)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setLoading(true)
    let lat, lon
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        // lat = position.coords.latitude
        // lon = position.coords.longitude
        fetchWheatherData(position.coords.latitude, position.coords.longitude)
      })

      setLoading(false)
    } else {
      setLoading(false)
      console.log('Geolocation is not available in your browser.')
    }
  }, [])

  return (
    <div className="mx-auto p-4 bg-purple-400 h-screen flex justify-center">
      <div className="flex flex-wrap">
        <div className="w-full   px-2">
          {loading && <h1>Loading...</h1>}
          {!loading && weather && (
            <div className="bg-gray-900 text-white relative min-w-0 break-words rounded-lg overflow-hidden shadow-sm mb-4 w-full  dark:bg-gray-600">
              <div className="px-6 py-6 relative">
                <div className="flex mb-4 justify-between items-center">
                  <div>
                    <h5 className="mb-0 font-medium text-xl">Peshawar,Pak</h5>
                    <h6 className="mb-0">April 04 2021</h6>
                    <small>Cloudy</small>
                  </div>
                  <div className="text-right">
                    <h3 className="font-bold text-4xl mb-0">
                      <span>39&deg;</span>
                    </h3>
                  </div>
                </div>
                <div className="block sm:flex justify-between items-center flex-wrap">
                  <div className="w-full sm:w-1/2">
                    <div className="flex mb-2 justify-between items-center">
                      <span>Temp</span>
                      <small className="px-2 inline-block">
                        {weather.temp}&nbsp;&deg;
                      </small>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2">
                    <div className="flex mb-2 justify-between items-center">
                      <span>Feels like</span>
                      <small className="px-2 inline-block">
                        {weather.feels_like}&nbsp;&deg;
                      </small>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2">
                    <div className="flex mb-2 justify-between items-center">
                      <span>Temp min</span>
                      <small className="px-2 inline-block">
                        {weather.temp_min}&nbsp;&deg;
                      </small>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2">
                    <div className="flex mb-2 justify-between items-center">
                      <span>Temp max</span>
                      <small className="px-2 inline-block">
                        {weather.temp_max}&nbsp;&deg;
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="divider table mx-2 text-center bg-transparent whitespace-nowrap">
                <span className="inline-block px-3">
                  <small>Forecast</small>
                </span>
              </div>
              <div className="px-6 py-6 relative">
                <div
                  className="text-center justify-between items-center flex"
                  // style="flex-flow: initial;"
                >
                  <Day day="Mon" temp={43.2} />
                  <Day day="Tue" temp={43.2} />
                  <Day day="Wed" temp={43.2} />
                  <Day day="Thur" temp={43.2} />
                  <Day day="Fri" temp={43.2} />
                  <Day day="Sat" temp={43.2} />
                  <Day day="Sun" temp={43.2} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
