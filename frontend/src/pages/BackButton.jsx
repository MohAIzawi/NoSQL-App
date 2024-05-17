import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({ destination = '/' }) => {
    return (
        <div className='flex'>
            <Link to={destination} className='px-4 py-1 rounded-lg w-fit' style={{ color: 'white', backgroundColor: 'blue' }}>
                <BsArrowLeft className='text-2xl' /> Go Back
            </Link>
        </div>
    );
};

export default BackButton;