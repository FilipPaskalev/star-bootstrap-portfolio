import "./wrapper-page-content.css";

type WrapperPageContentProps = {
  children: React.ReactNode;
};

const WrapperPageContent = ({ children }: WrapperPageContentProps) => {
  return <div className="content">{children}</div>;
};

export default WrapperPageContent;
