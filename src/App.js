import React from 'react';
import './App.scss';
import Workouts from './workoutLinks';
const { format } = require('date-fns')

const WEEKDAY = {
  SUNDAY: 0,
  MONDAY: 1,
  TUESDAY: 2,
  WEDNESDAY: 3,
  THURSDAY: 4,
  FRIDAY: 5,
  SATURDAY: 6
}

const workoutTypePerDay = [
  'full_body',
  'legs',
  'full_body',
  'abs',
  'dance',
  'full_body',
  'yoga'
]

const randomPickFromCategory = (day) => {
  const categoryType = Workouts[workoutTypePerDay[day]];
  return categoryType[randomPick(categoryType.length)];
}

const randomPick = (length) => {
  return Math.floor(Math.random() * length)
}

const randomWeekLinks = [
  randomPickFromCategory(0),
  randomPickFromCategory(1),
  randomPickFromCategory(2),
  randomPickFromCategory(3),
  randomPickFromCategory(4),
  randomPickFromCategory(5),
  randomPickFromCategory(6),
]

const App = () => {
  const today = format(new Date(), 'dddd');
  const workoutCategoryToday = workoutTypePerDay[new Date().getDay()]
  const { link, title } = randomWeekLinks[new Date().getDay()];
  return (
    <main className="app">
      <h1>{workoutCategoryToday} {today}</h1>
      <iframe
            key={link}
            src={link}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
            title={title}
      ></iframe>
    </main>
  );
}

const WeekOfVideos = () => {
  return (
    <section className='week-container--grid'>
      {
        Object.keys(WEEKDAY).map((day, idx) => {
          return <h1 className='weekday-title' key={day}>{day}</h1>
        })
      }
      {
        randomWeekLinks().map(workout => {
          const { link, title } = workout;
          return <iframe
            key={link}
            src={link}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
            title={title}
          ></iframe>
        })
      }
    </section>
  )
}

export default App;
