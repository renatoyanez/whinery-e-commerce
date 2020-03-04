import React from 'react';

export default ({handleSubmit, handleChange, state}) => (
    <div>
        <label></label>
    <hr></hr>
    <div className = "container"><h2>Iniciar Sesión</h2></div>
    <hr></hr>
    <form className = "container" onSubmit = {handleSubmit}>
        <div className="form-group">
            <label for="exampleInputEmail1">Correo Electronico</label>
            <input onChange = {handleChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name ="email" value={state.email} required/>
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Contraseña</label>
            <input onChange = {handleChange} type="password" className="form-control" id="exampleInputPassword1" name="password" value={state.password} required/>
        </div>
        { state.error ?  <div class="alert alert-danger" role="alert">Error: The email entered is not registered or the password is incorrect</div> : null }
        <button type="submit" className="btn btn-secondary btn-lg btn-block" >Log In</button>
    </form>
    <label></label>
    </div>
);