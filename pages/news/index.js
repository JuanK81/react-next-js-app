//our-domain/news
import { Fragment } from "react";
import Link from 'next/link';

const NewsPage = () => {
    return (
        <Fragment>
            <h1>News Page</h1>
            <ul>
                <li><Link href='/news/a'>a</Link></li>
                <li><Link href='/news/b'>b</Link></li>
            </ul>
        </Fragment>
        
    )
};

export default NewsPage;