import React, { Component } from 'react';
import { NewsItem } from './NewsItem'; // Ensure the correct import path
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

    static defaultProps = {
        country: 'in',
        category: 'general',
    }

    static propTypes = {
        category: PropTypes.string,
        country: PropTypes.string,
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            pageSize: 10,
            totalResults: 0,
        }
        document.title = `NewsSphere - ${this.handleUpper()}`;
    }

    async fetchData(page, pageSize) {
        this.setState({ loading: true }); // Set loading state to true before fetching data
        this.props.setProgress(10);
        try {
            const baseUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api_key}&page=${page}&pageSize=${pageSize}`;
            const response = await fetch(baseUrl);
            this.props.setProgress(30);
            const data = await response.json(); // Await the JSON data
            this.props.setProgress(60);
            this.setState({
                articles: page === 1 ? data.articles : this.state.articles.concat(data.articles),
                totalResults: data.totalResults,
                loading: false,
            });
        } catch (error) {
            console.error('Error fetching news:', error);
            this.setState({ loading: false });
        }
        this.props.setProgress(100);
    }

    componentDidMount() {
        this.fetchData(this.state.page, this.state.pageSize);
    }

    handleUpper = () => {
        let newText = this.props.category.toLowerCase();
        return newText.charAt(0).toUpperCase() + newText.slice(1);
    }

    fetchMoreData = async () => {
        this.setState(
            prevState => ({ page: prevState.page + 1 }),
            () => this.fetchData(this.state.page, this.state.pageSize)
        );
        this.props.setProgress(0);
    };

    render() {
        return (
            <>
                <h1 className="text-center mx-3" style={{ marginTop: '75px' }}>{this.handleUpper()} - Top Headlines</h1>
                {this.state.loading && (
                    <div className="container mx-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" style={{ width: '30px', height: '30px', color: 'black' }}></span>
                    </div>
                )}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length < this.state.totalResults}
                    loader={
                        <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" style={{ width: '30px', height: '30px', color: 'black' }}></span>
                        </div>
                    }
                >
                    <div className="container my-4">
                        <div className="row row-cols-1 row-cols-md-3 g-3">
                            {this.state.articles.map((element) => {
                                return (
                                    <div className="col" key={element.url}>
                                        <NewsItem
                                            title={element.title}
                                            description={element.description}
                                            imageUrl={element.urlToImage}
                                            url={element.url}
                                            author={element.author}
                                            date={element.publishedAt}
                                            source={element.source.name}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        );
    }
}
