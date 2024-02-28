//style react components with css
// not including external froamworks or preprocessors

//include basic techs: external, modules, inline

// modules avoid naming conflicts, because a unique class is generated via a hashing algorithm




function Button(){
    //inline style css
    const styles = { 
        backgroundColor: "darkseagreen",
        color:"white",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
       
}
    return(<button style={styles}>Click me</button>);
    
}

export default Button