import React, {useState, useEffect} from 'react'

function WidthHeight(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    
    useEffect(() =>{
    window.addEventListener('resize',handleResize);
    console.log('EVENT LISTENER ADDED');
    // use return statement to clean up (unmount the component)
    // do this return code before next rerender or a compoennt unmounts
    return () => {
        window.removeEventListener('resize',handleResize);
        console.log('EVENT REMOVED')
    }
    }, []);
 
    useEffect(() => {
        document.title = `Size:  ${width} X ${height}`;
    }, [width, height]);

function handleResize(){
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
}
    return(<>
    <p>Window width: {width} px</p>
    <p>Window height: {height} px</p></>);
}

export default WidthHeight