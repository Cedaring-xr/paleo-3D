// import Image from 'next/image'

import Footer from './components/Footer'
import Header from './components/Header'

export default function Home() {
	return (
		<div className=" items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<Header />
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<div className="flex w-full justify-between">
					<div className="w-[30%] min-w-[280px] gap-2 border-black border-[1px] text-center h-[300px] mt-12 pt-8">
						Explore by timeline
					</div>
					<div className="w-[30%] min-w-[280px] gap-2 border-black border-[1px] text-center h-[300px] mt-12 pt-8">
						Explore by category
					</div>
					<div className="w-[30%] min-w-[280px] gap-2 border-black border-[1px] text-center h-[300px] mt-12 pt-8">
						Explore by location
					</div>
				</div>
			</main>
			<Footer />
		</div>
	)
}
