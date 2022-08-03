import Link from 'next/link';

export default function me() {
    return (
        <>
            <h1>Hasibul Islam</h1>
            <h1 className="title">
                Read{' '}
                <Link href="/posts/first-post">
                    <a>this page!</a>
                </Link>
            </h1>
        </>
    );
}

// http://localhost:3000/authors/me 
