import React from 'react'
interface Feature {
  icon: string; 
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: '/Bullhorn.png',
    title: 'Explore Local Ads',
    description: 'Discover local offers and support neighborhood businesses.',
  },
  {
    icon: '/Add Friend.png',
    title: 'Community Forums',
    description: 'Connect with neighbors and discuss what matters most.',
  },
  {
    icon: '/Home.png',
    title: 'Building Management',
    description: 'Simplify building communication and resolve issues efficiently.',
  },
  {
    icon: '/horn.png',
    title: 'Report Feeds',
    description: 'Stay updated with safety alerts, events, and news.',
  },
];

const Feat = () => {
  return (
    <section className='mt-12 lg:mt-20' id='features'>
      <div className='text-center px-4'>
        <h2 className='feat-text'>Resihub key Features</h2>
        <div className=''>
          <p className='feat-subtext lg:hidden'>Explore some of our interesting features designed to keep you connected, informed, and in control of your living experience.
            From local updates to streamlined building management, ResiHub has it all.</p>

            <p className='feat-subtext hidden lg:block'>Explore some of our interesting features designed to keep you connected, informed, and in control of <br></br> your living experience.
            From local updates to streamlined building management, ResiHub has it all.</p>
        </div>
      </div>
        
        {/**features */}
      <div className="grid gap-5 items-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-8 py-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col feat-card items-center text-center py-10 px-3 transform transition-transform duration-200 ease-in-out hover:translate-y-[-2px] hover:shadow-md"
          >
            <div className="mb-4">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-[90px] h-[90px] object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-[#1e1e1e] mb-2">
              {feature.title}
            </h3>
            <p className="text-sm font-normal text-[#1E1E1E]">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Feat
