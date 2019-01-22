import Navigation from '../Navigation'

const layoutStyle = {}

const Layout = (props) => (
    <div style={layoutStyle}>
        <Navigation />
        {props.children}
        <style jsx global>{`
            @import url('https://fonts.googleapis.com/css?family=Covered+By+Your+Grace');
            @import url('https://fonts.googleapis.com/css?family=Montserrat');
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
            .type__subheader {
                font-size: 1rem;
                font-family: 'Montserrat', sans-serif;
            }
            .button {
                width: 200px;
                height: 60px;
                color: white;
                font-weight: 700;
                min-width: auto;
                line-height: 2.5em;
                white-space: nowrap;
                vertical-align: middle;
                user-select: none;
                border: 1px solid transparent;
                padding: 0.5rem 1rem;
                font-size: 1rem;
                line-height: 1.5;
                border-radius: 2px;
            }
            .button--lg {
                width: 300px;
                height: 60px;
            }
            .button--lg-primary {
                background: #69D5C3;
            }
            .button--lg-primary:active, .button--lg-primary:hover, .button--lg-primary:visited {
                background: #58B3A4;
            }
            .button--lg-primary:hover {
                cursor: pointer;
            }
            `}</style>
    </div>
)

export default Layout