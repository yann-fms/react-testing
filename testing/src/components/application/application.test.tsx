import { getByTitle, render, screen } from '@testing-library/react';
import { Application } from './application';

describe('Application', () => {
    test('renders correctly', () => {
        render(<Application />);
        const pageHeading = screen.getByRole("heading", {
            name:'Job Application'
        });
        expect(pageHeading).toBeInTheDocument();

        const pageLabelOneHeading = screen.getByRole("heading", {
            level: 1
        });
        expect(pageLabelOneHeading).toBeInTheDocument();

        
        const pageUnderHeading = screen.getByRole("heading", {
            name:'Application'
        });
        expect(pageUnderHeading).toBeInTheDocument();
        
        const pageLabelUnderHeading = screen.getByRole("heading", {
            level: 2
        });
        expect(pageLabelUnderHeading).toBeInTheDocument();

        //!getByText
        const paragraphElement = screen.getByText('All fileds are mandatory');
        expect(paragraphElement).toBeInTheDocument();

        const nameElement = screen.getByRole("textbox", {
            name:'Name'
        });
        expect(nameElement).toBeInTheDocument();
        //! GetByDisplayValue
        const nameElementInputName = screen.getByDisplayValue('Yann');
        expect(nameElementInputName).toBeInTheDocument();
        //! GetByLabelText
        const nameElement2 = screen.getByLabelText("Name", {
            selector:'input'
        });
        expect(nameElement2).toBeInTheDocument();
        //! getByPlaceHolder
        const nameElement3 = screen.getByPlaceholderText('Fullname');
        expect(nameElement3).toBeInTheDocument();

        //! getByAltText
        const elementImg = screen.getByAltText('logo');
        expect(elementImg).toBeInTheDocument();

        //! getByTestid
        const elementcustomTestid = screen.getByTestId('custom-element');
        expect(elementcustomTestid).toBeInTheDocument();
        
        //! getByTitle
        const ElementSpan = screen.getByTitle('close');
        expect(ElementSpan).toBeInTheDocument();

        const bioElement = screen.getByRole('textbox', {
            name:'Bio'
        });
        expect(bioElement).toBeInTheDocument();

        const jobLocation = screen.getByRole('combobox');
        expect(jobLocation).toBeInTheDocument();

        const termsElement= screen.getByRole('checkbox');
        expect(termsElement).toBeInTheDocument();
        //!getByTextElement
        const termsElement2 = screen.getByLabelText("I agree to the terms and conditions");
        expect(termsElement2).toBeInTheDocument();
        //!getByText
        const termsElement3= screen.getByText('I agree to the terms and conditions');
        expect(termsElement3).toBeInTheDocument();
        
        const submitElement = screen.getByRole("button");
        expect(submitElement).toBeInTheDocument();

    })
})