import AccordionPage from './pages/AccordionPage';
import { MainLayout } from './layout/MainLayout';
import { Route, Routes } from 'react-router-dom';
import DropDownPage from './pages/DropDownPage';
import ButtonPage from './pages/ButtonPage';
import ModalPage from './pages/ModalPage';
import TablePage from './pages/TablePage';
import CounterPage from './pages/CounterPage';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/accordion' element={<AccordionPage />} />
        <Route path='/table' element={<TablePage />} />
        <Route path='/modal' element={<ModalPage />} />
        <Route path='/dropdown' element={<DropDownPage />} />
        <Route path='/buttons' element={<ButtonPage />} />
        <Route path='/counter' element={<CounterPage initialCount={5} />} />
      </Route>
    </Routes>
  );
}
