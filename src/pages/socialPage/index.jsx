import s from './styles.module.scss'
import images from 'images'

const linkData = [
  {
    field: 'FACEBOOK',
    link: 'https://www.facebook.com/Theshersweets?mibextid=ZbWKwL',
    image: images.facebook
  },
  {
    field: 'INSTAGRAM',
    link: 'https://www.instagram.com/shersweets?igsh=MXhuNGVlOTVzZW1sdA==',
    image: images.instagram
  },

  {
    field: 'YOUTUBE',
    link: 'https://youtube.com/@theshersweets7102?si=5IQAyFaeycEMoJwN',
    image: images.youtube
  },
  {
    field: 'WEBSITE',
    link: 'https://www.shersweets.com/',
    image: images.website
  },
  {
    field: 'CATALOGUE',
    link: 'https://www.shersweets.com/wp-content/uploads/2021/12/SHER-2021-CATALOGUE.pdf',
    image: images.catalogue
  },
  {
    field: 'CONTACT US',
    link: 'https://samarthpal.github.io/Sher-Sweets/contactInfo.jpg',
    image: images.contact
  }
]

export default function Main() {
  return (
    <div className={s.main}>
      <div className={s.inner}>
        <div className={s.logo}>
          <img src={images.logo} alt='' />
        </div>
        <div className={s.title}>
          <img src={images.stripe} alt='' />
          Click Here For <span className='material-icons-outlined'>arrow_downward</span>
        </div>
        <div className={s.links}>
          {linkData.map(({ field, link, image }, i) => (
            <a href={link} key={i} className={s.link} target='_blank' rel='noreferrer'>
              <div>
                <img src={image} alt='' />
              </div>
              <div>{field}</div>
            </a>
          ))}
        </div>
        <div className={s.bottom}>
          <img src={images.info} alt='' />
        </div>
      </div>
    </div>
  )
}
