import "./css/Spinner.css";

function Spinner() {
  return (
    <div className="spinner" data-aos="zoom-in">
      <img
        className="dog"
        src="/static/images/runningdog.gif"
        alt="loading..."
      />
      <img
        className="circle"
        src="/static/images/circles.gif"
        alt="loading..."
      />
    </div>
  );
}

export default Spinner;
