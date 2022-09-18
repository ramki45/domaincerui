


const Navbar = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className="main_container">

			<nav className="navbar">
				<h1>NOAH</h1>
				<button className="main_white_btn" onClick={handleLogout}>
					Logout
				</button>
			</nav>
			


		</div>
	);
};

export default Navbar;