import { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Aquí puedes agregar la lógica para autenticar al usuario
    console.log(`Username: ${username}, Password: ${password}`);
    // También puedes llamar a una función externa para manejar la autenticación
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      {/* Div con escala de grises para la imagen de fondo */}
      <div
        className="absolute inset-0 "
        style={{
          backgroundImage: 'url(https://i.postimg.cc/XNxyKkdY/brother-fondo.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '100%',
        }}
      ></div>

      <div className="relative w-full max-w-md p-6 rounded-3xl shadow-md bg-gradient-to-b from-slate-600 to-slate-950">
        <h1 className="font-fredericka text-white text-3xl md:text-6xl mb-6">Drinks App</h1>
        <form>
          <label className="font-fredericka text-white text-xl md:text-2xl block mb-4">
            Usuario
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              className="text-black text-lg md:text-xl font-sans form-input mt-1 block w-full"
            />
          </label>
          <label className="font-fredericka text-white text-xl md:text-2xl block mb-4">
            Contraseña
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="text-black text-lg md:text-xl font-sans form-input mt-1 block w-full"
            />
          </label>
          <button
            type="button"
            onClick={handleLogin}
            className="font-fredericka  bg-slate-500 text-white px-4 py-2 rounded-md hover:bg-slate-600 focus:outline-none focus:shadow-outline-blue active:bg-slate-800"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
