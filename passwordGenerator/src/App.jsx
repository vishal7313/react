import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [isNumber, setisNumber] = useState(false)
  const [isSpecialCharacter, setisSpecialCharacter] = useState(false)
  const [password, setPassword] = useState('')

  // useRef hook
  const passwordRef = useRef(null);

  // useCallBack is a hook
  // this is reposible to memorize, optimize and put in cache
  const generatePassword = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (isNumber) {
      str += '0123456789';
    }

    if (isSpecialCharacter) {
      str += '!@#$%^&*()_+~`|:;?><,./-=[]{}\\|';
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, isNumber, isSpecialCharacter, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, password.length);
    window.navigator.clipboard.writeText(password);
  }, [password])

  // useEffect is a hook
  // when page loads for first time, then it is called.
  // if anything changes in dependencies [length, isNumber, isSpecialCharacter, generatePassword
  // then it will automatically gets run
  useEffect(() => {
    generatePassword();
  }, [length, isNumber, isSpecialCharacter, generatePassword]) //here we give if there is any changes in these variable, the run generatePassword...

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-10 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center py-3'> Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type='text'
          value={password}
          className='outline-none w-full py-1 px-3 rounded-lg'
          placeholder='Password'
          readOnly
          ref={passwordRef} //this is the refrence to the input (use in copyPasswordToClipboard)
        />

        <button
        onClick={copyPasswordToClipboard}
          className='outline-none bg-orange-500 hover:bg-blue-600 text-white px-3 py-0.5 shrink-0'
        >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type='range'
            min={6}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={isNumber}
            onChange={() => setisNumber(!isNumber)}
            id='numberInput'
          />
          <label>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={isSpecialCharacter}
            onChange={() => setisSpecialCharacter(!isSpecialCharacter)}
            id='characterInput'
          />
          <label>Special Character</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
