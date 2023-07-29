import React from 'react';
import { render, screen , cleanup } from '@testing-library/react';
import FrontCard from './index';
import {
	defaultValuesFormat, frontCardArgs,
	frontCardFormatAllValues,
	frontCardFormatSomeValues, frontCardFormatWrongValues, frontCardWithAllValues,
	frontCardWithSomeValues,
	frontCardWithWrongValues,
} from '../../fixtures/FrontCard';

const pause = () => {
	return new Promise(resolve => {
			setTimeout(() => {
					resolve('');
			}, 100);
	});
};

describe('FrontCard default or empty', () => {
	afterEach(() => {
		cleanup();
	});
	test('Front Card need to exist', async () => { 
		render(<FrontCard cardData={frontCardArgs} />);

		const image = screen.getByRole('img');

		const holderName = screen.getByTestId('holderName');
		const holderNumber = screen.getByTestId('holderNumber');
		const expirationDare = screen.getByTestId('expirationDare');
		expect(image).toBeInTheDocument();
		expect(holderName).toBeInTheDocument();
		expect(holderNumber).toBeInTheDocument();
		expect(expirationDare).toBeInTheDocument();
	});

	test('Front card need to have 3 paragraphs', () => {
		render(<FrontCard cardData={frontCardArgs} />);

		const paragraphs = screen.getAllByRole('paragraph');
		expect(paragraphs).toHaveLength(3);
	});

	test('Front Card need to have default values', async () => { 
		render(<FrontCard cardData={frontCardArgs} />);
		const holderName = await screen.findByTestId('holderName');
		const holderNumber = screen.getByTestId('holderNumber');
		const expirationDare = screen.getByTestId('expirationDare');
		screen.debug();
		console.log({ defaultValuesFormat, holderName });
		expect(holderName).toHaveTextContent(defaultValuesFormat.holderName);
		expect(holderNumber).toHaveTextContent(defaultValuesFormat.holderNumber);
		expect(expirationDare).toHaveTextContent(defaultValuesFormat.expirationDare);
	});
});

describe('FrontCard with values', () => {
	test('FrontCard need to have some values', async () => {
		render(<FrontCard cardData={frontCardWithSomeValues} />);
		
		const holderNumber = await screen.findByTestId('holderNumber');
		const expirationDare = screen.getByTestId('expirationDare');

		expect(holderNumber).toHaveTextContent(frontCardFormatSomeValues.holderNumber);
		expect(expirationDare).toHaveTextContent(frontCardFormatSomeValues.expirationDare);
	});

	test('FrontCard need to have All values', async () => {
		render(<FrontCard cardData={frontCardWithAllValues} />);
	
		const holderName = await screen.findByTestId('holderName');
		const holderNumber = screen.getByTestId('holderNumber');
		const expirationDare = screen.getByTestId('expirationDare');
		
		expect(holderName).toHaveTextContent(frontCardFormatAllValues.holderName);
		expect(holderNumber).toHaveTextContent(frontCardFormatAllValues.holderNumber);
		expect(expirationDare).toHaveTextContent(frontCardFormatAllValues.expirationDare);
	});

	test('FrontCard need to have All values', async () => {
		render(<FrontCard cardData={frontCardWithWrongValues} />);
	
		const holderName = await screen.findByTestId('holderName');
		const holderNumber = screen.getByTestId('holderNumber');
		const expirationDare = screen.getByTestId('expirationDare');
		
		expect(holderName).toHaveTextContent(frontCardFormatWrongValues.holderName);
		expect(holderNumber).toHaveTextContent(frontCardFormatWrongValues.holderNumber);
		expect(expirationDare).toHaveTextContent(frontCardFormatWrongValues.expirationDare);
	});
});
