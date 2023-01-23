import { Avatar, Grid, Slide } from '@mui/material'
import { FC } from 'react'
import { ContactInfo } from '../components/cards/ContactInfo'
import { Education } from '../components/cards/Education'
import { Projects } from '../components/cards/Projects'
import { Skills } from '../components/cards/Skills'
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

const education = [{
  degree: "Computer Science (B.S.)",
  minor: "Mathematics",
  school: "East Stroudsburg University",
  timeline: "MAY 2023",
  gpa: "3.0"
}]

const projects = [
  {
    title: "This Website :)",
    role: "Developer",
    timeline: "SEPT 2022 - PRESENT",
    responsibilities: [
      "Created react app with typescript and material ui",
    ],
  },
  {
    title: "github.com/obscuritylabs/darkmoon",
    role: "Project Co-Lead",
    timeline: "JULY 2022 - AUG 2022",
    responsibilities: [
      "Planned out the end goal, sprints, and tickets",
      "Guided the team of interns through the environment",
      "Ran daily meetings to keep us on the right track",
      "Completed the end goal and presented the work to the Commonwealth Cyber Initiative",
    ],
  },
  {
    title: "CSO Website (esucso.org)",
    role: "Team Leader and Developer",
    timeline: "JAN 2021 - MAY 2022",
    responsibilities: [
      "Create and develop content for the site",
      "Distribute work to other members",
      "Created documentation for the setup and tips",
      "Utilize GitHub to manage issues and bugs",      
    ],
  },
]

const skills = [
  {
    group: "Programming Languages",
    items: [
      "Javascript",
      "Typescript",
      "Python",
      "Powershell Scripting",
      "SQL",
    ]
  },
  {
    group: "Frameworks",
    items: [
      "Django",
      "FastAPI",
      "React",
    ]
  },
]

export const Paige: FC = () => {
  return(
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Slide direction='up' in timeout={1000}>
          <Avatar
          src="/static/images/paige.jpeg"
          sx={{  m: 2, width: 300, height: 300 }}
          />
        </Slide>
        <ContactInfo info={contact} />
        <Education information={education} />
        <Skills information={skills} />
      </Grid>
      <Grid item xs={12} md={8}>
        <WorkExperience information={experience} />
        <Projects information={projects} />
      </Grid>
    </Grid>
  )
}