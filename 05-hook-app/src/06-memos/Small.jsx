import React from 'react'

export const Small = React.memo(({counter}) => {

    console.log('Me volvi a dibujar!')
  return (
    <small>{counter}</small>
  )
})

