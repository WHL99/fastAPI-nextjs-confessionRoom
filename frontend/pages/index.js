import { Button, Col, Form, Row } from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider';
import { useState } from 'react';
import axios from 'axios'

export default function Home() {
  const [user, setUser] = useState({})
  const APIURL = 'http://localhost:8000'
  const handleSubmit = () => {
    axios.post(APIURL, user)
      .then(res => setUser(res))
      .catch(err => console.error('Error: ', err))
  }

  return (
    <div style={{
      background: 'rgb(8,17,3)',
      background: 'linear-gradient(321deg, rgba(8,17,3,0.9962359943977591) 0%, rgba(42,2,9,1) 24%, rgba(16,16,36,1) 47%, rgba(13,16,17,1) 62%, rgba(255,255,255,1) 100%)'
    }}>
      <div className="title">
        <h1 >CONFESSION ROOM</h1>
      </div>

      <Form className='col-lg-5 col-md-6 col-sm-8 col-10 m-auto' style={{ paddingTop: '4vh', height: '100vh' }}>
        <div style={{ backgroundColor: 'rgba(255,255,255,0.3)', padding: '20px', borderRadius: '5px' }}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Nickname</Form.Label>
              <Form.Control
                value={user.nickname}
                onChange={e => setUser({ ...user, nickname: e.target.value })}
                placeholder="the nickname is just for you who had the sin" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label className='pt-4'>Ｗhat do you want to confess？</Form.Label>
            < Form.Control
              value={user.sin}
              onChange={e => setUser({ ...user, sin: e.target.value })}
              as="textarea" rows={4}
              placeholder="I drank yesterday... I cheated on my girlfriend..." />
          </Form.Group>

          <Form.Label className='pt-4 pb-4'>How much pain do you feel for this?</Form.Label>
          <RangeSlider
            value={user.yourPain}
            onChange={e => setUser({ ...user, yourPain: e.target.value })}
            variant='danger'
            tooltip='auto'
            tooltipPlacement='top'
            size='md'
          />

          <Form.Label className='pt-5 pb-4'>How much pain do you think the other person/object will feel about this?</Form.Label>
          <RangeSlider
            value={user.objPain}
            onChange={e => setUser({ ...user, objPain: e.target.value })}
            variant='danger'
            tooltip='auto'
            tooltipPlacement='top'
          />

          <Form.Group className="pt-4 pb-4" id="formGridCheckbox">
            <Form.Check
              onChange={(e) => {
                if (e.target.checked) {
                  setUser({ ...user, ifKeepSecret: 'Keep the secret' });
                }
                if ((!e.target.checked)) {
                  setUser({ ...user, ifKeepSecret: 'Seems not a big deal' });
                }
              }}
              type="checkbox" label="Keep the secret" />
          </Form.Group>
          <Button onClick={() => handleSubmit()} variant="dark" type="submit" className='d-flex justify-content-center align-content-center m-auto mb-2'>
            SUBMIT
          </Button>
        </div>

      </Form>
    </div>
  )
}
