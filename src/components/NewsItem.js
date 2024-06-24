import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let { title, description, imageUrl, url } = this.props;
        return (
            <div className="container my-5">
                
                <div className="card" style={{ width: '25rem',height: '25rem' }}>
                    <img src={imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body overflow-y-auto">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={url} target='_blank' class="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
                    
            </div>
        )
    }
}