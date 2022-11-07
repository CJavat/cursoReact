import './App.css';
import Testimonio from './components/Testimonio.jsx';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos</h1>
        <Testimonio 
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='emma'
          cargo='Ingeniero de software'
          empresa='Spotify'
          testimonio={['Siempre he tenido problemas para aprender JavaScript. Tomé muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en ', <strong>freeCodeCamp me dio las habilidades</strong>, ' y la confianza que necesitaba para conseguir el trabajo de mis sueños como un ingeniero de software en Spotify']} />
        <Testimonio 
          nombre='Shawn Wang'
          pais='Singapur'
          imagen='shawn'
          cargo='Ingeniero de software'
          empresa='Amazon'
          testimonio={['Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando en los cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tenía un trabajo de seis cifras como ingeniero de software.', <strong> freeCodeCamp cambió mi vida</strong>]} />
        <Testimonio 
          nombre='Sarah Chima'
          pais='Nigeria'
          imagen='sarah'
          cargo='Ingeniero de software'
          empresa='ChatDesk'
          testimonio={[<strong>freeCodeCamp fue la puerta de entrada a mi carrera </strong>, 'como desarrollador de software. El plan de estudios bien estructurado llevó mi conocimiento de codificación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble']} />
      </div>
    </div>
  );
}

export default App;
