import { useRouter } from 'next/router'
import Header from "../Components/Header/index";

const Check = () => {
    const router = useRouter()
    const slug = router.query.slug || []

    return (
        <div>
            <Header />
            <h1>Slug: {slug.join('/')}</h1>
            <h1 className="text-center mt-2">For dynamic routes in Next JS</h1>
        </div>
    )
}
export default Check;