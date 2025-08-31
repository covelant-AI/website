import Image from 'next/image';

export default function Awards() {
    return(
        <section className="flex flex-col items-center justify-center gap-10 px-6 lg:px-40 py-10 my-10 md:mb-40 font-Figtree overflow-hidden">
            <div className="flex flex-row max-md:flex-wrap">
                <Image
                    src="/awards/leaf1.png"
                    alt="Awards"
                    width={200}
                    height={300}
                    className='max-md:hidden'
                    />
                <Image
                    src="/awards/mit.svg"
                    alt="Awards"
                    width={400}
                    height={400}
                    />
                    <Image
                    src="/awards/leaf.png"
                    alt="Awards"
                    width={200}
                    height={300}
                    className='max-md:hidden'
                    />
            </div>
            <div className='flex flex-row items-center justify-center gap-8 max-md:flex-wrap'>
                <Image
                    src="/awards/openAi.png"
                    alt="Award 2"
                    width={130}
                    height={130}
                />
                <Image
                    src="/awards/akamai.png"
                    alt="Award 1"
                    width={100}
                    height={100}
                />
                <Image
                    src="/awards/MITAiClub.png"
                    alt="Award 3"
                    width={130}
                    height={130}
                />
                <Image
                    src="/awards/N.png"
                    alt="Award 4"
                    width={50}
                    height={50}
                />
                <Image
                    src="/awards/scaleAi.png"
                    alt="Award 5"
                    width={100}
                    height={100}
                />
                <Image
                    src="/awards/mitSloan.png"
                    alt="Award 6"
                    width={100}
                    height={100}
                />
            </div>
        </section>
    )
}