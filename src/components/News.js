import React, { Component } from 'react';
import { NewsItem } from './NewsItem'; // Ensure the correct import path
import PropTypes from 'prop-types'
export class News extends Component {

    static defaultProps={
        
        country: 'in',
        category: 'general',
    }

    static propTypes = {
        category: PropTypes.string,
        country:PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            pageSize:10
        };
    }

    async fetchData(page,pageSize) {
        this.setState({ loading: true }); // Set loading state to true before fetching data

        try {
            let baseUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7ac0c233502f48a0a0287345adbaaae3&page=${this.state.page}&pageSize=${this.state.pageSize}`;
            let response = await fetch(baseUrl);
            let data = await response.json(); // Await the JSON data
            this.setState({
                articles: data.articles,
                totalPage: data.totalResults,
                loading: false // Set loading state to false after data is fetched
            });
        } catch (error) {
            console.error('Error fetching news:', error);
            this.setState({ loading: false });
        }
    }
    componentDidMount() {
        this.fetchData(this.state.page, this.state.pageSize);
    }

    handlePrevious = () => {
        this.setState(
            (prevState) => ({ page: prevState.page - 1 }),
            () => this.fetchData(this.state.page, this.state.pageSize)
        );
    }

    handleNext = () => {
    let totalPageCount = Math.ceil(this.state.totalPage / this.state.pageSize);

    this.setState(
        (prevState) => {
            if (prevState.page < totalPageCount) {
                return { page: prevState.page + 1 };
            }
        },
        () => {
            if (this.state.page <= totalPageCount) {
                this.fetchData(this.state.page, this.state.pageSize);
            }
        }
    );
}



    render() {
        return (
            <div className="container my-4">
                <h1 className="text-center mx-3">NewsSphere - Top Headlines</h1>
                {this.state.loading ? (
                    <div>
                        <button class="btn btn-dark" type="button" disabled>
                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Loading...
                        </button>
                    </div>
                ) : (
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {this.state.articles.map((element) => {
                            return (
                                <div className="col" key={element.url}>
                                    <NewsItem
                                        title={element.title}
                                        description={element.description}
                                        imageUrl={element.urlToImage}
                                        url={element.url}
                                    />
                                </div>
                            );
                        })}
                    </div>
                )
                }
                <div class="d-grid gap-2 d-md-flex justify-content-md-center" >
                    <button class="btn btn-dark me-md-2" disabled={this.state.page <= 1} type="button" onClick={this.handlePrevious} style={{ width: '10rem' }}>&larr; Previous</button>
                    <button class="btn btn-dark" disabled={this.state.page >= Math.ceil(this.state.totalPage / this.state.pageSize)}  type="button" onClick={this.handleNext} style={{ width: '10rem' }}>Next &rarr;</button>
                </div>
            </div>
            
        );
    }
}


