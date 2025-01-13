import '../Title/Title.css'

const Title = ({title, desc}) => {
  return (
    <div className='title-container'>
          <p className='title'>{title}</p>
          <h2 className='description'>{desc}</h2>
    </div>
  )
}

export default Title