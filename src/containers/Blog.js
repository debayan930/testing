import React, { Component } from 'react';
import 'tachyons';
import ScrollBar from '../components/ScrollBar';
import SidebarItem from '../components/SidebarItem';
import Content from '../components/Content';

class Blog extends Component{
	constructor(props){
		super(props);
		this.state = {
			posts: [],
			postInFocus: null
		}
		this.selectPost = this.selectPost.bind(this);
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(posts => this.setState({ posts: posts }));

		this.setState({ postInFocus: this.state.posts[0] });
	}

	selectPost = (post) => {
		this.setState({ postInFocus: post });
	}

	render(){
		const { posts, postInFocus } = this.state;

		const sidebarItems = posts.map(post => {
			return(
				<SidebarItem
					key={post.id}
					id={post.id}
					title={post.title}
					onClick={() => this.selectPost(post)}
				/>
			);
		});

		if(posts.length){
			return(
				<div className='tc'>
					<ScrollBar>
						{sidebarItems}
					</ScrollBar>
					<Content post={postInFocus?postInFocus:posts[0]}/>
				</div>
			);
		}else{
			return(
				<div className='tc'>Loading</div>
			);
		}
	}
};

export default Blog;