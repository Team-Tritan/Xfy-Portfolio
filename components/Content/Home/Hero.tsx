"use strict";

import MainAlert from "../../Alerts/Main";

export default function HomeHero() {
  return (
    <section className="landing">
      <div className="row vertical-center" id="landing">
        <div className="col-lg-8 text-left pb-5">
        {//  <MainAlert /> 
        }
          <h1 className="animate__animated animate__fadeInUp display-1">
            Hi, I'm <span style={{ color: "rgb(71, 71, 172)" }}>Xfy</span>.
          </h1>
          <div className="animate__animated animate__fadeInUp">
            <p className="animate__animated animate__fadeInUp lead pl-2 text-white">
              Software & Network Engineer, mid at best.
              </p>
            <br />
            <img
              className="animate__animated animate__fadeInUp"
              style={{ textAlign: "center" }}
              src="https://spotify-recently-played-readme.vercel.app/api?user=c36ygm5hg7d35z2e445a4ig7u&count=4"
            />
          </div>
        </div>
        <div className="animate__animated animate__fadeInUp col-lg-4 text-center my-auto pb-5 rounded-circle">
          <img className="img-fluid rounded-circle" src="https://cdn.discordapp.com/avatars/359498825150365699/a_7a7830d8b67ed467fdb8a47d3786c0b6.gif?size=1024" />
        </div>
      </div>
    </section>
  );
}
