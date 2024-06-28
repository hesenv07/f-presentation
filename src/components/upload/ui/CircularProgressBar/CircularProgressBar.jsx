'use client'

const CircularProgressBar = ({ progress }) => {
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex px-10 py-5 bg-alice_blue rounded-xl items-center justify-center">
      <svg className="-rotate-90 w-28 h-28">
        <circle
          className="text-gray-300"
          strokeWidth="10"
          stroke="currentColor"
          fill="transparent"
          r="45"
          cx="50%"
          cy="50%"
        />
        <circle
          className="text-main"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="45"
          cx="50%"
          cy="50%"
          style={{ transition: 'stroke-dashoffset 0.5s ease' }}
        />
      </svg>
      <div className="absolute text-main text-md">
        {progress}%
      </div>
    </div>
  );
};

export default CircularProgressBar;
