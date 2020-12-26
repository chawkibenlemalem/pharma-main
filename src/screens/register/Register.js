import './register.css'
import {Link} from "react-router-dom";


const Register = () => {
    return (
        <div className={'container'}>
            <div className={'card'}>
                <div className={'title'}>
                    <span className={'title-text'}>Register</span>
                </div>

                <div className={'inputs'}>
                    <input placeholder={'Nom'}/>
                    <input placeholder={'Login'}/>
                    <input type={'password'} placeholder={'Password'}/>
                    <input type={'password'} placeholder={'confirm password'}/>
                </div>
                <div className={'actions'}>
                    <div className={'auth'}>
                        <span> S'inscrire</span>
                    </div>
                    <div className={'register'}>
                        <Link to="/login">Se connecter</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register;
