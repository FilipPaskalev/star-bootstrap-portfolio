import { BREAKPOINTS } from "../../utils/constants/breakpoints";
import "./main-content-wrapper.scss";

type TMainWrapperProps = {
  breakpoint: string;
  children: React.ReactNode;
};

const MainContentWrapper = ({ breakpoint, children }: TMainWrapperProps) => {
  if (breakpoint === BREAKPOINTS.XL.key || breakpoint === BREAKPOINTS.XXL.key) {
    return (
      <main className="left-pusher">
        <section className="resume-section" id="about-me">
          <div className="resume-section-content">{children}</div>
        </section>
      </main>
    );
  } else {
    return (
      <main>
        <section className="resume-section" id="about-me">
          <div className="resume-section-content">{children}</div>
        </section>
      </main>
    );
  }
};

export default MainContentWrapper;
