import React from 'react'

import { Circles } from 'react-loader-spinner'
import { Spiner } from './Loader.styled'
const Loader = () => {
  return (
    <Spiner>Loader
    <Circles
  height="80"
  width="80"
  color="#3f51b5"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
</Spiner>
  )
}

export default Loader