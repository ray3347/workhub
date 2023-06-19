import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const location = [
  { id: 2, name: 'DKI Jakarta', unavailable: false },
  { id: 3, name: 'Tangerang', unavailable: false },
  { id: 4, name: 'Surabaya', unavailable: false },
  { id: 5, name: 'Semarang', unavailable: false },
]

function LocationList() {
  const [selectedLocation, setselectedLocation] = useState(location[0])

  return (
    <Listbox value={selectedLocation} onChange={setselectedLocation}>
        <div className='px-5 py-2 border-2 border-blue-800 w-44 text-center relative hover:bg-gray-200'>
            <Listbox.Button className={'w-9/12'}>{selectedLocation.name}</Listbox.Button>
            <ArrowDropDownIcon className='absolute right-2'/>
            <Listbox.Options>
                {location.map((location) => (
                <Listbox.Option
                    className={'px-5 py-2 text-center hover:cursor-pointer hover:bg-blue-600 hover:rounded-lg hover:text-white'}
                    key={location.id}
                    value={location}
                    disabled={location.unavailable}
                    placeholder='Choose Location'
                >
                    {location.name}
                </Listbox.Option>
                ))}
            </Listbox.Options>
        </div>
      
      
    </Listbox>
  )
}

export default LocationList;