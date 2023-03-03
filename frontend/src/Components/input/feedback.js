import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

function Feedback(props) {
   
  return (
    <>
    <ThumbUpIcon/>
    <ThumbDownIcon/>
    </>
      )
}

// const mapStateToProps = state => {
//     return {
//       visualization: state.counter.visualization,
//     }
//   }

//   const mapDispatchToProps = dispatch => {
//     return {
//         setVisualization: (data) => dispatch(setVisualization(data))
//     }
//   }

export default Feedback;