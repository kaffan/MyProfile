import { useRef } from "react";
import styles from './TitleName.module.css';

const TitleName = () =>{
    let arr = ["Khan Affan Sibgatullah","Frontend Developer","Love for Javascript/React","Interested in psychology"];
    let i = 0;
    let toggle = useRef(true);
    let ele = useRef();
    const EventHandler = () =>{
      if(!toggle.current){
        (i>=arr.length) ? i = 1 : i = i+1;
        (i>=arr.length) ? ele.current.textContent = arr[0] : ele.current.textContent = arr[i];
        ele.current.classList.remove(styles.textOut);
        ele.current.classList.add(styles.textIn);
        toggle.current = true;
      }
      else{
          setTimeout(() => {
            ele.current.classList.remove(styles.textIn);
            ele.current.classList.add(styles.textOut);
            toggle.current = false;
          },1000);
      }
      // setTimeout(()=>{
      //   if(toggle.current){
      //     ele.current.classList.remove(styles.textIn);
      //     ele.current.classList.add(styles.textOut);
      //     toggle.current = false;
      //   }
      // }, 2000);
    }
    return(
        <>
            <h3
            style={{
              display:"inline-block",
              borderRadius:"7% 25% 25% 0%",
              backgroundColor:"#cb7df2",
              padding:"4px",
              color:"white",
              fontWeight:"300",
              fontFamily:"Roboto"
            }}>Hello! I am</h3>
            <h1 
            // className={[styles.h1Edit, styles.textIn].join(' ')} 
            // onAnimationEnd={EventHandler}
            className={styles.h1Edit} 
            ref={ele}>
                KHAN AFFAN SIBGATULLAH
            </h1>
            <h3
            style={{
              padding:"0",
              display:"inline-block",
              margin:"0",
              fontFamily:"Roboto"
            }}>I' am a frontend developer</h3>
        </>
    );
}

export default TitleName;