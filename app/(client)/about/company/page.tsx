// Components
import AboutCompanyBanner from '@/components/pages/about/company/AboutCompanyBanner';
import AboutCompanyIntro from '@/components/pages/about/company/AboutCompanyIntro';
import AboutCompanyFeatures from '@/components/pages/about/company/AboutCompanyFeatures';
import AboutCompanyValues from '@/components/pages/about/company/AboutCompanyValues';

export const metadata = {
	title: 'Giới Thiệu Về Công Ty - Bắc Hà Vet',
};

export default function AboutCompany() {
	return (
		<>
			<AboutCompanyBanner />
			<AboutCompanyIntro />
			<AboutCompanyFeatures />
			<AboutCompanyValues />
		</>
	);
}
