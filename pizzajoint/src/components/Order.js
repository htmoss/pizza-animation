import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
	hidden: {
		opacity: 0,
		x: '100vw',
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: 'spring',
			delay: 0.3,
			mass: 0.4,
			damping: 8,
			when: 'beforeChildren',
			staggerChildren: 0.4,
		},
	},
};

const childVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
	},
};

const Order = ({ pizza, setPizza }) => {
	return (
		<motion.div
			className='container order'
			variants={containerVariants}
			initial='hidden'
			animate='visible'
		>
			<h2>Thank you for your order :)</h2>
			<motion.p variants={childVariants}>
				You ordered a {pizza.base} pizza with:
			</motion.p>
			<motion.div variants={childVariants}>
				{pizza.toppings.map((topping) => (
					<div key={topping}>{topping}</div>
				))}
			</motion.div>
			<Link to='/'>
				<motion.button
					whileHover={{
						scale: 1.1,
						textShadow: '0px 0px 8px rgb(255,255,255)',
						boxShadow: '0px 0px 8px rgb(255,255,255)',
					}}
					onClick={() => {
						setPizza({ base: '', toppings: [] });
					}}
				>
					Start Over
				</motion.button>
			</Link>
		</motion.div>
	);
};

export default Order;
