import './footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer_mail-div">
        <h3>Свіжі оновлення, безпосередньо на
        вашу поштову скриньку</h3>
        <div className="search-bar">
        <input type="text" placeholder="Search.."/>
        <button>Надіслати</button>
        </div>
        <p>© 2021 Solar palens</p>
      </div>
      <div className="footer_icons">
        <h3>Слідкуйте за нами:</h3>
        <a href="">@Solar palens</a>
        <div className="inst-tlg">
          <a href=""><img src="/img/instagram.png" alt="" /></a>
          <a href=""><img src="/img/telegram.png" alt="" /></a>
        </div>
        
      </div>
    </div>
  );
}

export default Footer;