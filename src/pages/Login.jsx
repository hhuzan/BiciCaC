import appFirebase from '../utils/conexionAPIFirebase'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'

const auth = getAuth(appFirebase)

export const Login = ()=>{

    const functAutenticacion= async(e) =>{
        e.preventDefault();
        const correo = e.target.email.value;
        const constraseña = e.target.password.value;
        try {
            await signInWithEmailAndPassword(auth, correo, constraseña)
        } 
        catch (error) {
            alert ("El correo o la contraseña son incorrectos")
        }
    }

    return (
        <>
            <h2>INGRESAR A MI CUENTA</h2>
            <form onSubmit={functAutenticacion}> 
                <div class="form__box--grid">
                    <label class="form__label" for="email">Email:</label>
                    <input class="form__input" type="text" name="email" id="email" placeholder="johndoe@email.com"/>
                </div>
                <div class="form__box--grid">
                    <label class="form__label" for="password">Contrase&ntilde;a:</label>
                    <input class="form__input" type="password" name="password" id="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"/>
                </div>
                <div class="form__submission">
                    <input class="form__btn btn btn--primary btn--large" type="submit" value="Ingresar"/>
                    <div class="form__remember">
                        <input type="checkbox" name="remember" id=""/>
                        <label for="">Recordarme</label>
                    </div>
                </div>
                <a class="form__link" href="">Olvid&eacute; mi contrase&ntilde;a</a>
            </form>
        </>
    )
}