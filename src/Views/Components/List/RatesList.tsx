import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const rates = [
  { id: 2, name: 'Top-Rated', unavailable: false },
  { id: 3, name: 'Nearest', unavailable: false },
  { id: 4, name: 'Popularity', unavailable: false },
  { id: 5, name: 'Trending', unavailable: false },
  { id: 6, name: 'Budget', unavailable: false },
]

function RatesList() {
  const [selectedrates, setselectedrates] = useState(rates[0])

  return (
    <Listbox value={selectedrates} onChange={setselectedrates}>
        <div className='px-5 py-2 border-2 border-blue-800 w-44 text-center relative hover:bg-gray-200'>
            <Listbox.Button>{selectedrates.name}</Listbox.Button>
            <ArrowDropDownIcon className='absolute right-2'/>
            <Listbox.Options>
                {rates.map((rates) => (
                <Listbox.Option
                    className={'px-5 py-2 text-center hover:cursor-pointer  hover:bg-blue-600 hover:rounded-lg hover:text-white'}
                    key={rates.id}
                    value={rates}
                    disabled={rates.unavailable}
                    placeholder='Choose rates'
                >
                    {rates.name}
                </Listbox.Option>
                ))}
            </Listbox.Options>
        </div>
      
      
    </Listbox>
  )
}

export default RatesList;