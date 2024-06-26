import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let { title, description, imageUrl, url, author, date ,source} = this.props;

        return (
            <div className="container my-5">
                
                <div className="card shadow-lg mb-1 bg-white rounded h-100" >
                    <div style={{ display:'flex', position:'absolute', justifyContent:'flex-end',fontSize:'16px' }}>
                        <span className="badge rounded-pill bg-danger" >{source}</span>
                    </div>
                    <img src={!imageUrl ?"https://bl-i.thgim.com/public/incoming/7681di/article68316043.ece/alternates/LANDSCAPE_1200/IMG_iStock-1268669581.jp_2_1_0EB95CDN.jpg":imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body overflow-y-auto">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text"><small class="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                        <p className="card-text">{description?description:"..."}</p>
                        <a href={url} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                   
                </div>
                    
            </div>
        )
    }
}