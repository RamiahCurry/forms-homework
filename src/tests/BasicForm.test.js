import BasicForm from '../BasicForm'
import {render, screen, fireEvent } from '@testing-library/react' 
import { shallow } from 'enzyme';

import '@testing-library/jest-dom'

test("test if basic form renders", () => {
    render(<BasicForm/>);
    const element = screen.getByText (/Sign Up Sheet/i);

    expect (element).toBeInTheDocument();
})

test("test if name field renders", () => {
    render(<BasicForm/>);
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    screen.debug();

    fireEvent.change(screen.getByRole('textbox'), { 
        target: {value: 'Prof Jones'},
    })

    screen.debug();
})
