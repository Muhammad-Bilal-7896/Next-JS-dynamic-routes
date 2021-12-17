import Link from 'next/link'

const Header = () => (
    <header>
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
    </header>
)

export default Header
