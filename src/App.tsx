import { useState } from 'react'

function App() {

  const [value, setValue] = useState("")

  return (
    <div className='bg-slate-300 w-full min-h-screen flex items-center justify-center flex-col'>
      <div className='w-full max-w-lg text-center flex flex-col gap-16'>
        <h1 className='text-5xl font-bold'>Mi DUI es valido?</h1>
        <form className='flex flex-col gap-5 items-center'>
          <input
            placeholder='000000000'
            className='rounded p-2 w-full'
            value={value}
            onChange={(e) => { 
              setValue(e.target.value)
            }}
          />
          <button className='bg-blue-700 text-white w-auto py-2 px-3 rounded'>Validar</button>
        </form>
      </div>
    </div>
  )
}

export default App
