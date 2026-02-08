import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import Ballpit from "./Ballpit";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv" data-cursor="disable" style={{ position: 'relative', overflow: 'hidden', backgroundImage: 'url(/images/bghero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, backgroundColor: 'rgba(0, 0, 0, 0.3)' }} aria-hidden="true">
          <Ballpit
            count={50}
            gravity={0.01}
            friction={0.9975}
            wallBounce={0.95}
            followCursor={true}
          />
        </div>
        <div className="landing-container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="landing-center">
            <div className="landing-hero-text">
              <h1 className="landing-name-karishma">KARISHMA</h1>
              <div className="landing-bottom-row">
                <div className="landing-intro">
                  <h1 className="landing-name-kumavat">KUMAVAT</h1>
                </div>
                <div className="landing-info">
                  <h3>A CREATIVE</h3>
                  <h2 className="landing-info-h2">
                    <div className="landing-h2-1">WEB DEVELOPER</div>
                    <div className="landing-h2-2">MERN DEVELOPER</div>
                  </h2>
                  <h2>
                    <div className="landing-h2-info">WEB DEVELOPER</div>
                    <div className="landing-h2-info-1">MERN DEVELOPER</div>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
