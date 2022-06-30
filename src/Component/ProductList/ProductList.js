import React, { useEffect } from 'react'
import { useState, useContext } from 'react';
import { globalContext } from "../../Context/GlobalState";
import Product from '../Product/Product'
import ScrollTop from '../Common/ScrollTop'
import InfiniteScroll from "react-infinite-scroll-component";
import * as resource from "../../Resource/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableCells, faList } from '@fortawesome/free-solid-svg-icons'

import './ProductList.scss'
const ProductList = () => {
    const { state, setProductList } = useContext(globalContext);
    const { searchTerm, productList } = state;
    const [currentView, setCurrentView] = useState("grid");
    const [page, setPageData] = useState({
        pageNo: 1,
        totalPage: 1,
        totalItem: 1
    });

    function fetchMoreListItems() {
        fetchData(false, true)

    }
    const fetchData = async (differentSearchTerm, isMore) => {

        if (searchTerm && resource[searchTerm.trim().toLowerCase()]) {
            const data = resource[searchTerm.trim().toLowerCase()]?.data || {}
            const pagination = data.paging || {}

            setPageData((prevState) => ({
                pageNo: isMore ? prevState.pageNo + 1 : 1,
                totalPage: pagination?.total_page,
                totalItem: pagination?.total_item
            }))
            const list = data && data.products && data.products.length ? data.products : []
            if (list.length) {

                differentSearchTerm ? setProductList([...list]) : setProductList([...productList, ...list])
            }

        } else {
            setPageData({
                pageNo: 1,
                totalPage: 1,
                totalItem: 1
            })
            setProductList([])
        }

    }

    useEffect(() => {
        fetchData(true);
    }, [searchTerm])


    return (<>

        <div className='productList'>
            {productList.length ?
                <>
                    <div className='productSearchTerm'><span >{page?.pageNo}
                        - {page?.totalPage} of {page?.totalItem} results
                        for {searchTerm.toUpperCase()}</span></div>
                    <div className='viewCont'>
                        < FontAwesomeIcon onClick={() => { setCurrentView('list') }} title="list view" className={`listIcon ${currentView == 'list' ? "selected" : ''}`} icon={faList} size={"lg"} />
                        < FontAwesomeIcon onClick={() => { setCurrentView('grid') }} title="grid view" className={`gridIcon ${currentView == 'grid' ? "selected" : ''}`} icon={faTableCells} size={"lg"} />
                    </div>
                    <InfiniteScroll
                        dataLength={productList.length}
                        next={fetchMoreListItems}
                        hasMore={true}
                        loader={<h4>Loading...</h4>}>
                        <div className={`productContainer ${currentView}`} >
                            {productList.map((product, index) => {
                                return < Product product={product} key={`${product.id}${index}`} />
                            })}
                        </div>
                    </InfiniteScroll>
                </> :
                <div className='noProductFound'>
                    <img src="/NoProduct.jpg" alt="test" />
                </div >}
            <ScrollTop />
        </div >
    </>
    )
}

export default ProductList;