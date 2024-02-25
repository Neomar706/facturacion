import {  Link } from 'react-router-dom'

function Register() {
  return (
    <div style={{minHeight: '100vh'}} className="d-flex align-items-center">
          <div className="mx-auto col-3 p-3 card shadow">
            <form>
              <div data-mdb-input-init class="form-outline mb-4">
                <input type="email" id="form2Example1" class="form-control" />
                <label class="form-label" for="form2Example1">Nombre de usuario</label>
              </div>

              <div data-mdb-input-init class="form-outline mb-4">
                <input type="password" id="form2Example2" class="form-control" />
                <label class="form-label" for="form2Example2">Contraseña</label>
              </div>

              <div data-mdb-input-init class="form-outline mb-4">
                <input type="password" id="form2Example2" class="form-control" />
                <label class="form-label" for="form2Example2">Repetir contraseña</label>
              </div>

              <button data-mdb-ripple-init type="button" class="btn btn-primary btn-block mb-4">Registrar</button>

              <div class="text-center">
                <p>Ya soy miembro <Link to="/login">Inicia sesión</Link></p>
                <p>O inicia con:</p>
                <button  data-mdb-ripple-init type="button" class="btn btn-secondary btn-floating mx-1">
                  <i class="fab fa-facebook-f"></i>
                </button>

                <button  data-mdb-ripple-init type="button" class="btn btn-secondary btn-floating mx-1">
                  <i class="fab fa-google"></i>
                </button>

                <button  data-mdb-ripple-init type="button" class="btn btn-secondary btn-floating mx-1">
                  <i class="fab fa-twitter"></i>
                </button>

                <button  data-mdb-ripple-init type="button" class="btn btn-secondary btn-floating mx-1">
                  <i class="fab fa-github"></i>
                </button>
              </div>
            </form>
          </div>
        </div>

  )
}

export default Register