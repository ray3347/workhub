import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const budget = [
  { id: 2, name: '$', unavailable: false },
  { id: 3, name: '$$', unavailable: false },
  { id: 4, name: '$$$', unavailable: false },
  { id: 5, name: '$$$$', unavailable: false },
]

function BudgetList() {
  const [selectedbudget, setselectedbudget] = useState(budget[0])

  return (
    <Listbox value={selectedbudget} onChange={setselectedbudget}>
        <div className='px-5 py-2 border-2 border-blue-800 w-44 text-center relative hover:bg-gray-200'>
            <Listbox.Button className={'w-9/12'}>{selectedbudget.name}</Listbox.Button>
            <ArrowDropDownIcon className='absolute right-2'/>
            <Listbox.Options>
                {budget.map((budget) => (
                <Listbox.Option
                    className={'text-center hover:cursor-pointer  hover:bg-blue-600 hover:rounded-lg hover:text-white'}
                    key={budget.id}
                    value={budget}
                    disabled={budget.unavailable}
                >
                    {budget.name}
                </Listbox.Option>
                ))}
            </Listbox.Options>
        </div>
      
      
    </Listbox>
  )
}

export default BudgetList;