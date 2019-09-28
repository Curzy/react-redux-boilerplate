import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchIp } from './actionCreator';

export const MyIp = () => {
  const dispatch = useDispatch()
  const { myIp } = useSelector(state => state.ip)
  return (
    <>
      <h1>My Ip is</h1>
      <h2 style={{color: 'red'}}>
        {myIp || 'NULL'}
      </h2>
      <button onClick={() => {dispatch(fetchIp())}}>Fetch my IP</button>
    </>
  )
}