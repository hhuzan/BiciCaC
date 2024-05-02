import appFirebase from '../utils/conexionAPIFirebase'
import {getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const auth = getAuth(appFirebase)

export const Create = ()=>{
    
    const functAutenticacion= async(e) =>{
        e.preventDefault();
        const correo = e.target.email.value;
        const constraseña = e.target.password.value;
     
        try { 	
            await createUserWithEmailAndPassword(auth, correo, constraseña)
        } 
        catch (error) {
            alert ("Asegurece que la contraseña tenga más de 8 caracteres")
        }
    }	

    return (
        <>
            <h2>CREAR USUARIO</h2>
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
                    <input class="form__btn btn btn--primary btn--large" type="submit" value="Crear"/>
                </div>
            </form>
        </>
    )
}