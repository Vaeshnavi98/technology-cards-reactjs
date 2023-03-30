import './index.css'

const Technology = props => {
  const {technologies} = props
  const {title, description, imgUrl, className} = technologies
  return (
    <li className={className}>
      <div>
        <ul>
          <li>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="img-div">
              <img src={imgUrl} alt={title} className="img-deco" />
            </div>
          </li>
        </ul>
      </div>
    </li>
  )
}

export default Technology
