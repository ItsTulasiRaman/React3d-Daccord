import Spline from '@splinetool/react-spline';
import './App.css'
import Logo from './assets/images/logo.svg';
import IconTwitter from './assets/images/icon-twitter.svg';
import IconYoutube from './assets/images/icon-youtube.svg';
import IconLaptop from './assets/images/icon-laptop.svg';


export default function App() {
  return (
    <>
      <div className='scene'>
        <Spline className='spline' scene="https://prod.spline.design/ZCdk2wb2L5CXhVK7/scene.splinecode" />
        <div className="content">
          <ul className='menu'>
            <li><img src={Logo} alt="Logo" /></li>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>Download</a></li>
            <li><a href='/'>App</a></li>
            <li><a href='/'>Login</a></li>
            <li><button>Get Started</button></li>
          </ul>
          <h1>Collaborate with people</h1>
          <p>Bring your team together and build your community by using our cross-platform app that lets you collaborate via chat, voice and by sharing and storing unlimited media files. A world of topics is waiting for you. Join the private beta.</p>
          <button>
            <img src={IconLaptop} alt="Download" />
            Download for Mac
          </button>
        </div>
        <div className='social'>
          <div />
          <img src={IconTwitter} alt="Twitter"/>
          <img src={IconYoutube} alt="Youtube" />
        </div>
      </div>
    </>
  );
}
