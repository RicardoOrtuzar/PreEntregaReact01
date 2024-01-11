const Header = () => {
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div style={headerStyle} className="col">
                        <a>Horario de atención: Lunes a Viernes - Cel: +56 123456789</a>
                    </div>
                </div>
            </div>
        </div>
    )
      
}



const headerStyle = {
    margin: '10px',
    textAlign: 'center',
};

export default Header;