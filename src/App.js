import React, { useState } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';
import Input from './components/Input';
import Example from './components/Example';

function App() {
  const [inputField, setInputField] = useState('Try typing in box #1!');

  const onInputChange = (event) => {
    setInputField(event.target.value);
  };

  return (
    <div className="App">
      <ErrorBoundary>
      <div className='row inputbar'>
        <h1 className="title marr4">Inputs</h1>
        <Example inputField={inputField} />
      </div>
      <div className='row three'>
        <Input inputChange={onInputChange} demo='<Input />'></Input>
        <Input demo='&amp;:hover' name='one' demolite hover></Input>
        <Input demo='&amp;:focus' name='one' demolite focus></Input>
      </div>
      <div className='row three'>
        <Input demo='<Input error />' error></Input>
        <Input demo='&amp;:hover' name='two' error demolite hover></Input>
        <Input demo='&amp;:focus' name='two' error demolite focus></Input>
      </div>
      <div className='row'>
        <Input demo='<Input disabled />' disabled></Input>
      </div>
      <div className='row'>
        <Input demo='<Input helperText="Some helpful text" />' helperText='Some helpful text'></Input>
        <Input demo='<Input helperText="Something went wrong" error />' helperText='Something went wrong' error></Input>
      </div>
      <div className='row'>
        <Input demo='<Input startIcon="phone" />' startIcon='phone'></Input>
        <Input demo='<Input endIcon="lock" error />' endIcon='lock'></Input>
      </div>
      <div className='row'>
        <Input demo='<Input value="Text" />' value='Text'></Input>
      </div>
      <div className='row'>
        <Input demo='<Input size="sm" />' size='sm'></Input>
        <Input demo='<Input size="md" />' size='md'></Input>
      </div>
      <div className='row'>
        <Input demo='<Input fullWidth />' fullWidth></Input>
      </div>
      <div className='row'>
        <Input demo='<Input multiline row="4"/>' multiline row="4"></Input>
      </div>
      </ErrorBoundary>
    </div>
  );
}

export default App;
