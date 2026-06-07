import { useState, useCallback, useEffect, useRef} from 'react';
import './App.css';

function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [passowrd, setPassword] = useState("")
  const [copiedPasswords, setCopiedPasswords] = useState([])


// useRef hook
const passwordRef = useRef(null)

  const passowrdGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) 
      str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+={}[]~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {
  const savedPasswords = JSON.parse(localStorage.getItem("copiedPasswords"))
  if (savedPasswords) {
    setCopiedPasswords(savedPasswords)
  }
}, [])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(passowrd)

     // Save copied password
  const updatedPasswords = [...copiedPasswords, passowrd]

  setCopiedPasswords(updatedPasswords)

  // Save to localStorage
  localStorage.setItem(
    "copiedPasswords",
    JSON.stringify(updatedPasswords)
  )
  }, [passowrd, copiedPasswords])
  
  const copySavedPassword = useCallback((pwd) => {
  window.navigator.clipboard.writeText(pwd)
}, [])

  useEffect(() => {
    passowrdGenerator()
  }, [length, numberAllowed, charAllowed, passowrdGenerator])
  return (
   <>
   <div className='w-full max-w-lg mx-auto shadow-md
    rounded-lg px-6 py-5 my-14 bg-gray-800 text-orange-500 text-center'> 
    <h1 className='text-white text-center my-3 text-xl'>Password Generator
    </h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input
      type="text"
      value={passowrd}
      className='outline-none w-full py-1 px-3'
      placeholder='Password'
      readOnly
      ref={passwordRef}
      />
      <button 
      onClick={copyPasswordToClipboard}
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
      copy
      </button>

    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e) => {setLength(e.target.value)}} />
        <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input
        type='checkbox'
        defaultChecked={numberAllowed}
        id='numberInput'
        onChange={() => {
          setNumberAllowed((prev) => !prev)
        }}
        />
        <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input
        type="checkbox"
        defaultChecked={charAllowed}
        id="characterInput"
        onChange={() => {
          setCharAllowed((prev) => !prev);
        }}
        />
        <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
   </div>
   <br></br>
   <br></br>
   <br></br>
   <div className="px-20 text-center">
  <h2 className="text-white mb-2">Copied Passwords:</h2>
<ul className="text-md text-gray-300 max-h-60 overflow-y-auto">
  {copiedPasswords.map((pwd, index) => (
    <li
      key={index}
      className="flex justify-between items-center border-b border-gray-600 py-2 gap-2"
    >
      <span className="break-all">{pwd}</span>

      <button
        onClick={() => copySavedPassword(pwd)}
        className="bg-green-600 text-white px-2 py-1 rounded text-xs"
      >
        Copy
      </button>
    </li>
  ))}
</ul>
</div>
   </>
  );
}

export default App;
