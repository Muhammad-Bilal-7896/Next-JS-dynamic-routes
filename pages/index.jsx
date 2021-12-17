import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from "../Components/Header/index";

const sample_array = [
  {
    id: '301345',
    title: "Product 1",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg"
  },
  {
    id: '619326',
    title: "Product 2",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg"
  },
  {
    id: '275344',
    title: "Product 3",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg"
  },
  {
    id: '435741',
    title: "Product 4",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg"
  },
  {
    id: '248390',
    title: "Product 5",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg"
  },
  {
    id: '980491',
    title: "Product 6",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg"
  },
  {
    id: '537209',
    title: "Product 7",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg"
  },
  {
    id: '566281',
    title: "Product 8",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg"
  },
  {
    id: '745233',
    title: "Product 9",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg"
  }
]

const Check = () => {
  const router = useRouter()
  const slug = router.query.slug || []

  return (
    <div>
      <h1 className="text-center mt-2">For dynamic routes in Next JS</h1>

      <div className="container">
        <div className="row">
          {sample_array.map((v, i) => {
            return (
              <Link
                href="/NewRoute/[...NewRoute]"
                as={`/NewRoute/${v.id}`}
              >
                <div className='border bg-success mt-3' title='Click on me to navigate to the details page' key={i}>
                  <h2>{v.title}</h2>
                  <img title={v.img} width={300} src={v.img} />
                </div>
              </Link>
            )

          })}
        </div>
      </div>


      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link
            href="/NewRoute/[...NewRoute]"
            as="/NewRoute/4"
          >
            <a>NewRoute Page 1</a>
          </Link>
        </li>
        <li>
          <Link
            href="/post/[...slug]"
            as="/post/check"
          >
            <a>Check Page</a>
          </Link>
        </li>
        <li>
          <Link
            href="/post/[...slug]"
            as="/post/1"
          >
            <a>First Post</a>
          </Link>
        </li>
        <li>
          <Link
            href="/post/[...slug]"
            as="/post/2"
          >
            <a>Second Post</a>
          </Link>
        </li>
      </ul>

    </div>
  )
}
export default Check;