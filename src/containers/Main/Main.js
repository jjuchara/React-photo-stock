import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchListPhotos, fetchMorePhotos } from "../../redux/actions/mainPage";
import Cards from "../../components/Cards/Cards";
import Card from "../../components/Card/Card";


class Main extends Component {

    componentDidMount() {
        this.props.fetchListPhotos();
    }

    renderPhotos() {
        return Object.keys(this.props.data).map((item, index) => {
            const photo = this.props.data[item]


            return (
                <Card
                    key={photo.id}
                    src={photo.urls.thumb}
                    alt={photo.alt_description}
                    name={photo.user.username}
                    date={new Date(photo.created_at).toDateString()}
                    likes={photo.likes}
                    link={photo.user.links.html}
                />

            )

        })
    }

    render() {
        return (
            <Fragment>
                <Cards>
                    <InfiniteScroll
                        dataLength={this.props.data.length}
                        hasMore={true}
                        next={this.props.fetchMorePhotos}
                        loader={<h4>Loading.....</h4>}
                        style={{overflow:"unset"}}
                    >
                        {
                            this.renderPhotos()
                        }
                    </InfiniteScroll>
                </Cards>
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.mainPage.data,
        page: state.mainPage.page,
        count: state.mainPage.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchListPhotos: () => dispatch(fetchListPhotos()),
        fetchMorePhotos: () => dispatch(fetchMorePhotos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);