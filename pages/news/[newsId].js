import { useRouter } from 'next/router';

const DetailPage = () => {
    const router = useRouter();

    const newsId = router.query.newsId;

	return (
        <div>
            <h1>Detail page</h1>
            <p>{newsId}</p>
        </div>
    
    );
};

export default DetailPage;
