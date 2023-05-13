import { useState } from 'react'
import type { FormEvent } from 'react'

import { Textfield, Textarea } from 'components/Input'

import { Container, ContactBox, Title, Button, ArtBox } from './styles'

export default function Footer() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const submitMessage = async (event: FormEvent) => {
    event.preventDefault()
    const data = {
      name,
      email,
      phone,
      message,
    }

    const response = await fetch('/api/create_message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  }

  return (
    <Container onSubmit={submitMessage}>
      <ContactBox>
        <Title>Leave me a message</Title>
        <Textfield
          label="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <Textfield
          label="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <Textfield
          label="Phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />

        <Textarea
          label="Message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />

        <Button type="submit">Send message</Button>
      </ContactBox>
      <ArtBox></ArtBox>
    </Container>
  )
}