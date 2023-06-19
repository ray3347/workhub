import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const duration = [
  { id: 2, name: 'One-Time', unavailable: false },
  { id: 3, name: 'Short-Term', unavailable: false },
  { id: 4, name: 'Long-Term', unavailable: false },
]

function DurationList() {
  const [selectedduration, setselectedduration] = useState(duration[0])

  return (
    <Listbox value={selectedduration} onChange={setselectedduration}>
        <div className='px-5 py-2 border-2 border-blue-800 w-44 text-center relative hover:bg-gray-200'>
            <Listbox.Button className={'w-9/12'}>{selectedduration.name}</Listbox.Button>
            <ArrowDropDownIcon className='absolute right-2'/>
            <Listbox.Options>
                {duration.map((duration) => (
                <Listbox.Option
                    className={'px-5 py-2 text-center hover:cursor-pointer  hover:bg-blue-600 hover:rounded-lg hover:text-white'}
                    key={duration.id}
                    value={duration}
                    disabled={duration.unavailable}
                    placeholder='Choose duration'
                >
                    {duration.name}
                </Listbox.Option>
                ))}
            </Listbox.Options>
        </div>
      
      
    </Listbox>
  )
}

export default DurationList;