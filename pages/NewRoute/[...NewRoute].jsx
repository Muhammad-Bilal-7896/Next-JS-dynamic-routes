import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Header from '../../Components/Header/index';

const sample_array = [
  {
    id: 0,
    title: "Product 1",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg"
  },
  {
    id: 1,
    title: "Product 2",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg"
  },
  {
    id: 2,
    title: "Product 3",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg"
  },
  {
    id: 3,
    title: "Product 4",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg"
  },
  {
    id: 4,
    title: "Product 5",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg"
  },
  {
    id: 5,
    title: "Product 6",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg"
  },
  {
    id: 6,
    title: "Product 7",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg"
  },
  {
    id: 7,
    title: "Product 8",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg"
  },
  {
    id: 8,
    title: "Product 9",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg"
  }
]

const Post = () => {
  const router = useRouter()
  const NewRoute = router.query.NewRoute || []

  useEffect(() => {
    console.log("New Route is equal to : ", NewRoute.join('/'));
  })

  return (
    <>
      <h1>Post url is equal to : {NewRoute.join('/')}</h1>

      <div className="container">
        <div className="row">
          <div className='border bg-success mt-3' title='Click on me to navigate to the details page'>
            <h2>{sample_array[0].title}</h2>
            <img title={sample_array[0].img} width={300} src={sample_array[0].img} />
          </div>
        </div>
      </div>

    </>
  )
}

export default Post
