import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setamount] = useState(0)
  const [from,setFrom]= useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currenyInfo = useCurrencyInfo(from)
  const options = Object.keys(currenyInfo)
  const swap =()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(convertedAmount)
  }
  const convert = ()=>{
    setConvertedAmount(amount * currenyInfo[to])
  }
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/1119974/pexels-photo-1119974.jpeg`,
        }}
    >
        <div className="w-full flex h-screen">
        <div className="flex-1 text-white text-shadow-lg text-2xl flex justify-center items-center bg-slate-400" style={{background:`url('https://images.pexels.com/photos/5947062/pexels-photo-5947062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2) no-repeat 0 0`}} >
    Chai aur code
  </div>
  <div className="flex-1 flex justify-center items-center">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency)=> setamount(amount)}
                            selectCurrency={from}
                            onAmountChange={(amount)=>setamount(amount)}
                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency)=> setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase() } to {to.toUpperCase()}
                    </button>
                </form>
            </div>
            </div>
        </div>
    </div>
);

}

export default App
