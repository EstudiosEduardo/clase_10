import './App.css';

import Imagen from '../src/components/Imagen/Imagen.js';
import imagen from '../src/assets/imagenes/pendulum-1934311_640.jpg';
import video from  '../src/assets/videos/Registro - 65390.mp4';
import Video from '../src/components/Video/Video.js';
import audio from '../src/assets/audios/movie-trailer-soundtrack-27143.mp3';
import Audio from '../src/components/Audio/Audio.js';


function App() {
  let classNameImagen = "rounded img-fluid mb-3";
  let altImagen = "Esto es un péndulo";
  let classNameVideo= "mx-auto";
  let width ="640";
  let height ="480";
  let altVideo = "Esto es un disco";
  let classNameAudio = "mx-auto d-block";
  return (
    <div className="App">       
       <Imagen src={imagen} 
       className={classNameImagen} 
       alt={altImagen}></Imagen>
       <Audio src={audio} 
       className={classNameAudio}></Audio>
       <Video src={video} 
       className={classNameVideo}
       width = {width}
       height = {height}
        alt={altVideo}></Video>    
    </div>
  );
}

export default App;
