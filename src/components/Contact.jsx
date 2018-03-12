import React from 'react'
import styled from 'styled-components'
import Link from '../styled-components/Link'
import responsive from '../utils/responsive'
import data from '../data/contacts'

const ContactTitle = styled.span`
  font-family: 'Helvetica, Arial, sans-serif';
  font-weight: bold;
  font-size: ${responsive(24, 35, 320, 1280)};
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
  font-family: 'Helvetica, Arial, sans-serif';
  font-size: 20px;
  display: inline-block;
  padding: 0;
  margin: 0;
  font-weight: bold;
  line-height: 2;

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
  <div>
    <ContactTitle>Contact</ContactTitle>
    <ContactList>
      {contactItems}
    </ContactList> 
  </div>
)

export default Contact