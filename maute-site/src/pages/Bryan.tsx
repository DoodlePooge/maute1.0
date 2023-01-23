import { Avatar, Grid, Slide } from '@mui/material'
import { FC } from 'react'
import { ContactInfo } from '../components/cards/ContactInfo'
import { Education } from '../components/cards/Education'
import { Projects } from '../components/cards/Projects'
import { Skills } from '../components/cards/Skills'
import { WorkExperience } from '../components/cards/WorkExperience'

const contact = {
  email: 'bryan@maute.us',
  phone: '(973) 787-4008',
  location: {text: 'East Stroudsburg, PA', link: 'https://www.google.com/maps/place/East+Stroudsburg,+PA+18301'},
  media: [],
}

const experience = [
  {
    title: "Intern",
    company: "The Pocono Chamber of Commerce",
    timeline: "MAY 2022 - AUG 2022",
    location: "Stroudsburg, PA",
    responsibilities: [
      "Produced video, photo, and graphic content to The Pocono Chamber’s social media pages",
      "Attend Pocono Chamber events taking pictures and videos",
      "Created spreadsheet containing venue information for future events",
      "Interviewed business owners about their experience as a member of The Pocono Chamber",
      
    ],
  },
  {
    title: "Studio Crew",
    company: "East Stroudsburg University Media Production Club",
    timeline: "SEPT 2022 - MAY 2022",
    location: "Stroudsburg, PA",
    responsibilities: [
      "Assisted ESU's McGarry Communications Center studio",
      "Operated cameras to make sure they are in focus and in position to the director's liking",
      "Assist in designing sets in the studio to create the setting of a scene",
      "Directed, produced, and written class projects utilizing the studio tools",
      "Played acting roles in multiple productions",
    ],
  },
  {
    title: "Sales Associate",
    company: "Escape The Mystery Room",
    timeline: "AUG 2018 - NOV 2018",
    location: "Rockaway Township, NJ",
    responsibilities: [
      "Maintained a positive experience by booking customer reservations",
      "Set up and cleaned rooms for customer reservations",
      "Provided instructions to customers",
      "Responded to customer inquiries",
      "Managed parties",
      "Trained new employees",
    ],
  },
]

const education = [
{
  degree: "Digital Media Technologies (B.S.)",
  concentration: "Interactive and Social Media",
  school: "East Stroudsburg University",
  timeline: "MAY 2022",
  location: "East Stroudsburg, PA",
  gpa: "3.5"
},
{
  degree: "Digital Media Technology (AAS)",
  school: "County College of Morris",
  timeline: "MAY 2020",
  location: "Randolph, NJ",
  gpa: "3.5"
},
]

const skills = [
  {
    group: "Office Tools",
    items: [
      "Adobe Photoshop",
      "Adobe Premiere",
      "Final Cut Pro",
      "Open Broadcasting Software",
    ],
  },
  {
    group: "Social Media",
    items: [
      "Twitter",
      "Instagram",
      "Youtube",
    ],
  },
  {
    group: "Web Design",
    items: [
      "HTML5",
      "CSS3",
      "Adobe Dreamweaver",
    ],
  },
]

export const Bryan: FC = () => {
  return(
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Slide direction='up' in timeout={1000}>
          <Avatar
          src="/static/images/bryan.png"
          sx={{  m: 2, width: 300, height: 300 }}
          />
        </Slide>
        <ContactInfo info={contact} />
        <Education information={education} />
        <Skills information={skills} />
      </Grid>
      <Grid item xs={12} md={8}>
        <WorkExperience information={experience} />
      </Grid>
    </Grid>
  )
}