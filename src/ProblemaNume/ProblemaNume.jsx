import{ Link } from 'react-router-dom';

function NumeProblema(props) {
  return (
    <>
      <h3> <Link to={`/problema/${props.name}`} >{props.name}</Link></h3>
    </>
)}

export default NumeProblema;