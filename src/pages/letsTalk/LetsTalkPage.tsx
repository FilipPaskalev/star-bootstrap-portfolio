import useBreakpoint from "../../hooks/useBreakpoint";
import MainContentWrapper from "../../wrappers/mainContent/MainContentWrapper";
import "./lets-talk-page.scss";

const LetsTalkPage = () => {
  const breakpoint = useBreakpoint();

  return (
    <MainContentWrapper breakpoint={breakpoint}>
      <form className="form">
        <div className="flex">
          <label>
            <input className="input" type="text" placeholder="" />
            <span>first name</span>
          </label>

          <label>
            <input className="input" type="text" placeholder="" />
            <span>last name</span>
          </label>
        </div>

        <label>
          <input className="input" type="email" placeholder="" />
          <span>email</span>
        </label>

        <label>
          <input className="input" placeholder="" type="tel" />
          <span>contact number</span>
        </label>
        <label>
          <textarea className="input01" placeholder=""></textarea>
          <span>message</span>
        </label>

        <button className="fancy">
          <span className="top-key"></span>
          <span className="text">submit</span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </button>
      </form>
    </MainContentWrapper>
  );
};

export default LetsTalkPage;
