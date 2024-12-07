import './App.css'

const App = () => {
  return (
    <div className='layout-container'>
      <div className='main-container'>
        <header className='header'>Header</header>
        <div className='main-content'>
          <div className='left-column'>
            <div className='hero'>Hero</div>
            <div className='sidebar'>Sidebar</div>
          </div>
          <div className='content'>
            <div className='main'>
              <p>Main Content</p>
              <p className="small-text">**If things don't look right, make sure your browser is in "Experiencial Mode"</p>
            </div>
            <div className='extra'>Extra Content</div>
          </div>
        </div>
        <div className='bottom-content'>
          <div className='related-images'>Related Images</div>
          <div className='popular-posts'>Popular Posts</div>
        </div>
        <footer className='footer'>Footer</footer>

      </div>
    </div>
  );
};

export default App;
