import React from 'react';

class CommponentButton extends React.Component {
  render() {
    return (
      <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
        Class Commponent
      </button>
    );
  }
}

function ButtonRed() {
  return (
    <button className="h-10 px-6 font-semibold rounded-md bg-red-950 text-white" type="submit">
      Function
    </button>
  )
}

const ButtonGreen = () => {
  return (
    <button className="h-10 px-6 font-semibold rounded-md bg-green-950 text-white" type="submit">
      Arrow Function
    </button>
  )
}

const Button = (props) => {

  const {children = '...', varian = 'bg-neutral-500' }= props;

  return (
    <button className={`h-10 px-6 font-semibold rounded-md ${varian} text-white`} type="submit">
      {children}
    </button>
  )
}

function App() {
  return (
    <div className='flex justify-center bg-blue-600 min-h-screen items-center'>
      <div className='flex gap-x-3'>
         <CommponentButton></CommponentButton>
         <CommponentButton></CommponentButton>
         <CommponentButton></CommponentButton>
         <ButtonRed></ButtonRed>
         <ButtonGreen></ButtonGreen>
         <Button varian="bg-slate-700">
            Props
         </Button>
         <Button></Button>
      </div>
    </div>
  )
}

export default App
