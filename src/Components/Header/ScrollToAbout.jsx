import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";


const ScrollToAbout = () =>{
    // let body = useRef(document.querySelector('body'));
    const scrollHandler = (e) =>{
        window.scrollTo({
            top:100,
            behavior:"smooth"
        });
    }
    return (
        <>
          <FontAwesomeIcon onClick={scrollHandler} style={{padding:"16px 0",fontSize:"2em"}} icon={faArrowDown} bounce/>
        </>
    );
}

export default ScrollToAbout;