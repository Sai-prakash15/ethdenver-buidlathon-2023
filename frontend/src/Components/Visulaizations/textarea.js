import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { TypeAnimation } from 'react-type-animation';




// export const TypeWriter = ({ content = "", speed = 1000 }) => {
//     const [displayedContent, setDisplayedContent] = React.useState("");
//     const [index, setIndex] = React.useState(0);
    
//     React.useEffect(() => {
//         /*Create a new setInterval and store its id*/
//         const animKey = setInterval(() => {
//         setIndex((index) => {
//             /*This setState function will set the index
//             to index+1 if there is more content otherwise
//             it will destory this animation*/
        
//             if (index >= content.length - 1) {
//             clearInterval(animKey);
//             return index;
//             }
//             return index + 1;
//         });
//         }, speed);
//     }, []);
    
//     React.useEffect(() => {
//         setDisplayedContent((displayedContent)=>displayedContent + content[index]) 
//     }, [index])
    
//     return (<Paper variant="outlined" sx={{display: 'flex', alignItems: 'center', width: "80%", flexGrow: 0, marginTop: "10px"}} ><p className="type-writer">{displayedContent}</p></Paper>)
//     };
    export default function Variants() {
const text = `Graph Query:\nSome of our debates seem eternal, `
  return (
    // <Paper
    //   sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "80%", flexGrow: 0, marginTop: "64px" }}
    // >
      <Paper variant="outlined" sx={{display: 'flex', alignItems: 'center', width: "500px", flexGrow: 0, marginTop: "10px", fontSize: "18px",
      fontFamily: 'system-ui', paddingLeft:"10px"}} >
      <TypeAnimation
            cursor={false}
            sequence={[
                text,
                ()=>{console.log(text)}
            ]}
            speed={60}
            wrapper="pre"
            repeat={1}
      />

      

        </Paper>
    // </Box>   
  );
}