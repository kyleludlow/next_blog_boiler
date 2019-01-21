import Link from 'next/link'

const linkStyle = {
    padding: '0px 12px',
    borderRight: '1px solid grey'
}

const socialStyle = {
    padding: '0px 12px',
}

const navStyle = {
    margin: 24,
}

const Navigation = () => (
    <div style={navStyle}>
        <div className="navigation__container">
            <div className="navigation__container--logo">
                <img
                    src="/static/crystals.png"
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        margin: '12px 24px',
                        height: '48px'
                    }}
                />
            </div>
            <div className="navigation__container--links">
                <Link href="/">
                    <a style={linkStyle}>Home</a>
                </Link>
                <Link href="/about">
                    <a style={linkStyle}>About Me</a>
                </Link>
                <Link href="/blog">
                    <a style={linkStyle}>Blog</a>
                </Link>
                <Link href="/blog">
                    <a style={linkStyle}>Destinations</a>
                </Link>
                <Link href="/blog">
                    <a style={linkStyle}>Travel PDX</a>
                </Link>
                <Link href="/blog">
                    <a style={linkStyle}>Contact Me</a>
                </Link>
            </div>
            <div className="navigation__container--social">
                <span> Follow: </span>
                <Link href="https://facebook.com">
                    <a style={socialStyle}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.3829 0H1.61702C0.723984 0 0 0.723955 0 1.61702V10.3829C0 11.276 0.723955 11.9999 1.61702 11.9999H5.94029L5.94766 7.71181H4.83361C4.68883 7.71181 4.57132 7.59474 4.57076 7.44996L4.56542 6.06772C4.56486 5.92215 4.68272 5.80385 4.82829 5.80385H5.94032V4.46825C5.94032 2.91831 6.88693 2.07435 8.26959 2.07435H9.40416C9.54932 2.07435 9.66704 2.19203 9.66704 2.33722V3.50273C9.66704 3.64787 9.54941 3.76552 9.40431 3.76561L8.70803 3.76593C7.9561 3.76593 7.8105 4.12324 7.8105 4.64761V5.80388H9.46275C9.62018 5.80388 9.74233 5.94135 9.72378 6.09769L9.55995 7.47994C9.54427 7.61221 9.43211 7.71187 9.29892 7.71187H7.81787L7.8105 12H10.3829C11.276 12 11.9999 11.276 11.9999 10.383V1.61702C11.9999 0.723955 11.2759 0 10.3829 0Z" fill="#5670C2" />
                        </svg>
                    </a>
                </Link>
                <Link href="https://instagram.com">
                    <a style={socialStyle}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.42513 0H3.57486C1.60368 0 0 1.60368 0 3.57486V8.42513C0 10.3963 1.60368 12 3.57486 12H8.42513C10.3963 12 12 10.3963 12 8.42513V3.57486C12 1.60368 10.3963 0 8.42513 0ZM10.7928 8.42513C10.7928 9.73275 9.73275 10.7928 8.42513 10.7928H3.57486C2.26725 10.7928 1.2072 9.73275 1.2072 8.42513V3.57486C1.2072 2.26723 2.26725 1.2072 3.57486 1.2072H8.42513C9.73275 1.2072 10.7928 2.26723 10.7928 3.57486V8.42513Z" fill="url(#paint0_linear)" />
                            <path d="M6.00011 2.89637C4.28877 2.89637 2.89648 4.28865 2.89648 5.99998C2.89648 7.7113 4.28877 9.1036 6.00011 9.1036C7.71145 9.1036 9.10374 7.71132 9.10374 5.99998C9.10374 4.28863 7.71145 2.89637 6.00011 2.89637ZM6.00011 7.89642C4.95274 7.89642 4.10368 7.04737 4.10368 6C4.10368 4.95262 4.95276 4.10357 6.00011 4.10357C7.04749 4.10357 7.89654 4.95262 7.89654 6C7.89654 7.04735 7.04747 7.89642 6.00011 7.89642Z" fill="url(#paint1_linear)" />
                            <path d="M9.10966 3.66338C9.52039 3.66338 9.85335 3.33042 9.85335 2.91969C9.85335 2.50896 9.52039 2.17599 9.10966 2.17599C8.69893 2.17599 8.36597 2.50896 8.36597 2.91969C8.36597 3.33042 8.69893 3.66338 9.10966 3.66338Z" fill="url(#paint2_linear)" />
                            <defs>
                                <linearGradient id="paint0_linear" x1="6" y1="11.9651" x2="6" y2="0.0932061" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#E09B3D" />
                                    <stop offset="0.3" stopColor="#C74C4D" />
                                    <stop offset="0.6" stopColor="#C21975" />
                                    <stop offset="1" stopColor="#7024C4" />
                                </linearGradient>
                                <linearGradient id="paint1_linear" x1="6.00011" y1="11.9651" x2="6.00011" y2="0.0932034" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#E09B3D" />
                                    <stop offset="0.3" stopColor="#C74C4D" />
                                    <stop offset="0.6" stopColor="#C21975" />
                                    <stop offset="1" stopColor="#7024C4" />
                                </linearGradient>
                                <linearGradient id="paint2_linear" x1="9.10966" y1="11.9651" x2="9.10966" y2="0.0932197" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#E09B3D" />
                                    <stop offset="0.3" stopColor="#C74C4D" />
                                    <stop offset="0.6" stopColor="#C21975" />
                                    <stop offset="1" stopColor="#7024C4" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </a>
                </Link>
                <Link href="https://twitter.com">
                    <a style={socialStyle}>
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.8092 1.16119C11.5425 1.27942 11.2658 1.37269 10.9818 1.44022C11.2947 1.14285 11.53 0.770899 11.6627 0.355739C11.7006 0.237218 11.5719 0.13473 11.4649 0.198188C11.0698 0.432539 10.6442 0.608346 10.1999 0.720781C10.1741 0.727305 10.1476 0.730612 10.1209 0.730612C10.0399 0.730612 9.96127 0.700564 9.89939 0.646029C9.42671 0.229435 8.81878 0 8.18761 0C7.91449 0 7.63874 0.0425693 7.36799 0.126538C6.52913 0.386722 5.88187 1.07868 5.6788 1.93241C5.60261 2.25263 5.58198 2.57314 5.61744 2.88503C5.62151 2.92087 5.60457 2.94588 5.59413 2.95761C5.57578 2.97818 5.54977 2.98997 5.52277 2.98997C5.51975 2.98997 5.51665 2.98983 5.51358 2.98953C3.67734 2.81893 2.02149 1.93428 0.851054 0.498572C0.79137 0.425342 0.676915 0.434324 0.629343 0.515922C0.400141 0.909139 0.279016 1.35888 0.279016 1.81652C0.279016 2.51788 0.560793 3.17883 1.05024 3.66066C0.844413 3.61186 0.6452 3.53501 0.460148 3.43222C0.370621 3.38249 0.260467 3.44641 0.259209 3.54881C0.246394 4.59072 0.856409 5.51783 1.77023 5.9353C1.75183 5.93574 1.73342 5.93594 1.71499 5.93594C1.57014 5.93594 1.42347 5.92196 1.27912 5.89437C1.1783 5.87512 1.0936 5.97076 1.1249 6.06851C1.42151 6.99453 2.21883 7.6771 3.17297 7.83207C2.38109 8.36365 1.45893 8.64405 0.499148 8.64405L0.199934 8.64387C0.107744 8.64387 0.0297737 8.70397 0.00628007 8.79326C-0.0168624 8.88121 0.0257654 8.97398 0.10438 9.01971C1.1859 9.64912 2.41954 9.98178 3.67245 9.98178C4.76916 9.98178 5.79504 9.76413 6.72161 9.33493C7.57104 8.94145 8.32166 8.37898 8.95263 7.66314C9.54041 6.99631 10 6.22652 10.3187 5.3752C10.6225 4.56369 10.783 3.69779 10.783 2.8711V2.83172C10.783 2.69898 10.8431 2.57408 10.9478 2.48906C11.3453 2.16635 11.6914 1.78648 11.9765 1.35999C12.0518 1.24738 11.933 1.10625 11.8092 1.16119Z" fill="#76A9EA" />
                        </svg>

                    </a>
                </Link>
            </div>
        </div>
        <style jsx>{`
            .navigation__container {
                display: flex;
                justify-content: flex-end;
            }
            .navigation__container--social a:first-of-type {
                padding-left: 8px;
            }
            .navigation__container--links a:last-of-type {
                border-right: none!important;
            }
            .navigation__container--social span {
                padding-left: 48px;
                color: #E3A050;
            }
            svg {
                height: 16px;
                width: 16px;
            }
        `}</style>
    </div>
)

export default Navigation
