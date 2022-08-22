function AppImage(props) {
    function getClassNames() {
      return ` ${props.className ? props.className : ""}`;
    }
    return <img src={props.src} alt={props.alt} className={getClassNames} />;
  }
  export default AppImage;
  