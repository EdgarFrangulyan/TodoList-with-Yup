import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Todo from './Pages/Todo';
import { FC } from 'react';
import FormValidation from './Pages/FormValidation';

const App: FC = () => {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Todo />} />
          <Route path='/forms' element={<FormValidation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
