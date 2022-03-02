import "../css/Home.css";

export const Home = () => {
  return (
    <div className="HomeWrap">
      <div className="NavWrap">
        <div className="NavSubWrap">
          <div className="UserProfile">
            <div className="DateAndUserName">
              <div className="date">
                <span>Wednesday, 2nd July 2022</span>
              </div>
              <div className="UserName">
                <span>Hello, Vasu</span>
              </div>
            </div>
            <div className="profilepic">
              <div className="pic"></div>
            </div>
          </div>

          <div className="Climates">
            <div className="Climate">
              <div className="celcious">
                <span>24° C</span>
              </div>
              <div className="WheatherType">
                <span>Temperature</span>
              </div>
            </div>
            <div className="Climate">
              <div className="celcious">
                <span>47%</span>
              </div>
              <div className="WheatherType">
                <span>Humidity</span>
              </div>
            </div>
            <div className="Climate">
              <div className="celcious">
                <span>36 Kwh</span>
              </div>
              <div className="WheatherType">
                <span>Power usage</span>
              </div>
            </div>
          </div>
        </div>
        <div className="MenusNav">
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="Menu"
          >
            Menu
          </a>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="Menu"
          >
            Menu
          </a>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="Menu"
          >
            Menu
          </a>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="Menu"
          >
            Menu
          </a>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="Menu"
          >
            Menu
          </a>
        </div>
      </div>

      <div className="HomePage">
        <div className="HomeContainers">
          <div className="card">
            <div className="CardTop">
              <div className="circle">
                <div className="circlediv"></div>
              </div>
              <div className="radio">
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider"></span>
                </label>
              </div>
            </div>
            <div className="CardBottom">
              <div className="Cardname">
                <span>Card name</span>
              </div>
              <div className="cardSubhand">
                <span>Sub Heading</span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="CardTop">
              <div className="circle">
                <div className="circlediv"></div>
              </div>
              <div className="radio">
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider"></span>
                </label>
              </div>
            </div>
            <div className="CardBottom">
              <div className="Cardname">
                <span>Card name</span>
              </div>
              <div className="cardSubhand">
                <span>Sub Heading</span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="CardTop">
              <div className="circle">
                <div className="circlediv"></div>
              </div>
              <div className="radio">
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider"></span>
                </label>
              </div>
            </div>
            <div className="CardBottom">
              <div className="Cardname">
                <span>Card name</span>
              </div>
              <div className="cardSubhand">
                <span>Sub Heading</span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="CardTop">
              <div className="circle">
                <div className="circlediv"></div>
              </div>
              <div className="radio">
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider"></span>
                </label>
              </div>
            </div>
            <div className="CardBottom">
              <div className="Cardname">
                <span>Card name</span>
              </div>
              <div className="cardSubhand">
                <span>Sub Heading</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ActiveDivicesWrap">
        <div className="ActiveDivicesSubwrap">
          <div className="ListMain">
            <div className="ListMainLeft">
              <div>
                <span>Active Devices</span>
              </div>
              <div>
                <span>List of Devices</span>
              </div>
            </div>
            <div>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider"></span>
              </label>
            </div>
          </div>
          <div className="list"></div>
        </div>
      </div>
    </div>
  );
};
