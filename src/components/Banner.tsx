import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner () {
  return (
    <div className={styles.banner}>
      <Image src={'/img/cover.jpg'} 
        alt='cover'
        fill={true}
        objectFit='cover'
      />
      <div className={styles.bannerText}>
        <h1 className='text-5xl font-semibold'>where every event finds its venue</h1>
      </div>
      <div className={styles.bannerFlavor}>
        If you want somethign to happen, we can always find the place for it to occur.
      </div>
    </div>
  );
}