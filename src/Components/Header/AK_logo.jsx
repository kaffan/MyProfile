import logoCss from './AK_logo.module.css';

const AK_logo = () =>{
    return(
        <> 
          <div className={logoCss.logo}>
            <p className={logoCss.logo_text}>AK</p>
          </div>
        </>
    );
}

export default AK_logo;