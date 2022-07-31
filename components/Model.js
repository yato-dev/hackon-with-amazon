import "@google/model-viewer";

const Model = (props) => (
  <div id="card">
    <model-viewer
      src={props.src}
      ios-src=""
      // poster="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717"
      alt={props.alt}
      shadow-intensity="1"
      camera-controls
      // ar-scale="fixed"
      auto-rotate
      ar
    ></model-viewer>

    <div className="Product-info">
      <h1 className="title">{props.title}</h1>
      <div className="price">
        <h2 className="current-price">{props.current}</h2>
        <h3 className="old-price">{props.old}</h3>
        <h4 className="mark">Inclusive of all taxes</h4>
      </div>
      <div className="description">
        <p>{props.description}</p>
      </div>
    </div>
  </div>
);

export default Model;
