import { useState } from "react"
import { assets } from "../../assets/assets"
import styles from "./MediaHome.module.css"
import HomeComponent from "../HomeComponent"

const MediaHome = () => {
	// State to track if shatter is clicked
	const [isShatterClicked, setIsShatterClicked] = useState(false)

	// Function to handle click on shatter
	const handleShatterClick = () => {
		setIsShatterClicked(true)
	}
	return (
		<div className={styles.container}>
			<div className={styles.topBanner}>
				<div className={styles.topBannerImg1}>
					<div className={styles.textBanner}>
						<img
							src={assets.bannerText}
							alt=""
						/>
					</div>
					<div className={styles.sourLmli}>
						<img
							src={assets.sourLmli}
							alt=""
						/>
					</div>
				</div>
			</div>

			<div className={styles.whiteBanner}>
				<div className={styles.whiteBannerImg}>
					<img
						src={assets.mediaBgWhite}
						alt=""
					/>
				</div>
				<div className={styles.whiteBannerContent}>
					<h2>
						A Sweet and Sour Trip <br /> Down Memory Lane!
					</h2>
					<div className={styles.sourFruit}>
						<img
							src={assets.sourFruit}
							alt=""
						/>
					</div>
				</div>
				<div className={styles.line1}>
					<img
						src={assets.mediaLine1}
						alt=""
					/>
				</div>
			</div>

			<div className={styles.yellowBanner}>
				<div className={styles.yellowBannerImg}>
					<img
						src={assets.mediaBgYellow}
						alt=""
					/>
				</div>
				<div className={styles.yellowBannerContainer}>
					<div className={styles.mangoBox}>
						<img
							src={assets.mangoBox}
							alt=""
						/>
					</div>
					<h2>
						Mango Magic <br />
						in Every Katli!
					</h2>
					<div className={styles.mangoKid}>
						<img
							src={assets.mangoKid}
							alt=""
						/>
					</div>
				</div>
				<div className={styles.line2}>
					<img
						src={assets.mediaLine2}
						alt=""
					/>
				</div>
			</div>

			<div className={styles.purpleBanner}>
				<div className={styles.purpleBannerImg}>
					<img
						src={assets.mediaBgPurple}
						alt=""
					/>
				</div>
				<div className={styles.purpleBannerContainer}>
					<div className={styles.purpleBannerLeft}>
						<div className={styles.jamun}>
							<img
								src={assets.jamun}
								alt=""
							/>
						</div>
						<h2>
							Jamun Flavor, <br />
							Anytime Craving Savior!
						</h2>
					</div>
					<div className={styles.lollipop}>
						<img
							src={assets.lollipop}
							alt=""
						/>
					</div>
				</div>
				<div className={styles.line3}>
					<img
						src={assets.mediaLine3}
						alt=""
					/>
				</div>
			</div>

			<div className={styles.pinkBanner}>
				<div className={styles.pinkBannerImg}>
					<img
						src={assets.mediaBgPink}
						alt=""
					/>
				</div>
				<div className={styles.pinkBannerContainer}>
					<div className={styles.pinkBannerLeft}>
						<div className={styles.candy1}>
							<img
								src={assets.candies2}
								alt=""
							/>
						</div>
						<h2>
							Sweet, Tangy, <br /> and Totally Fun!
						</h2>
					</div>
					<div className={styles.mixedFruit}>
						<img
							src={assets.mixfruits1}
							alt=""
						/>
					</div>
				</div>
				<div className={styles.line4}>
					<img
						src={assets.mediaLine4}
						alt=""
					/>
				</div>
			</div>

			<div className={styles.greenBanner}>
				<div className={styles.greenBannerImg}>
					<img
						src={assets.mediaBgGreen}
						alt=""
					/>
				</div>
				<div className={styles.greenBannerContainer}>
					{/* <div className={styles.greenBannerLeft}> */}
					<div className={styles.mixedFruit2}>
						<img
							src={assets.mixfruits2}
							alt=""
						/>
					</div>
					<div className={styles.candy2}>
						<img
							src={assets.candies1}
							alt=""
						/>
					</div>
					{/* </div> */}
					<h2>
						Assorted Flavors,
						<br /> Double the Fun!
					</h2>
				</div>
			</div>

			<div className={styles.shatterContainer}>
				<div
					className={`${styles.shatter} ${
						isShatterClicked ? styles.shatterClicked : ""
					}`}
					onClick={handleShatterClick}
				>
					<div className={styles.shatterImg}>
						<img
							src={assets.mediaShatter}
							alt=""
						/>
					</div>
				</div>
				<div className={styles.roof}>
					<img
						src={assets.roof}
						alt=""
					/>
				</div>

				{isShatterClicked && (
					<div className={styles.homeComponent}>
						<HomeComponent />
					</div>
				)}
			</div>
		</div>
	)
}

export default MediaHome
