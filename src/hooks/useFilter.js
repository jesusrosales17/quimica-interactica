import React, { useEffect, useState } from 'react'

const useFilter = (filter, number) => {
  const [isFiltered, setIsFiltered] = useState(false);
  const grupos = [[1,3,11,19,37,55,87], [4,12,20,38,56,88], [21,39,71,103],[22,40,72, 104], [23,41,73,105], [24, 42, 74, 106], [25, 43, 75, 107], [26, 44, 76, 108], [27, 45, 77, 109], [28, 46, 78, 110], [29, 47, 79, 111], [30, 48, 80, 112], [5,13,31,49,81, 113], [6, 14, 32, 50, 82, 114], [7, 15, 33, 51, 83, 115], [8, 16, 34, 52, 84, 116], [9, 17, 35, 53, 85, 117], [2, 10, 18, 36, 54, 86, 118]]

  useEffect(() => {
    if(filter > 0 && filter <19 ) {
      
      grupos[filter - 1].forEach(i => {
        if(i === number) {
          setIsFiltered(true);
          return;
        } 
      })
    }
  }, [filter])


 return {isFiltered};
}

export default useFilter