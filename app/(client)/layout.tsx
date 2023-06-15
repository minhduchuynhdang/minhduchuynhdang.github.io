import '../globals.css';
// Fonts
import { Nunito_Sans } from 'next/font/google';
// Components
import Navbar from '@/components/header/Navbar';
import Footer from '@/components/footer/Footer';

const nunitoSans = Nunito_Sans({
	subsets: ['vietnamese'],
	weight: ['300', '400', '600', '700', '800'],
});

export const metadata = {
	title: 'Công Ty Cổ Phần Xuất Nhập Khẩu Nông Sản Bắc Hà',
	description:
		'Công Ty Cổ Phần Xuất Nhập Khẩu Nông Sản Bắc Hà, với định hướng: Con Người Hạng A - Hệ Thống Hạng A - Chất Lượng Hạng A nhằm nghiên cứu, sản xuất, cung ứng các sản phẩm vaccine cho ngành chăn nuôi Việt Nam',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body
				className={nunitoSans.className + 'relative'}
				suppressHydrationWarning={true}>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
