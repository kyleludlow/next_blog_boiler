import Navigation from '../Navigation'

const layoutStyle = {}

const Layout = (props) => (
    <div style={layoutStyle}>
        <Navigation />
        {props.children}
        <style jsx global>{`
            @import url('https://fonts.googleapis.com/css?family=Covered+By+Your+Grace');
            body {
                margin: 0;
            }
            h1,
            h2,
            h3,
            h4,
            h5,
            a, span {
                font-family:  'Covered By Your Grace', cursive;
            }
            a, span {
                font-size: 1.125rem;
            }
            a {
                color: #E3A050;
            }
            a:hover, a:active {
                color: #DC7800;
            }
            span:hover {
                cursor: default;
            }
            `}</style>
    </div>
)

export default Layout