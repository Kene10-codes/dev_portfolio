import {motion} from 'framer-motion';
import {styles} from '../styles';
import {fadeIn, textVariant} from '../utils/motion';
import  {SectionContainer } from '../hoc';

function About () {
  return (
    <>
    <motion.div variants={textVariant()}> 
    <p className={styles.sectionSubText}>Introduction</p>
    <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>
    <motion.p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]" variants={fadeIn("", "", 0.1, 1)}>
      I'm a proficient Frontend Engineer with a year experience in React and JavaScript. I'm a quick learner and collaborate 
      closely with clients to create efficient, scalable, and user-friendly solutions that solve real world problems.
      Let's work together to bring your ideas and designs to life.
    </motion.p>  
  </>
  )
}

export default SectionContainer(About, 'about');