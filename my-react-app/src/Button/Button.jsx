//style react components with css
// not including external froamworks or preprocessors

//include basic techs: external, modules, inline
import styles from './button.module.css'
// modules avoid naming conflicts, because a unique class is generated via a hashing algorithm
function Button(){
    return(<button className={styles.button}>Click me</button>);
    
}

export default Button