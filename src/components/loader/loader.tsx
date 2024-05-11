interface IProps {
	className?: string;
}

const Loader: React.FC<IProps> = (props) => {
	return <div className={`login-loader ${props.className}`} />;
};
export default Loader;
