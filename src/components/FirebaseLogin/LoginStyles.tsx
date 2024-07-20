export const styles = {
    main_container:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        minHeight:'100vh',
        backgroundImage: `url(/whatsapp-bg-1.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover',
    },
    login_card:{
        display:'flex',
        alignItems:'center',
        backgroundColor:'#fff',
        borderRadius:'8px',
    },

    whats_app_logo_container:{
        backgroundColor:'#0ca015',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        color:'#fff',
        padding:'10px',
        borderTopLeftRadius:'8px',
        borderBottomLeftRadius:'8px',
    },

    wa_img:{
        height:'250px',
        width:'250px',
        marginTop:'0px',
    },

    inputs_container:{
        padding:'20px',
        gap:3,
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',        
    },

    user_input:{
        backgroundColor:'#fff',
        padding:'10px',
        borderRadius:'10px',
        outline:'none',
        border:'1px solid #c8c8c8',
    },
    google_icon:{
        cursor:'pointer',
    }
}