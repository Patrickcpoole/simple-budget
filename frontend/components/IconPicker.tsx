import React, { useState } from 'react';
import * as Icons from 'react-icons/md';
import { IconType } from 'react-icons'; // Importing the IconType

interface IconPickerProps {
  onSelect: (iconName: string) => void; // Define the onSelect prop type
}

const IconPicker: React.FC<IconPickerProps> = ({ onSelect }) => {
  const [searchTerm, setSearchTerm] = useState<string>(''); // Define the type for searchTerm

  // Filtering icons based on search term and ensuring the type is IconType
  const iconList = Object.keys(Icons).filter(name =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  ) as Array<keyof typeof Icons>;

  return (
    <div>
      <input 
        type="text"
        placeholder="Search icons..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        {iconList.map(iconName => {
          const IconComponent = Icons[iconName] as IconType; // Cast to IconType
          return (
            <div key={iconName} onClick={() => onSelect(iconName)}>
              <IconComponent />
              <span>{iconName}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IconPicker;
