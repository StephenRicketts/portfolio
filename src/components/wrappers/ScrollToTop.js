import { useEffect } from "react";
import { useLocation, withRouter } from "react-router-dom";

//this wrapper causes the viewport to go to the top of the page when the route changes within the switch.

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default ScrollToTop;
