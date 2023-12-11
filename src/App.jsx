

import './App.css'
// import Pin from './Components/Pin'
import image from '/public/images/header_bg.png'


function App() {

  return (
   <div>
    <div className='container'>
      {/* <Pin pinSize = {'small'}></Pin>
      <Pin pinSize = {'large'}></Pin>
      <Pin pinSize = {'medium'}></Pin>
      <Pin pinSize = {'small'}></Pin>
      <Pin pinSize = {'large'}></Pin>
      <Pin pinSize = {'medium'}></Pin>
      <Pin pinSize = {'small'}></Pin>
      <Pin pinSize = {'large'}></Pin>
      <Pin pinSize = {'medium'}></Pin> */}

      <img className='hover' src={image} alt="" />
      <div className="content">
                <h1>hello</h1>

            </div>

    </div>
   </div>
  )
}

export default App
