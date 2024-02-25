import { Link } from 'react-router-dom'


function Login() {
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

              <div class="row mb-4">
                <div class="col d-flex justify-content-center">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="form2Example34" checked />
                    <label class="form-check-label" for="form2Example34"> Recuerdame</label>
                  </div>
                </div>

                <div class="col">
                  <a href="#!">Olvidaste tu contraseña?</a>
                </div>
              </div>

              <button data-mdb-ripple-init type="button" class="btn btn-primary btn-block mb-4">Iniciar sesión</button>

              <div class="text-center">
                <p>No eres miembro? <Link to="/register">Registro</Link></p>
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

export default Login