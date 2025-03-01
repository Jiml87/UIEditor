import './PanelButton.css';

export const PanelButton = ({ children, ...props }: any) => (
  <button className="panel-button" {...props}>
    {children}
  </button>
);
