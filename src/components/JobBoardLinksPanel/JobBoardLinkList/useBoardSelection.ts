import { useState } from "react";

const useBoardSelection = (initialSelectedIndex: number) => {
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);

  const handleSelectionChange = (index: number) => {
    setSelectedIndex(index);
  };

  return {
    selectedIndex,
    handleSelectionChange,
  };
};

export default useBoardSelection;