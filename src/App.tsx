import React from 'react';

import Editor from '@monaco-editor/react';
import Select from 'react-select';

function App() {

  const languageOptions = [
    {value:'javascript', label:'javascript'},
    {value:'typescript', label:'typescript'},
    {value:'python', label:'python'}
  ]


  function handleEditorChange(value, e){
    console.log(value)
  }


  return (
    <>
    <nav className='flex items-center justify-between bg-slate-600 text-white py-10'>
      <h1>Editor</h1>
      <Select options={languageOptions}
        styles={{
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: '#234',
      marginRight: '20px',
      color: '#fff'
    }),
  }}
      
      />
      
    </nav>
      <Editor 

        height="90vh" 
        // defaultLanguage="javascript" 
        language='python'
        defaultValue="// some comment" 
        theme='vs-dark'
        loading="Hello"
        onChange={handleEditorChange} />
    </>
  )

}

export default App;
