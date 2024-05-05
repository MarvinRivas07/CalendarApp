import { Calendar} from 'react-big-calendar'
import { CalendarEvent, CalendarModal, NavBar } from '../'
import {addHours} from 'date-fns'
import {localizer, getMessagesEs} from '../../helpers'
import { useState } from 'react'



const events = [{
  title: 'Cumple del jefe',
  notes: 'Hay que comprar el pastel',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Marvin'
  }

}]

export const CalendarPage = () => {

  const [lastView, setlastView] = useState(localStorage.getItem('lastView') || 'week')

  const eventStyleGetter = (event, start, end, isSelected) => {
      //console.log({event, start, end, isSelected})


      const style = {
        backgroundColor: '#347CF7',
        borderRadius: '0px',
        opacity: 0.8,
        color: 'white'


      }

      return {
            style
      }
  }

  const onDoubleClick = (event) => {
      console.log({doubleClick: event})
  }

  const onSelected = (event) => {
    console.log({click: event})
  }

  const onViewChange = (event) => {
    localStorage.setItem('lastView', event)
    setlastView()
  }

  return (
   <>
      <NavBar/>
      <Calendar
      culture='es'
      localizer={localizer}
      events={events}
      defaultView={lastView}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 'calc(100vh - 80px)' }}
      messages={getMessagesEs()}
      eventPropGetter={eventStyleGetter}
      components={{
        event: CalendarEvent
      }}
      onDoubleClickEvent={onDoubleClick}
      onSelectEvent={onSelected}
      onView={onViewChange}
    />

    <CalendarModal/>

   </>
  )
}