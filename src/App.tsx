import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Todo from './Pages/Todo';
import { FC } from 'react';

const App: FC = () => {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
