import React from 'react'
import styled from 'styled-components'
import Link from '../styled-components/Link'
import responsive from '../utils/responsive'
import data from '../data/contacts'
import Fade from 'react-reveal/Fade'

const ContactTitle = styled.span`
  font-family: 'Helvetica';
  font-weight: bold;
  font-size: ${responsive(16, 35, 320, 1280)};
  margin-top: 100px;
`

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0 40px 0;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  font-family: 'Helvetica';
  font-size: ${responsive(16, 20, 320, 1280)};
  display: inline-block;
  padding: 0;
  margin: 0;
  font-weight: bold;
  line-height: 1.5;

  &:after {
    content: '/';
    padding: 0 10px;
  }

  &:last-child {
    &:after {
      content: ''
  }
`

const contactItems = data.map(item => (
  <ListItem key={item.name}>
    <Link href={item.url} target="_blank" rel="noopener noreferrer">{item.name}</Link>
  </ListItem>
))

const Contact = (props) => (
  <Fade bottom>
    <ContactTitle>Contact</ContactTitle>
    <ContactList>
      {contactItems}
    </ContactList> 
  </Fade>
)

export default Contact