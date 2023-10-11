import {useEffect, useState} from 'react';
import './Product.scss'
import {useParams} from "react-router";
import axios from "axios";

const Product = () => {
    const { id } = useParams()

    const [search, setSearch] = useState('')
    const [product, setProduct] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(5)

    useEffect(() => {
        axios.get(`https://65263b7d67cfb1e59ce8075c.mockapi.io/api/category/${id || 1}/product`)
            .then(res => {
                setProduct(res.data);
            });
    }, [id]);

    // Get current items based on pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = product
        .filter(i => i.name.toLowerCase().includes(search.toLowerCase()))
        .slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <div>
                <input type="search" placeholder="Search . . ." onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div>
                <ul>
                    {currentItems.map(i => (
                        <li key={i.id}>
                            <img src={i.img} alt="img" />
                            <span>{i.name}</span>
                            <p>{i.description}</p>
                            <span>{i.price}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                {/* Pagination */}
                <ul className="pagination">
                    {product
                        .filter(i => i.name.toLowerCase().includes(search.toLowerCase()))
                        .map((_, index) => (
                            <li key={index} onClick={() => paginate(index + 1)}>
                                {index + 1}
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
};

export default Product;