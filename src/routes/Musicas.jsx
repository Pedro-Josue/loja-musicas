import "../css/MusicaStyle.css";
import img from "../assets/img1.jpg";
import nirvanalogo from "../assets/nirvana.jpg"
import eminem from "../assets/eminem.jpg"
import costagold from "../assets/costagold.jpg"
import gunsroses from "../assets/gunsandroses.jpg"
import rock from "../assets/rock.jpg"
import pop from "../assets/popmusic.jpg"
import hiphop from "../assets/hiphop.jpg"
import dawn from "../assets/damn.jpg"
import ilusion from "../assets/ilusion.jpg"

const Musicas = () => {
  return (
    <>

      <div className="mixer_container">
    	  <h1>MÚSICAS DO MOMENTO</h1>
        <div className="mixes">

          <div className="mix-item">
            <div className="image-container">
              <img src={dawn} alt="" />
              <button className="play-button">▶</button>
            </div>
            <p className="mix-title">Kendrick Lamar</p>
            <p className="mix-subtitle">
             Dna - Kendrick  Lamar  -  Album  Damn 
            </p>
          </div>

          <div className="mix-item">
            <div className="image-container">
              <img src={img} alt="" />
              <button className="play-button">▶</button>
            </div>
            <p className="mix-title">HOUDINI</p>
            <p className="mix-subtitle">
              The Death of Slim Shady (Álbum)
            </p>
          </div>

          <div className="mix-item">
            <div className="image-container">
              <img src={ilusion} alt="" />
              <button className="play-button">▶</button>
            </div>
            <p className="mix-title"> Dua Lipa</p>
            <p className="mix-subtitle">
            Dua  Lipa - Illusion - Radical Optimism  
            </p>
          </div>

        </div>
        <h1>ARTISTAS FAVORITOS</h1>
        <div className="mixes">
        

          <div className="mix-item">
            <div className="image-container">
              <img src={eminem} alt="" />
              <button className="play-button">▶</button>
            </div>
            <p className="mix-title">Mix Rock</p>
            <p className="mix-subtitle">
              Thousand Foot Krutch, Linkin Park
            </p>
          </div>

          <div className="mix-item">
            <div className="image-container">
              <img src={costagold} alt="" />
              <button className="play-button">▶</button>
            </div>
            <p className="mix-title">Mix Pop</p>
            <p className="mix-subtitle">
              Adele, Alec Benjamin, Elley Duhé e mais
            </p>
          </div>

          <div className="mix-item">
            <div className="image-container">
              <img src={gunsroses} alt="" />
              <button className="play-button">▶</button>
            </div>
            <p className="mix-title">Mix Anos 2000</p>
            <p className="mix-subtitle">
              Evanescence, Linkin Park, Katy Perry e mais
            </p>
          </div>
      </div>
      <h1>CATEGORIAS MAIS ACESSADAS</h1>
      <div className="mixes">
        

          <div className="mix-item">
            <div className="image-container">
              <img src={rock} alt="" />
              <button className="play-button">▶</button>
            </div>
            <p className="mix-title">Mix Rock</p>
            <p className="mix-subtitle">
              Thousand Foot Krutch, Linkin Park
            </p>
          </div>

          <div className="mix-item">
            <div className="image-container">
              <img src={pop} alt="" />
              <button className="play-button">▶</button>
            </div>
            <p className="mix-title">Mix Pop</p>
            <p className="mix-subtitle">
              Adele, Alec Benjamin, Elley Duhé e mais
            </p>
          </div>

          <div className="mix-item">
            <div className="image-container">
              <img src={hiphop} alt="" />
              <button className="play-button">▶</button>
            </div>
            <p className="mix-title">Mix Anos 1980</p>
            <p className="mix-subtitle">
              Tupac, B.I.G, Eminem e muito mais
            </p>
          </div>
      </div>

      

      </div>

  
    </>
  );
};

export default Musicas;
