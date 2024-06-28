'use client';

const ProgressBar = ({ progress }) => {
    return (
        <div className="w-full bg-gray-200 rounded-full">
            <div className="bg-main text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: `${progress}%`}}> {progress}%</div>
        </div>
    );
};

export default ProgressBar;
