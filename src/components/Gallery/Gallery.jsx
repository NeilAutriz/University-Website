import '../Gallery/Gallery.css'
import gallery1 from '../../assets/gallery-1.png'
import gallery2 from '../../assets/gallery-2.png'
import gallery3 from '../../assets/gallery-3.png'
import gallery4 from '../../assets/gallery-4.png'
import whiteArrow from '../../assets/white-arrow.png'

const Gallery = () => {
  return (
    <div className='gallery-container'>
      <div className="photo-gallery">
        <img src={gallery1} className='photoIndiv'/>
        <img src={gallery2} className='photoIndiv'/>
        <img src={gallery3} className='photoIndiv'/>
        <img src={gallery4} className='photoIndiv'/>
      </div>
      <button className='see-more-gallery'>See More Photos
        <img src={whiteArrow} className='white-arrow-photo'/>
      </button>
    </div>
  )
}

export default Gallery
