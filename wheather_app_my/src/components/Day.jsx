import React from 'react'

const Day = ({ day, temp }) => {
  return (
    <div className="text-center mb-0 flex items-center justify-center flex-col">
      <span className="block my-1">{day}</span>
      <img
        src="https://i.imgur.com/ffgW9JQ.png"
        className="block w-8 h-8"
        alt={day}
      />
      <span className="block my-1">{temp}&deg;</span>
    </div>
  )
}

export default Day
