import React from 'react'
import { Navbar } from '../Tabs/Navbar/Navbar'
import { Home } from '../Tabs/Home/Home'
import { About } from '../Tabs/About/About'
import { Projects } from '../Tabs/Projects/Projects'
import { Feedback } from '../Tabs/Feedback/Feedback'
import { Contact } from '../Tabs/Contact/Contact'

export const Portfolio = () => {
  return (
    <div>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Feedback />
        <Contact />
    </div>
  )
}
