import{ Link } from 'react-router-dom';

function NumeProblema(props) {
  return (
    <>
      <h3> <Link to={`/LeetCode-Journey/problema/${props.name}`} >{props.name}</Link></h3>
    </>
)}

export default NumeProblema;