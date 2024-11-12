import clsx from 'clsx';
import { useState } from 'react';


import { TABS, specifications } from './consts';
import Tabs from './Tabs';

const ProductSpecification = () => {
    const [selected, setSelected] = useState('sustainability')

    const selectedData = specifications.find(item => item.value == selected)


    return(
        <div
            className={clsx(
                'px-4 py-12 md:py-16 lg:px-28 lg:py-24',
                'flex flex-col gap-16',
            )}>
            <div 
                className="flex flex-col gap-6">
                <h2 className='font-semibold text-5xl text-neutral-900'>Discover timeless elegance</h2>
                <p className='font-normal text-lg text-neutral-600'>
                    Step into a world where quality meets quintessential charm with our
                    collection. Every thread weaves a promise of unparalleled quality,
                    ensuring that each garment is not just a part of your wardrobe, but a
                    piece of art. Here's the essence of what makes our apparel the
                    hallmark for those with an eye for excellence and a heart for the
                    environment.
                </p>
            </div>

            <div className='flex flex-col gap-8 self-stretch'>
                <Tabs 
                    value={selected}
                    onSelect={setSelected}
                    tabs={TABS}
                    className='flex flex-col justify-center self-stretch border-solid border-neutral-300'
                />
                <div className='flex flex-col gap-8 lg:flex-row self-stretch'>
                    <picture className='shrink-0'>
                        <source srcSet={selectedData.img.desktop} media="(min-width: 1024px)" />
                        <source srcSet={selectedData.img.tablet} media="(min-width: 768px)" />
                        <img
                            loading="lazy"
                            src={selectedData.img.mobile}
                            className={clsx(
                                'h-[180px] md:h-96 lg:h-64',
                                'w-full lg:w-[367px]',
                                'rounded-lg object-cover',
                            )}
                            alt={`${selected}'s banner`}
                        />
                    </picture>
                    <div className='flex flex-col gap-8 grow'>
                        <div className='flex flex-col gap-2 self-stretch'>
                            <h4 className='font-medium text-2xl text-neutral-900'>{selectedData.title}</h4>
                            <span className='font-normal text-base text-neutral-600'>{selectedData.description}</span>
                        </div>
                        <div className={clsx(
                                'flex flex-wrap',
                                'gap-4 md:gap-x-12 md:gap-y-8 lg:gap-8',
                                'pb-1 md:pb-0',
                            )}>
                            {selectedData.items.map((item) => (
                                <div 
                                    key={item.label}
                                    className='flex w-full items-center gap-2 md:w-80 md:gap-4 lg:w-[282px]"'>
                                    <div
                                        className={clsx(
                                            'size-12 rounded-full bg-white shadow',
                                            'flex items-center justify-center',
                                            'shrink-0',
                                            'size-6 text-indigo-700',
                                        )}
                                        loading='lazy'
                                    >
                                        <item.icon className="size-6 text-indigo-700"/>
                                    </div>
                                    <span className='font-normal text-base text-neutral-600'>{item.label}</span>
                                </div>
                            ))}
                        </div>
        
                    </div>
                </div>
            </div>
        </div>
    )

}


export default ProductSpecification