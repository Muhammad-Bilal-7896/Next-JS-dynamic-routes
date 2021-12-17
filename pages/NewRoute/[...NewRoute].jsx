import { useRouter } from 'next/router'
import Header from '../../Components/Header/index';

const Post = () => {
  const router = useRouter()
  const NewRoute = router.query.NewRoute || []

  return (
    <>
      <Header />
      <h1>Post url is equal to : {NewRoute.join('/')}</h1>
    </>
  )
}

export default Post
