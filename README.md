# React Text Flipper

## Installation

Run `npm i react-text-flipper` or `yarn add react-text-flipper` in the root of your React project.

## Usage

In the component where you want to see the animation of text string flipper import `TextFlipper` with 

```js
import TextFlipper from 'react-text-flipper'
```

Render passing the props with array pfstring to flip through and the last string will be the final one. 

Optionally pass the interval between flips (default is 500ms) and the HTML element to use (default is <p>):

```jsx
import TextFlipper from './TextFlipper'

function App() {

// array of strings to flip through, the final one will stay
const text = [
  "バルセロナ・コード・スクール",
  "巴塞罗那代码学校",
  "مدرسة برشلونة لتعليم البرمجة",
  "École de code de Barcelone",
  "Barcelona Codierschule",
  "Escuela de Código de Barcelona",
  "Escola de Código de Barcelona",
  "Barselona Kod Okulu",
  "Scuola di Codice di Barcellona",
  "Барселонская школа кода",
  "Barcelona Code School",
];

  return (
    <>
    {/* rendering TextFlipper */}
      <TextFlipper
        textSequence={text} // passing the array of strings
        interval={100} 
        tagName="h1" // HTML tag to use for the text
      />
    </>
  )
}

export default App
```

<img src='https://barcelonacodeschool.com/files/pics/text-type-animation-effect-react.gif' alt='A layout component to create a typewriter typing animation effect for text'/>

## Props


---

npm: https://www.npmjs.com/package/react-text-flipper

Done at <a href='https://barcelonacodeschool.com'>Barcelona Code School</a>