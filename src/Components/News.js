import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


export default function News(props) {
        
    const [articles , setArticles] =useState([]);
    const [loading , setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults , setTotalResults] = useState(0);

    // Fetching api from Axios Library ..
    //or we can use fetch().then((res)=>res.json()).then((res)=>{console.log(res.data)})
    
    const updateNews =()=>{

      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=efd6ad49cfae4ddca48235c2f2e75804&page=${page+1}&pageSize=${props.pageSize}`;
      setLoading(true);
      fetch(url).then((parsedData)=> parsedData.json()).then( (parsedData) => {
      setArticles(articles.concat( parsedData.articles));
      setTotalResults(parsedData.totalResults);
      setLoading(false);
    })
     
    }

    useEffect( () => {
      updateNews();
      // eslint-disable-next-line
    },[])

    // fetching data using axios library;
    // useEffect(()=>{
    //     Axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=efd6ad49cfae4ddca48235c2f2e75804&page=${count}&pageSize=${props.pageSize}`).then( (res) =>{
    //       setArticles(res.data.articles)
    //       setPageNumber(res.data.totalResults)
    //       document.title = `${firstCapital(props.category)}-NewsMonkey`;
    //     })
    //   },[])
        
      //function for previous Click and Next Click

      // const handlePrevClick=()=>{

      //   console.log('click on prev button');
        

      //   if(count > 1 ){
      //     count = count - 1;
      //     Axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=efd6ad49cfae4ddca48235c2f2e75804&page=${count}&pageSize=${props.pageSize}`).then( (res) =>{
      //     setArticles(res.data.articles)
      //   })

      //   }
       
      // }

      // const handleNextClick=()=>{
      //   console.log('click on next button');
      //   if( count < Math.ceil(pageNumber/props.pageSize) ){
      //       count = count + 1;
      //       Axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=efd6ad49cfae4ddca48235c2f2e75804&page=${count}&pageSize=${props.pageSize}`).then( (res) =>{
      //       setArticles(res.data.articles)
            
      //     })
      //   }
        
      // }

      // function to make first later capital


      const firstCapital = ( string ) =>{
        
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

      // function to fetch more data...

      const fetchMoreData = () => {
         
          const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=efd6ad49cfae4ddca48235c2f2e75804&page=${page + 1}&pageSize=${props.pageSize}`;
          setPage(page + 1)
          setLoading(true);
          fetch(url).then((parsedData)=> parsedData.json()).then( (parsedData) => {
          setArticles(articles.concat( parsedData.articles));
          setTotalResults(parsedData.totalResults);
          setLoading(false);
      })
    }


      return(
      <>
          <h1 className="text-center mt-5 mb-3 pt-3" >
            NewsMonkey - Top {firstCapital(props.category)} HeadLine
          </h1>
          { loading && <Spinner/>}
          <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalResults} loader={<Spinner />}>
            <div className="container">

              <div className="row">
                {articles.map(Element => {
                  return <div className="col md-3" key={Element.url}>
                      <NewsItem title={Element.title ? Element.title.slice(0, 45) : ""} description={Element.description ? Element.description.slice(0, 88) : ""} imageUrl={Element.urlToImage} newsUrl={Element.url} author={Element.author === null ? "Unknown" : Element.author} date={Element.publishedAt} source={Element.source.name} />
                    </div>;
                })}
              </div>
            </div>
          </InfiniteScroll>
        </>
      )
  }


  News.defaultProps ={
    country : 'in',
    pageSize : 6,
    category : 'general'
  }

  News.propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string
  }