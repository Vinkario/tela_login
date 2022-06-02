import "./style.css"

function App() {
  return (
   <div className="container">
     <div className="container-login">
       <div className="wrap-login">
         <form className="login-form">
           <span className="login-form-title">Bem Vindo</span>

           <div className="wrap-input">
             <input className="input" type="email"  placeholder="Email"></input>
             <span className="focus-input" data-placeholder="Email"></span>
           </div>

            <div className="wrap-input">
              <input className="input" type="password" placeholder="Senha"></input>
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>
           

         </form>
       </div>
     </div>
   </div>
  );
}

export default App;
