import './App.css';
import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';
import { TodoListProvider } from './context/TodoListContext';
import { TabProvider } from './context/TabContext';
import { DarkModeProvider } from './context/DarkModeContext';

/**
 * 입력창에 할일을 입력하고 submit하면 리스트에 할일이 추가된다
 * delete 버튼을 누르면 할일이 삭제된다
 * 체크박스를 클릭하면 완료 표시된다
 * 탭메뉴를 누르면 할일 리스트가 filtering 된다
 * darkMode 버튼을 누르면 테마가 전환된다
 *
 * 값이 localStorage에 저장된다
 * edit 버튼을 누르면 할일을 수정 할 수 있다
 */

function App() {
  return (
    <div className="bg-beige w-full h-lvh overflow-hidden flex justify-center items-center">
      <div className="rounded-lg overflow-hidden w-96 flex flex-col">
        <DarkModeProvider>
          <TabProvider>
            <Header />
            <TodoListProvider>
              <TodoList />
              <Footer />
            </TodoListProvider>
          </TabProvider>
        </DarkModeProvider>
      </div>
    </div>
  );
}

export default App;
