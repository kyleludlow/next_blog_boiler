const Preload = ({}) => (
    <>
    <div id="loader-wrapper">
        <div className="loader-img"><img src="static/logo-2.png" alt="preloader"/></div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
    </div>
    <div className="section search-section">
        <a href="#" className="close-search"><img src="static/close.png" alt="close"/></a>
        <div className="centered">
            <form action="#">
                <input type="text" placeholder="Search here.."/>
                <button>Search</button>
            </form>
        </div>
    </div>
    </>
);
export default Preload;
