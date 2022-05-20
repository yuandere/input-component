import ErrorBoundary from './components/ErrorBoundary';
import './App.css';
import Input from './components/Input';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
      <h1 className="title">Inputs</h1>
      <div className='row'>
        <Input demo='<Input />'></Input>
        <Input demo='&amp;:hover' name='one' demolite hover></Input>
        <Input demo='&amp;:focus' name='one' demolite focus></Input>
      </div>
      <div className='row'>
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
      </ErrorBoundary>
    </div>
  );
}

export default App;
