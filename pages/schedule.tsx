import type { NextPage } from 'next'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import React, { useEffect, useState } from 'react'

const Schedule: NextPage = () => {
  const [calendarUrl, setCalendarUrl] = useState<string>('')

  useEffect(() => {
    // Get user's timezone using Intl API
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    // Encode timezone for URL (replace / with %2F)
    const encodedTimeZone = encodeURIComponent(timeZone)
    
    setCalendarUrl(`https://calendar.zoho.com/eventreqForm/zz08011230911dd8aa00155d0609c809fe7c81bc79df33fe230d1f6a349c30137fa76d017394d6c39f6f82862002af3d9aa8144c51?theme=0&l=en&tz=${encodedTimeZone}`)
  }, [])

  return (
    <div className="m-0 text-center text-medium-brown font-body">
      <Header />
      <div className="flex justify-center items-center my-8 px-4">
        {calendarUrl && (
          <iframe 
            src={calendarUrl}
            title="Schedule Appointment"
            frameBorder="0"
            scrolling="no"
            marginWidth={0}
            marginHeight={0}
            height="600px"
            width="100%"
            style={{ maxWidth: '800px' }}
            allowTransparency={true}
            className="border-0"
          />
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Schedule 