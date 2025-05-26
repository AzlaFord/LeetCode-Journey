import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './ProblemNavigator.css';

function ProblemNavigator(props) {
  const diff = props.difficulty.toLowerCase();  
  const difficultyClass = `difficulty-${diff}`;
  console.log(difficultyClass);

  return (
    <div className="problemcontaienr">
      <div className="probleminfo">
        
        <h2>{props.name}</h2>
        <div className="contain">
            <h3 >Difficulty:</h3>
            <h3 className={difficultyClass} > {props.difficulty}</h3>
        </div>
        <h3>{props.description}</h3>
      </div>
      <div className="problemsolve">
        <SyntaxHighlighter className="problema" language="javascript" style={darcula}>
          {props.solved}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
export default ProblemNavigator;