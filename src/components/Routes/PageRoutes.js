import Overview from '../Layouts/Overview/Overview';
import Posts from '../Layouts/Posts/Posts';
import Pages from '../Layouts/Pages/Pages';
import Auth from '../Layouts/Auth/Auth';
import Edit from '../Layouts/EditProfile/Edit';
import Comments from '../Layouts/Comments/Comments';
import AddPost from '../Layouts/Posts/Addposts';
export default [
	{
		path: '/overview',
		exact: true,
		component: Overview
	},
	{
		path: '/posts',
		component: Posts
	},
	{
		path: '/pages',
		component: Pages
	},
	{
		path: '/edit',
		component: Edit
	},
	{
		path: '/comments',
		component: Comments
	},
	{
		path: '/add',
		component: AddPost
	},
	{
		path: '/',
		exact: true,
		component: Auth
	}
];
