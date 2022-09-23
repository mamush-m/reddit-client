import React, {useEffect} from 'react';
import './App.css';
import { HomePage } from './components/homePage/HomePage';
import { NavMenu } from './components/navMenu/NavMenu';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { getPosts, setHome, selectPosts, selectStatus } from '../src/features/posts/postsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingPage } from './components/loadingPage/LoadingPage';
import { FailedPage } from './components/failedPage/FailedPage';
import log from 'loglevel';

function App() {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus)

  // console.log(log)
  // log.warn('hold it right there')
  log.error('just hold on')
  log.trace('tracer')
  log.log('logger')

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
    {/* <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FGkiAMltFVIZN3dT8ULScIx%2FUntitled%3Fnode-id%3D1%253A9" allowfullscreen></iframe> */}
      <NavMenu/>
      {display}
    </div>
  );
}

export default App;
