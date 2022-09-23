import React, {useEffect} from 'react';
import './App.css';
import { HomePage } from './components/homePage/HomePage';
import { NavMenu } from './components/navMenu/NavMenu';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { getPosts, setHome, selectPosts, selectStatus } from '../src/features/posts/postsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingPage } from './components/loadingPage/LoadingPage';
import { FailedPage } from './components/failedPage/FailedPage';

function App() {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus)

  useEffect(() => {
    dispatch(setHome())
  }, []);

  let display;
  if(status === 'loading') {
    display = <LoadingPage/>
  }else if (status === 'success') {
    display = <HomePage/>
  }else if (status === 'rejected') {
    display = <FailedPage/>
  }


  return (
    <div className="App">
      <NavMenu/>
      {display}
    </div>

  );
}

export default App;
