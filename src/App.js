import './App.css';
import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';
import { TodoListProvider } from './context/TodoListContext';
import { FilterProvider } from './context/FilterContext';

function App() {
  return (
    <FilterProvider>
      <Header />
      <TodoListProvider>
        <TodoList />
        <Footer />
      </TodoListProvider>
    </FilterProvider>
  );
}

export default App;
