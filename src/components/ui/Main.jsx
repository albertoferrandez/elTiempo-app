import React from 'react'

function Main({children}) {
  return (
      <main className="bg-white rounded-3xl overflow-hidden 
      w-10/12 md:w-11/12 h-3/4 grid md:grid-cols-12">
        {children}
      </main>
  )
}

export default Main