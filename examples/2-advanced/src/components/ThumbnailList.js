import { h } from 'preact'
import './ThumbnailList.scss'

const ThumbnailList = ({
  children,
  ...props
}) => {
  return (
    <div class="ThumbnailList" {...props}>
      {children}
    </div>
  )
}

export default ThumbnailList
