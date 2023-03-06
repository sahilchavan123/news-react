import React, { Component } from 'react'
import Newsitem from './Newsitem';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';



export class News extends Component {

  static defaultProps = {
    country: "in",
    pageSize: 9
  }

  static propsTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0


    }
    document.title = ` ${this.capitalizeFirstLetter(this.props.category)}  My App`;


  }
  async updateNews() {

    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e75f297879d245968ffd7efc3e1c108c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })


  }
  async componentDidMount() {
    // console.log("cmd");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e75f297879d245968ffd7efc3e1c108c&page=1&pageSize=${this.props.pageSize}`;
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // console.log(parsedData);
    // this.setState({articles : parsedData.articles,totalResults:parsedData.totalResults})

    this.updateNews();


  }

  handlePriviousClick = async () => {
    // console.log("Privious")
    // let url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e75f297879d245968ffd7efc3e1c108c&page=${ this.state.page -1}&pageSize=${this.props.pageSize}`;
    //   let data = await fetch(url);
    //   let parsedData = await data.json()
    //   console.log(parsedData);

    // this.setState({
    //   page: this.state.page -1,
    //   articles : parsedData.articles
    // })
    this.setState({ page: this.state.page - 1 })
    this.updateNews();



  }
  handleNextClick = async () => {
    console.log("Next");
    //   if( this.state.page +1 >Math.ceil(this.state.totalResults/this.props.pageSizes)){

    //   }
    // else{

    //   let url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e75f297879d245968ffd7efc3e1c108c&page=${ this.state.page +1}&pageSize=${this.props.pageSize}`;
    //     let data = await fetch(url);
    //     let parsedData = await data.json()
    //     console.log(parsedData);

    //   this.setState({
    //     page: this.state.page +1,
    //     articles : parsedData.articles
    //   })
    // }
    this.setState({ page: this.state.page + 1 })
    this.updateNews();
  }
  
  fetchMoreData = async () => {
   this.setState({page:this.state.page+1})
   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e75f297879d245968ffd7efc3e1c108c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  
   let data = await fetch(url);
   let parsedData = await data.json()
   console.log(parsedData);
   this.setState({ articles: this.state.articles .concat(parsedData.articles), totalResults: parsedData.totalResults })

    
  };


  render() {
    console.log("render")
    return (
      < >
        <h2 className='text-center'> NewsApp Top  {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
         
          hasMore={this.state.articles.length!== this.state.totalResults}
          loader={<h4 className='text-center' >Loading...</h4>}>

          <div className='container'>
          <div className='row'>
            {this.state.articles.map((element) => {
              return <div className='col md-3' key={element.url} >
                <Newsitem title={element.title ? element.title.slice(0, 50) : ""} description={element.description ? element.description.slice(0, 70) : ""} imgurl={element.urlToImage}
                  newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>

                
            })}
          </div>
          </div>

        </InfiniteScroll>
       
      </>
    )
  }
}

export default News

