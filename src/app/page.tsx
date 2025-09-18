import React from 'react'
import Home from './screens/Home/page'
import { MessageProvider } from './components/context/context'

function Main() {
  return (
    <MessageProvider>
      <div className="bg-white">
        <Home />
      </div>
    </MessageProvider>
  );
}

export default Main
