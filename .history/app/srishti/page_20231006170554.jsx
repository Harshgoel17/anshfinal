import Navbar from '@/components/Navbar';
import React from 'react';
import Confetti from 'react-confetti'; // Import the Confetti component
import { Button } from '@/components/ui/button';
import Gallery from '@/components/Gallery';

const Page = () => {
  const [showConfetti, setShowConfetti] = React.useState(false);

  React.useEffect(() => {
    // Delay showing confetti for a few seconds (e.g., 2 seconds)
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={100}
        />
      )}
      <div className='py-14 px-36 gap-5 flex flex-col'>
        {/* ... rest of your code ... */}
      </div>
    </div>
  );
};

export default Page;
