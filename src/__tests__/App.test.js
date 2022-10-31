import renderer from 'react-test-renderer';
import App from '../App';
import { Provider } from 'react-redux';

it('App component renders properly', () => {
    const component = renderer.create(<Provider><App/></Provider>);

    // let tree = component.toJSON();

    expect(component).toMatchSnapshot();
})

const sum = (a, b) => {
    return a + b;
}

it('sums properly', () => {
    const inputA = 5;
    const inputB = 7;

    const expectedOutput = 12;

    expect(sum(inputA, inputB)).toEqual(expectedOutput)
})