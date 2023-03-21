import {BallCanvas} from './canvas';
import {technologies} from '../constants';

export default function Tech () {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-8 ">
      {technologies.map (tech => (
        <div className="w-28 h-28" key={tech.name}>
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  );
}
