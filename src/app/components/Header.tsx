import React from 'react'

function Header() {
	return (
		<>
			<div id="header-container" className="flex flex-row">
				<div className="flex flex-col mr-12">
					<h1 className="text-4xl bold">Paleo-3D</h1>
					<p>Explore 3D models of prehistoric creatures</p>
				</div>
				<div className="m-6 border-2 border-gray-400">breadcrumb area</div>
				<div className="m-6 border-2 border-gray-400">Search area</div>
			</div>
		</>
	)
}

export default Header
