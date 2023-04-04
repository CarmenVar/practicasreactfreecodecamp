
import './App.css';
import Testimonio from './componentes/testimonio.jsx';

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
      <h1>Esto es lo que dicen nuestros alumnos</h1>
      <Testimonio
      nombre="Alejandro Sanz"
      pais="España"
      imagen="alejo"
      cargo="Cantautor "
      empresa="Spotify"
      testimonio="No me da vergüenza decir
      Que lo eras todo para mi
      Pero no puedo admitir
      Que lo quisiera repetir
      Tantos momentos solo
      Impresionante mente solo
      Perdido en la acera
      No había ni un rastro tuyo
      La calle estaba tan desierta
      La noche despiertaue fui es lo soy, no me da verguenza decir, que lo quisiera repetir" />
      <Testimonio
       nombre="Ed Sheeran"
       pais="Canada"
       imagen="ed-sheeran"
       cargo="Cantautor"
       empresa="Amazon"
       testimonio="No me da vergüenza decir
       Que lo eras todo para mi
       Pero no puedo admitir
       Que lo quisiera repetir
       Tantos momentos solo
       Impresionante mente solo
       Perdido en la acera
       No había ni un rastro tuyo
       La calle estaba tan desierta
       La noche despiertaue fui es lo soy, no me da verguenza decir, que lo quisiera repetir" />
       <Testimonio
       nombre="Lady Gaga"
       pais="USA"
       imagen="gaga"
       cargo="Cantautor"
       empresa="Globant"
       testimonio="No me da vergüenza decir
       Que lo eras todo para mi
       Pero no puedo admitir
       Que lo quisiera repetir
       Tantos momentos solo
       Impresionante mente solo
       Perdido en la acera
       No había ni un rastro tuyo
       La calle estaba tan desierta
       La noche despiertaue fui es lo soy, no me da verguenza decir, que lo quisiera repetir" />
      </div>
    </div>
  );
}

export default App;
