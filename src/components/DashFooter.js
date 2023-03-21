import {useNavigate, useLocation} from 'react-router-dom'
const DashFooter = () =>{

    const navigation = useNavigate();
    const { pathname } = useLocation();

    const onGoHome = () =>{
        navigation('/dash')
    }

    let goHomeBtn = null
    if(pathname !== '/dash'){
        goHomeBtn = (
            <button className='dash-footer__btn' title='Home' onClick={onGoHome} >Home</button>
        )
    }

    return(
        <footer className="dash-footer">
            {goHomeBtn}
            <p>Current User</p>
            <p>Status</p>
        </footer>
    )
}

export default DashFooter
