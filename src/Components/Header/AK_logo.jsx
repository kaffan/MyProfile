import logoCss from './AK_logo.module.css';

const AK_logo = () =>{
    return(
        <> 
          <div className={logoCss.logo}>
            <span className={logoCss.logo_text}>AK</span>
          </div>
        </>
    );
}

export default AK_logo;