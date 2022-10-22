import { render } from 'react-dom';
import { describe } from 'vitest'
import App from './App';
import duiValidator from './duiValidator';
import * as ReactDOM from 'react-dom';

describe('App', () => { 

  let element: HTMLDivElement;

  beforeEach(()=>{
    element = document.createElement('div');
    document.body.appendChild(element);
    ReactDOM.render(<App/>,element);
  })

  afterEach(()=>{
    document.body.removeChild(element);
    element.remove();
  })

  it.todo('should render');

  it.todo('should have title "Mi DUI es valido?"', () => {
    const title = element.querySelector('h1');
    expect(title?.textContent).toBe('Mi DUI es valido?');
  });

  it.todo('should have an input text', () => {
    const input= element.querySelector('input');
    expect(input?.type).toBe('text');
  });
  it.todo('should have a button with text "Validar"', () => {
    const button = element.querySelector('button');
    expect(button?.textContent).toBe('Validar');
  });
  /* Lo que demas que se les ocurra que puedan probar */
  it.todo('should have a button element', () => {
    const button = element.querySelector('button');
    expect(button).toBeInTheDocument;
  });
  
})
