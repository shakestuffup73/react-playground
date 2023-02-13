// import { React, useState, useEffect } from 'react'
import styles from '../machine/Machine.module.css'

const Machine = ({ s1, s2, s3 }) => {

  // const [row, setRow] = useState([])

  const winner = (s1 === s2) && (s2 === s3)
  const fruits = ['🍒', '🍊', '🍋']
  s1 = fruits[Math.floor(Math.random() * fruits.length)]
  s2 = fruits[Math.floor(Math.random() * fruits.length)]
  s3 = fruits[Math.floor(Math.random() * fruits.length)]
  
  // const spin = {
    
  //   return {

  //   }
  //   setRow([s1, s2, s3])
  // }

  // useEffect(() => {
  // }, [setRow])

  return (
    <>
      <div className={styles.row}>
        <div>{s1}</div>
        <div>{s2}</div>
        <div>{s3}</div>
      </div>
        <p>{winner ? 'Winner!' : 'Loser!'}</p>
        <button>Spin</button>
    </>
  )
}

export default Machine