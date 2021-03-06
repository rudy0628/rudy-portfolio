import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../components/introduce/hero/Hero';
import About from '../components/introduce/about/About';
import Professional from '../components/introduce/professional/Professional';
import TimeLine from '../components/introduce/timeline/Timeline';

const IntroducePage = () => {
	return (
		<Fragment>
			<Helmet>
				<meta
					name="description"
					content="You can understand me what skill i have, what my professional, and you can also contact me facebook、Instagram、email、github"
				/>
				<title>Rudy's portfolio-Introduce</title>
			</Helmet>
			<Hero />
			<About />
			<Professional />
			<TimeLine />
		</Fragment>
	);
};

export default IntroducePage;
