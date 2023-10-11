import {Link} from "react-router-dom";
import  '../category/Category.scss'
import axios from "axios";
import {useEffect, useState} from "react";



const Category = () => {

 const [category, setCategory] = useState({})
    useEffect(() => {
      axios
          .get('https://65263b7d67cfb1e59ce8075c.mockapi.io/api/category')
          .then(res => {
              setCategory(res.data)
          })
    }, [])

    return (
        <div>
            <div className="container">
              <ul className="box">
                  {
                      category?.length &&
                      category?.map((i) => (
                          <li className="box__card" key={i.id}>
                              <img src={i.img} alt="img"/>
                              <span>{i.name}</span>
                              <Link to={`/product/${i.id}`}>praduct</Link>
                          </li>
                      ))
                  }

              </ul>
            </div>
        </div>
    );
};

export default Category;
