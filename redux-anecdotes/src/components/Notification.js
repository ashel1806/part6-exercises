import React from "react"
import { useSelector } from "react-redux"

const Notificaction = () => {
  const notification = useSelector(state => state.notification)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  return (
    <div style={notification.message === '' ? null : style}>
      {notification.message}
    </div>
  )
}

export default Notificaction
