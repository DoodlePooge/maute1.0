import { Button, Card, Grid } from '@mui/material'
import { FC } from 'react'
import { ContactInfo } from '../components/cards/ContactInfo'
import { WorkExperience } from '../components/cards/WorkExperience'

const contact = {
  email: 'paige@maute.us',
  phone: '(973) 476-2484',
  location: {text: 'East Stroudsburg, PA', link: 'https://www.google.com/maps/place/East+Stroudsburg,+PA+18301'},
  github: {text: 'github.com/DoodlePooge', link: 'https://github.com/DoodlePooge'},
  media: [],
}

const experience = [
  {
    title: "Junior Software Engineer",
    company: "Obscurity Labs LLC",
    timeline: "MAY 2022 - PRESENT",
    location: "Ashburn, VA",
    responsibilities: [
      "Managed interns for an open source project",
      "Developed UI features for a web application",
      "Implemented backend software tests",
      "Assisted in the development of the webapp api",
    ],
  },
  {
    title: "President",
    company: "Computer Science Organization",
    timeline: "MAY 2020 - MAY 2022",
    location: "ESU",
    responsibilities: [
      "Awarded certificate of recognition for maintaining an active club during a global pandemic",
      "Received Student Leader award",
      "Organized two successful charity live streams on Twitch, raising over $4000 for children’s hospitals",
      "Created opportunities for members with roles, projects, and workshops",
      "Prior positions were Social Media Manager and Treasurer",
    ],
  },
  {
    title: "Web Content Assistant",
    company: "Academic Computing and Web Services",
    timeline: "JAN 2020 - MAY 2022",
    location: "ESU",
    responsibilities: [
      "Created software for automated web testing in Javascript using the Selenium and mocha libraries",
      "Used PowerShell scripting and SQL to convert all images to .webp",
      "Refined accessibility and bug fixes for screen readers",
      "Sent reports to various departments on their content",
      "Researched and compared companies for digital signage",
      "Installed 33 info displays around campus",     
    ],
  },
]

export const Paige: FC = () => {
  return(
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <ContactInfo info={contact} />
      </Grid>
      <Grid item xs={12} md={8}>
        <WorkExperience information={experience} />
      </Grid>
    </Grid>
  )
}