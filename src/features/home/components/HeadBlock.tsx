import { homeImage } from '@/assets'
import { Link } from 'react-router-dom'

export const HeadBlock = () => {
	return <section className='container py-[60px] flex flex-wrap lg:grid lg:grid-cols-2 items-center'>
		<div className='order-2 lg:order-1'>
			<h1 className='text-[28px] leading-[36px] mb-[10px] font-[700] md:text-[48px] md:leading-[56px]'>Боты для аватарок</h1>
			<h2 className='text-[18px] leading-[24px] mb-[30px] md:text-[24px] md:mb-[50px] text-gray-utils'>Сделайте своё мероприятие узнаваемым</h2>
			<Link to='https://t.me/iamberzik' target='_blank'>
				<div className='btn'>
					Заказать бота
					<div className='btn2'></div>
				</div>
			</Link>


		</div>
		<div className='order-1 lg:order-2 flex justify-center'>
			<img src={homeImage} loading='lazy' alt='Мир ботов'
					 className='max-w-[70%] object-contain md:max-w-[60%] lg:max-w-[90%] align-middle lg:animate-up-down' />
		</div>


	</section>
}