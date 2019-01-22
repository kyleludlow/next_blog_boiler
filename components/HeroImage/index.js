const HeroImage = ({img, children}) => {
    const imageSrc = img.imgSrc.fields.file.url;
    const imageDesc = img.imgSrc.fields.description;
    return (
        <div className="hero__section">
            <div className="hero__img--container">
                <img src={imageSrc} alt={imageDesc} className="hero__img"/>
                <div className="hero__title--container">
                    {children}
                </div>
            </div>
            <style jsx>{`
            .hero__img--container {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .hero__img {
                width: 100%;
                height: 100%;
            }
            .hero__title--container {
                position: absolute;
                color: white;
                left: 0;
            }
            `}</style>
        </div>
    )
}

export default HeroImage;