import styles from './card.module.css'
import Image from 'next/image'

export default function Card({venueName, imgSrc}:{venueName:string, imgSrc:string}) {
  return (
    <div className='h-80 w-64 bg-white pt-2 rounded-lg shadow-md'>
      <div className='relative h-3/5 w-full'>
        <Image
        alt="nothing"
        src={imgSrc}
        fill={true}
        objectFit='cover'
        />
      </div>
      <div className='text-blue-700 font-semibold px-2 h-1/10'>{venueName}</div>
      <div className='text-black h-1/4 p-4'>// ไปบอกน้องเอ๋ให้เปลี่ยนคำอธิบายด้วย พี่นอนและ</div>
    </div>  
  );
}