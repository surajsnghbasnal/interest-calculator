import { Button, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'

const App = () => {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [num3, setNum3] = useState(0)
  const [Add, setAdd] = useState(0)

  const handleClick = () => {

  }



  return (
    <div className='app'>
      <div className="container">
        <div className="heading_text">
          <h1 className='heading_one'>Simple Calculator</h1>
          <p className="heading_two">Calculate your Simple Interest Easily</p>
        </div>

        <div className="total_amount_card">
          <div className="card_text">
            <h3 className="total_amount_heading">{Add}</h3>
            <p className="total_amount_para">Total Simple Interest</p>
          </div>
        </div>

        <form>
          <div className="input_area">
            <div className="input_field">
              <TextField type='Number' value={num1 || ""} onChange={(e) => setNum1(e.target.value)} id='outline-basic' label='$ Principal amount' />
            </div>

            <div className="input_field">
              <TextField type='Number' value={num2 || ""} onChange={(e) => setNum2(e.target.value)} id='outline-basic' label='Rate of Interest' />
            </div>

            <div className="input_field">
              <TextField type='Number' value={num3 || ""} onChange={(e) => setNum3(e.target.value)} id='outline-basic' label='Time Period' />
            </div>

            <div className="button_collection">
              <Stack spacing={2} direction="row">
                <Button type='submit' className='btn_one' style={{ background: 'black' }} variant='contained'>Calculate</Button>
                <Button className='btn_one' onClick={handleClick} variant='outlined'>Reset</Button>
              </Stack>
            </div>
          </div>

        </form>
      </div>
    </div>
  )
}

export default App
