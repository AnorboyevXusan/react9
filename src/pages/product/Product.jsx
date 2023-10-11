import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Product.scss'

const Product = () => {
    const { id } = useParams();

    const [search, setSearch] = useState('');
    const [product, setProduct] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    useEffect(() => {
        axios.get(`https://65263b7d67cfb1e59ce8075c.mockapi.io/api/category/${id}/product`)
            .then(res => {
                setProduct(res.data);
            });
    }, [id]);

    // Get current items based on pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = product
        .filter(i => i.name.toLowerCase().includes(search.toLowerCase()));

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const renderItems = currentItems.map(i => (
        <li className='card-st' key={i.id}>
            <img src={i.img} alt="img" />
            <span>{i.name}</span>
            <p>{i.description}</p>
            <span>{i.price}</span>
        </li>
    ));

    const renderPagination = () => {
        const pageNumbers = Math.ceil(currentItems.length / itemsPerPage);

        return (
            <ul className="pagination">
                {Array.from({ length: pageNumbers }, (_, index) => index + 1).map(number => (
                    <li key={number} onClick={() => paginate(number)}>
                        {number}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div>
            <div className='inp'>
                <input type="search" placeholder="Search . . ." onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div>
                <ul className='box'>
                    {renderItems.slice(indexOfFirstItem, indexOfLastItem)}
                </ul>
            </div>
            <div>
                {renderPagination()}
            </div>
        </div>
    );
};

export default Product;