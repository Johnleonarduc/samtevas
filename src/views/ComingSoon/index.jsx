import './index.css';
import Description from  '../../components/Description';
import ImageGrid from '../../components/ImageGrid';
import Jombotron from './Jombotron';

const ComingSoon = ()=>{
    return (
        <main className='coming-soon-wrapper'>
            <Jombotron />
            
            <Description />

            <ImageGrid />
        </main>
    )
};

export default ComingSoon;