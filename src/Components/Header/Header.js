const Header=()=>{
    const headerStyle={backgroundColor:'grey',color:'white',width:'100%',height:'8rem',display: 'flex',alignItems: 'center',justifyContent: 'center',}
    const textStyle={textAlign:'center',fontFamily: 'Arial', fontSize: '3rem', fontWeight: 'bold'}
    return(
        <>
         <div style={headerStyle}>
            <h1 style={textStyle}>The Generics</h1>
         </div>
        </>
    )
}

export default Header