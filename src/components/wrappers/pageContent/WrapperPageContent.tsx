import "./wrapper-page-content.css";

const WrapperPageContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="content">{children}</div>;
};

export default WrapperPageContent;
