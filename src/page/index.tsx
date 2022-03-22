import React, {memo} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../reducer";

const Index = memo(() => {
  const dispatch = useDispatch()
  const state = useSelector((state: RootState) => state.test)
  console.log(state)
  return (
    <div>123</div>
  )
})

export default Index;
