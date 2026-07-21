function UniversityLogo({ size = 130 }) {

    return (

        <img
            src="/logo.png"
            alt="Lalit Narayan Mithila University Logo"
            className="university-logo"
            style={{
                width: `${size}px`,
                height: `${size}px`
            }}
        />

    );

}


export default UniversityLogo;