import Image from 'next/image';
import React from 'react';

const Logo = () => {
    return (
        <div className="flex flex-col items-center sm:justify-center sm:mt-9 sm:flex-row text-justify relative">
            <div className="sm:mr-10 min-w-1/3 relative">
                <div style={{ width: '100%', aspectRatio: '454 / 424' }}>
                    <Image
                        src="/vector-2.png"
                        alt="Profile"
                        width={454}
                        height={424}
                        style={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'contain', // Or 'cover' depending on your preference
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Logo;