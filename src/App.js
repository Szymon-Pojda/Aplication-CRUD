import { Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import NotFoundPage from "./components/pages/NotFoundPage";
import PostAdd from "./components/pages/PostAdd";
import PostEdit from "./components/pages/PostEdit";
import PostPage from "./components/pages/PostPage";
import PostsPage from "./components/pages/PostsPage"

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={< PostsPage />} />
        <Route path='/post/:id' element={< PostPage />} />
        <Route path='/post/add' element={< PostAdd />} />
        <Route path='/post/edit/:id' element={< PostEdit />} />
        <Route path='/about' element={< About />} />
        <Route path='*' element={< NotFoundPage />} />
      </Routes>


    </div>
  );
};

export default App;
