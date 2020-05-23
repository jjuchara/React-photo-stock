import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import {
    fetchListPhotos,
    fetchMorePhotos,
    onClickPhotoPageToggle
} from "../../redux/actions/mainPage";
import Cards from "../../components/Cards/Cards";
import Card from "../../components/Card/Card";
import Loader from "../../components/UI/Loader/Loader";
import Unsplash  from "unsplash-js";

const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY

const SECRET = process.env.REACT_APP_SECRET_KEY

const authentication = () => {

    const unsplash = new Unsplash({
        accessKey: ACCESS_KEY,
        secret: SECRET,
        callbackUrl: "http://localhost:3000/"
    });

    const authenticationUrl = unsplash.auth.getAuthenticationUrl([
        "public",
        "write_likes",
    ]);

    window.location.assign(authenticationUrl);


    const code = window.location.search.split('code=')[1];

    if (code) {
        unsplash.auth.userAuthentication(code)
            .then(res => res.json())
            .then(json => unsplash.auth.setBearerToken(json.access_token))
    }

}

class Main extends Component {

    componentDidMount() {
        authentication()

        this.props.fetchListPhotos();
    }


    renderPhotos() {
        return Object.keys(this.props.data).map((item, index) => {
            const photo = this.props.data[item]

            return (
                <Card
                    key={photo.id + index}
                    src={photo.urls.small}
                    alt={photo.alt_description}
                    name={photo.user.username}
                    date={new Date(photo.created_at).toDateString()}
                    likes={photo.likes}
                    link={photo.user.links.html}
                    photoLink={photo.user.profile_image.small}
                    photoAlt={photo.user.username}
                    id={photo.id}
                    onClick={this.props.onClickPhotoPageToggle}
                />

            )

        })
    }

    render() {
        return (
            <Fragment>
                {
                    this.props.loading
                        ? <Loader/>
                        : <Cards>
                            <InfiniteScroll
                                dataLength={this.props.data.length}
                                hasMore={true}
                                next={this.props.fetchMorePhotos}
                                loader={<Loader/>}
                                style={{overflow: "unset"}}
                            >
                                {
                                    this.renderPhotos()
                                }
                            </InfiniteScroll>
                        </Cards>
                }

            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.mainPage.data,
        page: state.mainPage.page,
        count: state.mainPage.count,
        isSearch: state.mainPage.isSearch,
        oldValue: state.mainPage.oldValue,
        loading: state.mainPage.loading,
        isOpen: state.mainPage.isOpen

    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchListPhotos: () => dispatch(fetchListPhotos()),
        fetchMorePhotos: () => dispatch(fetchMorePhotos()),
        onClickPhotoPageToggle: () => dispatch(onClickPhotoPageToggle())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);