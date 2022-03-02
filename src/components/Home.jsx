import "../css/Home.css";

export const Home = () => {
  return (
    <div className="HomeWrap">
      <div className="NavWrap">
        <div className="NavSubWrap">
          <div className="UserProfile">
            <div className="DateAndUserName">
              <div className="date">Wednesday, 2nd July 2022</div>
              <div className="UserName">Hello, Vasu</div>
            </div>
            <div className="profilepic">
              <div className="pic"></div>
            </div>
          </div>

          <div className="Climates">
            <div className="Climate">
              <div className="celcious">24° C</div>
              <div className="WheatherType">Temperature</div>
            </div>
            <div className="Climate">
              <div className="celcious">47%</div>
              <div className="WheatherType">Humidity</div>
            </div>
            <div className="Climate">
              <div className="celcious">36 Kwh</div>
              <div className="WheatherType">Power usage</div>
            </div>
          </div>
        </div>
        <div className="MenusNav">
          <div className="Menu">Menu</div>
          <div className="Menu">Menu</div>
          <div className="Menu">Menu</div>
          <div className="Menu">Menu</div>
          <div className="Menu">Menu</div>
        </div>
      </div>

      <div className="HomePage">
        <div className="HomeContainers">
          <div className="card">
            <div className="CardTop">
              <div className="circle"></div>
              <div className="radio"></div>
            </div>
            <div className="CardBottom">
              <div className="Cardname">Card name</div>
              <div className="cardSubhand">Sub Heading</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
